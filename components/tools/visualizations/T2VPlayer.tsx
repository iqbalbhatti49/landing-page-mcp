"use client";

import { useEffect, useRef } from "react";
import { ChatMock } from "./ChatMock";

interface Props {
  src: string;
  poster: string;
  durationLabel: string;
}

const ModelIcon = (
  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
    <path
      d="M6 1.2L7 4.6L10.4 5.6L7 6.6L6 10L5 6.6L1.6 5.6L5 4.6L6 1.2Z"
      fill="currentColor"
    />
  </svg>
);
const RatioIcon = (
  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
    <rect
      x="1.5"
      y="3.5"
      width="11"
      height="7"
      rx="1.2"
      stroke="currentColor"
      strokeWidth="1.2"
    />
  </svg>
);
const ClockIcon = (
  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
    <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.2" />
    <path
      d="M7 4.5V7L8.6 8.2"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);
const AudioIcon = (
  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
    <path
      d="M3 5.5V8.5H5L8 11V3L5 5.5H3Z"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <path
      d="M10.5 4.5C11.2 5.2 11.5 6.1 11.5 7C11.5 7.9 11.2 8.8 10.5 9.5"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

function fmt(s: number) {
  const m = Math.floor(s / 60);
  const ss = Math.floor(s % 60).toString().padStart(2, "0");
  return `${m}:${ss}`;
}

export function T2VPlayer({ src, poster, durationLabel }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const tcRef    = useRef<HTMLDivElement>(null);
  const progRef  = useRef<HTMLElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onUpdate = () => {
      if (!v.duration || !Number.isFinite(v.duration)) return;
      if (tcRef.current)  tcRef.current.textContent = `${fmt(v.currentTime)} / ${fmt(v.duration)}`;
      if (progRef.current) progRef.current.style.width = `${(v.currentTime / v.duration) * 100}%`;
    };
    v.addEventListener("timeupdate", onUpdate);
    v.play().catch(() => {});
    return () => v.removeEventListener("timeupdate", onUpdate);
  }, []);

  return (
    <ChatMock
      prompt="Create a fresh apple shake juice ad for Seedance"
      status="Generated"
      badges={["Seedance 2.0", "16:9", "00:08"]}
    >
      <div className="absolute inset-0 rounded-xl overflow-hidden bg-neutral-100">
        <video
          ref={videoRef}
          autoPlay muted loop playsInline preload="metadata"
          poster={poster}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={src} type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(180deg, transparent 60%, rgb(0 0 0 / 0.55) 100%)" }}
        />
        <div ref={tcRef} className="absolute bottom-[10px] left-[10px] font-mono text-[10.5px] bg-black/60 px-2 py-[3px] rounded text-white">
          {durationLabel}
        </div>
        <div className="absolute bottom-[10px] right-[10px] left-24 h-[3px] bg-white/[0.18] rounded-sm overflow-hidden">
          <i ref={progRef} className="block h-full w-0 bg-primary-60" />
        </div>
      </div>
    </ChatMock>
  );
}
