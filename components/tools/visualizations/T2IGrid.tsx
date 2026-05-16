/* eslint-disable @next/next/no-img-element */
import { WidgetFrame } from "../widgets/WidgetFrame";
import { Pill, ShowMore } from "../widgets/Pill";

interface Props {
  initial: string[];
}

const SparkleTag = (
  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
    <path
      d="M6 1.2L7 4.6L10.4 5.6L7 6.6L6 10L5 6.6L1.6 5.6L5 4.6L6 1.2Z"
      fill="currentColor"
    />
  </svg>
);

const RatioTag = (
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

const ActionIcons = {
  upscale: (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
      <path
        d="M2 5V2H5M9 2H12V5M12 9V12H9M5 12H2V9"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  removeBg: (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
      <path
        d="M2 4L12 4M2 7L12 7M2 10L12 10"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  ),
  edit: (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
      <path
        d="M9.5 2.5L11.5 4.5L4.5 11.5L2 12L2.5 9.5L9.5 2.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  ),
  recreate: (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
      <path
        d="M12 7C12 4.2 9.8 2 7 2C5 2 3.3 3.1 2.5 4.7M2 7C2 9.8 4.2 12 7 12C9 12 10.7 10.9 11.5 9.3M2 3V5H4M12 11V9H10"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

function ActionPill({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-[6px] h-[30px] px-[12px] rounded-full bg-white text-[#1A1424] font-sans text-[12px] font-medium tracking-[-0.005em] shadow-[0_2px_8px_rgba(20,10,40,0.15)]"
    >
      <span className="inline-flex items-center">{icon}</span>
      {children}
    </button>
  );
}

export function T2IGrid({}: Props) {
  return (
    <WidgetFrame
      title="Generating an image"
      description={
        <>
          <span className="italic">
            A small charming bakery storefront on a quiet cobblestone street in
            autumn. Warm golden light spilling out from the front windows onto
            the sidewalk, vintage wooden door slightly ajar, shop sig…
          </span>
          <div>
            <ShowMore />
          </div>
        </>
      }
      tags={
        <>
          <Pill variant="filled" icon={SparkleTag}>
            ImagineArt 1.5
          </Pill>
          <Pill icon={RatioTag}>16:9</Pill>
        </>
      }
    >
      <div className="relative w-full h-full rounded-[14px] overflow-hidden bg-white shadow-[0_1px_2px_rgba(20,10,40,0.06)]">
        <img
          src="/text-to-image.png"
          alt="Generated bakery storefront"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <button
          type="button"
          aria-label="Expand"
          className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/85 backdrop-blur-sm flex items-center justify-center text-[#1A1424] shadow-[0_1px_3px_rgba(20,10,40,0.18)]"
        >
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
            <path
              d="M2 5V2H5M9 2H12V5M12 9V12H9M5 12H2V9"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Download"
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/85 backdrop-blur-sm flex items-center justify-center text-[#1A1424] shadow-[0_1px_3px_rgba(20,10,40,0.18)]"
        >
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
            <path
              d="M7 2V9M7 9L4 6.5M7 9L10 6.5M3 11.5H11"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="absolute left-1/2 -translate-x-1/2 bottom-3 flex gap-[6px] flex-wrap justify-center px-3">
          <ActionPill icon={ActionIcons.upscale}>Upscale</ActionPill>
          <ActionPill icon={ActionIcons.removeBg}>Remove Background</ActionPill>
          <ActionPill icon={ActionIcons.edit}>Edit</ActionPill>
          <ActionPill icon={ActionIcons.recreate}>Recreate</ActionPill>
        </div>
      </div>
    </WidgetFrame>
  );
}
