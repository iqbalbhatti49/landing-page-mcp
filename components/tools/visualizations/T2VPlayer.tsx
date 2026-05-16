"use client";

import { useEffect, useRef } from "react";
import { WidgetFrame } from "../widgets/WidgetFrame";
import { Pill, ShowMore } from "../widgets/Pill";

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

export function T2VPlayer({ src, poster, durationLabel }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <WidgetFrame
      title="Generating a video"
      description={
        <>
          A small charming bakery storefront on a quiet cobblestone street in
          autumn. Warm golden light spilling out from the front windows onto the
          sidewalk, vintage wooden door slightly ajar, shop sig…
          <div>
            <ShowMore />
          </div>
        </>
      }
      tags={
        <>
          <Pill variant="filled" icon={ModelIcon}>
            Kling
          </Pill>
          <Pill icon={RatioIcon}>16:9</Pill>
          <Pill icon={ClockIcon}>10s</Pill>
          <Pill icon={AudioIcon}>Audio</Pill>
        </>
      }
      footer={
        <>
          <span className="underline decoration-[#7A4FCF]/40 underline-offset-2">
            Generating now,
          </span>{" "}
          <span className="text-[#7A4FCF]">this can take up to 30 seconds.</span>
        </>
      }
    >
      <div className="relative w-full h-full rounded-[14px] overflow-hidden bg-[#E5DDED] shadow-[0_1px_2px_rgba(20,10,40,0.06)]">
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
        <div className="absolute top-3 left-3 inline-flex items-center gap-[5px] h-[26px] px-[10px] rounded-full bg-black/55 backdrop-blur-sm text-white font-sans text-[12px] font-medium">
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
            <path
              d="M4 2V10L10 6L4 2Z"
              fill="currentColor"
            />
          </svg>
          {durationLabel}
        </div>
      </div>
    </WidgetFrame>
  );
}
