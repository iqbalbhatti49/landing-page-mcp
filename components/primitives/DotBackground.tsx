"use client";

import { useEffect, useRef } from "react";

export function DotBackground() {
  const spotRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const el = spotRef.current;
    if (!el) return;

    const update = () => {
      el.style.setProperty("--mx", `${mousePos.current.x}px`);
      el.style.setProperty("--my", `${mousePos.current.y + window.scrollY}px`);
    };

    const onMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      update();
    };
    const onScroll = () => update();

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none z-0"
    >
      {/* Base dots */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Spotlight dots — bright near cursor */}
      <div
        ref={spotRef}
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.55) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          WebkitMaskImage:
            "radial-gradient(circle 180px at var(--mx, -9999px) var(--my, -9999px), black 0%, transparent 100%)",
          maskImage:
            "radial-gradient(circle 180px at var(--mx, -9999px) var(--my, -9999px), black 0%, transparent 100%)",
        }}
      />
    </div>
  );
}
