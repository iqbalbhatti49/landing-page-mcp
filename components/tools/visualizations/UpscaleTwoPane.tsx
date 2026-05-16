/* eslint-disable @next/next/no-img-element */
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { WidgetFrame } from "../widgets/WidgetFrame";
import { Pill } from "../widgets/Pill";

interface Props {
  src: string;
  sourceLabel: string;
  resultLabel: string;
}

const ScaleIcon = (
  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
    <path
      d="M2 5V2H5M7 2H10V5M10 7V10H7M5 10H2V7"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ResIcon = (
  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
    <rect
      x="1.5"
      y="2.5"
      width="9"
      height="7"
      rx="1"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    <path
      d="M4 6H8"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

export function UpscaleTwoPane({
  sourceLabel,
  resultLabel,
}: Props) {
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
    <WidgetFrame
      title="Upscaling the image"
      description={<>4× detail-aware upscale. Edges, skin, and text stay sharp.</>}
      tags={
        <>
          <Pill variant="filled" icon={ScaleIcon}>
            4×
          </Pill>
          <Pill icon={ResIcon}>{resultLabel}</Pill>
        </>
      }
    >
      <div
        ref={containerRef}
        className="relative w-full h-full rounded-[14px] overflow-hidden select-none cursor-col-resize bg-white shadow-[0_1px_2px_rgba(20,10,40,0.06)]"
        onMouseMove={(e) => {
          if (dragging.current) updatePos(e.clientX);
        }}
      >
        <img
          src="/sharp.png"
          alt=""
          draggable={false}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <img
          src="/blurry.png"
          alt=""
          draggable={false}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        />

        <div
          className="absolute inset-y-0 w-[2px] bg-white/95"
          style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
        />

        <button
          className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-[0_4px_12px_rgba(20,10,40,0.25)] flex items-center justify-center z-10"
          style={{ left: `${pos}%` }}
          onMouseDown={() => {
            dragging.current = true;
          }}
          onTouchStart={(e) => updatePos(e.touches[0].clientX)}
          onTouchMove={(e) => updatePos(e.touches[0].clientX)}
        >
          <svg width="18" height="10" viewBox="0 0 18 10" fill="none">
            <path
              d="M5 1L1 5L5 9M13 1L17 5L13 9"
              stroke="#1A1424"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <span className="absolute bottom-3 left-3 font-mono text-[10.5px] text-white bg-black/55 backdrop-blur-sm px-2 py-[3px] rounded pointer-events-none">
          {sourceLabel} · before
        </span>
        <span className="absolute bottom-3 right-3 font-mono text-[10.5px] text-white bg-black/55 backdrop-blur-sm px-2 py-[3px] rounded pointer-events-none">
          {resultLabel} · 4×
        </span>
      </div>
    </WidgetFrame>
  );
}
