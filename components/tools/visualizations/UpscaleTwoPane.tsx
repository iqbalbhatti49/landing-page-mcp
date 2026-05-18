/* eslint-disable @next/next/no-img-element */
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChatMock } from "./ChatMock";

interface Props {
  src: string;
  sourceLabel: string;
  resultLabel: string;
}

export function UpscaleTwoPane({ sourceLabel, resultLabel }: Props) {
  const [pos, setPos] = useState(42);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePos = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPos(
      Math.min(94, Math.max(6, ((clientX - rect.left) / rect.width) * 100)),
    );
  }, []);

  useEffect(() => {
    const onUp = () => {
      dragging.current = false;
    };
    window.addEventListener("mouseup", onUp);
    return () => window.removeEventListener("mouseup", onUp);
  }, []);

  return (
    <ChatMock
      prompt="Upscale this portrait to 4× resolution, keep edges sharp"
      status="Upscaled · 4×"
      badges={["4096 × 2560", "Detail-aware"]}
    >
      <div
        ref={containerRef}
        className="absolute inset-0 rounded-xl overflow-hidden select-none cursor-col-resize"
        onMouseMove={(e) => { if (dragging.current) updatePos(e.clientX); }}
      >
        <img src="/sharp.png" alt="" draggable={false} className="absolute inset-0 w-full h-full object-cover" />
        <img
          src="/blurry.png" alt="" draggable={false}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        />
        <div className="absolute inset-y-0 w-[2px] bg-white/90" style={{ left: `${pos}%`, transform: "translateX(-50%)" }} />
        <button
          className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center z-10"
          style={{ left: `${pos}%` }}
          onMouseDown={() => { dragging.current = true; }}
          onTouchStart={(e) => updatePos(e.touches[0].clientX)}
          onTouchMove={(e) => updatePos(e.touches[0].clientX)}
        >
          <svg width="18" height="10" viewBox="0 0 18 10" fill="none">
            <path d="M5 1L1 5L5 9M13 1L17 5L13 9" stroke="#111" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <span className="absolute bottom-3 left-3 font-mono text-[10px] text-white/85 bg-black/55 px-[6px] py-[3px] rounded pointer-events-none">
          {sourceLabel} · before
        </span>
        <span className="absolute bottom-3 right-3 font-mono text-[10px] text-white/85 bg-black/55 px-[6px] py-[3px] rounded pointer-events-none">
          {resultLabel} · 4×
        </span>
      </div>
    </ChatMock>
  );
}
