/* eslint-disable @next/next/no-img-element */
import { WidgetFrame } from "../widgets/WidgetFrame";

interface Props {
  src: string;
  poster: string;
  caption: string;
  duration: string;
}

function CheckRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5">
      <span
        aria-hidden
        className="w-[18px] h-[18px] rounded-full bg-[#8A3FFC] flex items-center justify-center shrink-0"
      >
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
          <path
            d="M2.5 6.2L4.8 8.5L9.5 3.8"
            stroke="white"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="font-sans text-[13.5px] text-[#1A1424] font-medium">
        {children}
      </span>
      <svg
        width="11"
        height="11"
        viewBox="0 0 12 12"
        fill="none"
        className="text-[#1A1424]"
      >
        <path
          d="M3 4.5L6 7.5L9 4.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function TrackRow({
  poster,
  title,
  subtitle,
  duration,
  progress,
}: {
  poster: string;
  title: string;
  subtitle: string;
  duration: string;
  progress: number;
}) {
  return (
    <div className="bg-white rounded-[14px] p-3 shadow-[0_1px_2px_rgba(20,10,40,0.06)]">
      <div className="flex items-center gap-3">
        <img
          src={poster}
          alt=""
          className="w-11 h-11 rounded-[8px] object-cover shrink-0"
        />
        <div className="flex-1 min-w-0">
          <div className="font-sans text-[14px] font-semibold text-[#1A1424] leading-tight">
            {title}
          </div>
          <div className="font-sans text-[12.5px] text-[#5B4F6B] mt-[2px]">
            {subtitle}
          </div>
        </div>
        <button
          aria-label="Download"
          type="button"
          className="text-[#1A1424] p-1"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M8 2.5V10.5M8 10.5L5 7.5M8 10.5L11 7.5M3.5 13H12.5"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="flex items-center gap-2.5 mt-2.5">
        <button
          aria-label="Play"
          type="button"
          className="text-[#1A1424] p-1"
        >
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
            <path d="M4 2.5V11.5L11 7L4 2.5Z" fill="currentColor" />
          </svg>
        </button>
        <div className="flex-1 h-[3px] rounded-full bg-[#E8E0F0] overflow-hidden">
          <div
            className="h-full bg-[#1A1424] rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="font-sans text-[12px] text-[#5B4F6B] tabular-nums">
          {duration}
        </span>
      </div>
    </div>
  );
}

export function MusicCard({ poster }: Props) {
  return (
    <WidgetFrame
      title="Understood, Generating …"
      description={
        <div className="flex flex-col gap-2">
          <CheckRow>Creating songs for the launch</CheckRow>
          <CheckRow>Delivering the songs to the user</CheckRow>
          <p className="mt-1 font-sans text-[13.5px] text-[#1A1424] leading-[1.55]">
            Here are songs made for main menu, gameplay, cutscenes, and ending.
          </p>
        </div>
      }
    >
      <div className="flex flex-col gap-2.5 max-w-[520px]">
        <TrackRow
          poster={poster}
          title="Duvet"
          subtitle="Eleven Labs"
          duration="2:30"
          progress={28}
        />
        <TrackRow
          poster={poster}
          title="Foliage"
          subtitle="Eleven Labs"
          duration="2:30"
          progress={12}
        />
      </div>
    </WidgetFrame>
  );
}
