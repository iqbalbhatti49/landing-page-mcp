"use client";

import { useEffect, useRef } from "react";

const SEPARATION = 150;
const AMOUNTX    = 40;
const AMOUNTY    = 80;   // more rows to fill height
const FOV_DEG    = 100;
const CAM_Y      = 355;
const CAM_Z      = 6000; // far back so near rows don't overshoot

export function DotWaveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rafId: number;
    let count = 0;
    const dpr = Math.min(window.devicePixelRatio, 2);

    function resize() {
      const p = canvas!.parentElement;
      if (!p) return;
      canvas!.width  = p.offsetWidth  * dpr;
      canvas!.height = p.offsetHeight * dpr;
    }

    resize();
    window.addEventListener("resize", resize, { passive: true });

    function project(x: number, y: number, z: number) {
      const W  = canvas!.width;
      const H  = canvas!.height;
      const fl = (H / 2) / Math.tan(((FOV_DEG * Math.PI) / 180) / 2);
      const dz = CAM_Z - z;
      if (dz <= 1) return null;
      const scale = fl / dz;
      return {
        sx:    W / 2 + x * scale,
        // horizon at top edge so grid fills canvas top→bottom
        sy:    H * 0.05 - (y - CAM_Y) * scale,
        scale,
      };
    }

    function animate() {
      rafId = requestAnimationFrame(animate);
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          const x3 = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
          const y3 =
            Math.sin((ix + count) * 0.3) * 50 +
            Math.sin((iy + count) * 0.5) * 50;
          const z3 = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;

          const p = project(x3, y3, z3);
          if (!p) continue;

          const W = canvas!.width;
          const H = canvas!.height;
          if (p.sx < -10 || p.sx > W + 10 || p.sy < -10 || p.sy > H + 10) continue;

          const r     = Math.max(0.5, 4 * p.scale);
          const alpha = Math.min(0.95, p.scale * 1.4);

          ctx!.beginPath();
          ctx!.arc(p.sx, p.sy, r, 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(200,200,200,${alpha})`;
          ctx!.fill();
        }
      }

      count += 0.1;
    }

    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="block w-full h-full pointer-events-none"
      style={{ transform: "rotate(180deg)" }}
    />
  );
}
