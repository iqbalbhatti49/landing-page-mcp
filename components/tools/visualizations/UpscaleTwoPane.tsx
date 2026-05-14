/* eslint-disable @next/next/no-img-element */
"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface Props {
  src: string;
  sourceLabel: string;
  resultLabel: string;
}

export function UpscaleTwoPane({ src, sourceLabel, resultLabel }: Props) {
  const [pos, setPos] = useState(42);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePos = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPos(Math.min(94, Math.max(6, ((clientX - rect.left) / rect.width) * 100)));
  }, []);

  useEffect(() => {
    const onUp = () => { dragging.current = false; };
    window.addEventListener("mouseup", onUp);
    return () => window.removeEventListener("mouseup", onUp);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full select-none overflow-hidden cursor-col-resize"
      onMouseMove={(e) => { if (dragging.current) updatePos(e.clientX); }}
    >
      {/* After: sharp */}
      <img
        src={src}
        alt=""
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Before: blurry/pixelated, clipped to left of handle */}
      <img
        src={src}
        alt=""
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          clipPath: `inset(0 ${100 - pos}% 0 0)`,
          filter: "blur(2.5px) saturate(0.45)",
        }}
      />

      {/* Divider line */}
      <div
        className="absolute inset-y-0 w-[2px] bg-white/90"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
      />

      {/* Handle */}
      <button
        className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center z-10"
        style={{ left: `${pos}%` }}
        onMouseDown={() => { dragging.current = true; }}
        onTouchStart={(e) => updatePos(e.touches[0].clientX)}
        onTouchMove={(e) => updatePos(e.touches[0].clientX)}
      >
        <svg width="18" height="10" viewBox="0 0 18 10" fill="none">
          <path
            d="M5 1L1 5L5 9M13 1L17 5L13 9"
            stroke="#111"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Labels */}
      <span className="absolute bottom-3 left-3 font-mono text-[10px] text-white/85 bg-black/55 px-[6px] py-[3px] rounded pointer-events-none">
        {sourceLabel} · before
      </span>
      <span className="absolute bottom-3 right-3 font-mono text-[10px] text-white/85 bg-black/55 px-[6px] py-[3px] rounded pointer-events-none">
        {resultLabel} · 4×
      </span>
    </div>
  );
}
