"use client";

import { useEffect, useRef } from "react";

interface Props {
  src: string;
  poster: string;
  durationLabel: string;
}

function fmt(s: number) {
  const n = Math.max(0, s | 0);
  return n < 10 ? `00:0${n}` : `00:${n}`;
}

export function T2VPlayer({ src, poster, durationLabel }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const tcRef = useRef<HTMLDivElement>(null);
  const progRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const onUpdate = () => {
      if (!v.duration || !Number.isFinite(v.duration)) return;
      if (tcRef.current) {
        tcRef.current.textContent = `${fmt(v.currentTime)} / ${fmt(v.duration)}`;
      }
      if (progRef.current) {
        progRef.current.style.width = `${(v.currentTime / v.duration) * 100}%`;
      }
    };

    v.addEventListener("timeupdate", onUpdate);
    v.play().catch(() => {});

    return () => v.removeEventListener("timeupdate", onUpdate);
  }, []);

  return (
    <div className="w-full h-full min-h-[200px] rounded-[10px] relative overflow-hidden bg-neutral-100 border border-border-primary">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent 60%, rgb(0 0 0 / 0.55) 100%)",
        }}
      />
      <div
        ref={tcRef}
        className="absolute bottom-[10px] left-[10px] font-mono text-[10.5px] bg-black/60 px-2 py-[3px] rounded text-white"
      >
        {durationLabel}
      </div>
      <div className="absolute bottom-[10px] right-[10px] left-24 h-[3px] bg-white/[0.18] rounded-sm overflow-hidden">
        <i
          ref={progRef}
          className="block h-full w-0 bg-primary-60"
        />
      </div>
    </div>
  );
}
