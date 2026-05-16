import { WidgetFrame } from "../widgets/WidgetFrame";
import { Pill } from "../widgets/Pill";

interface Props {
  src: string;
}

const FormatIcon = (
  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
    <rect
      x="1.5"
      y="1.5"
      width="9"
      height="9"
      rx="1"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    <path
      d="M4 6L5.5 7.5L8 5"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TransparentIcon = (
  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
    <rect x="1.5" y="1.5" width="4" height="4" fill="currentColor" opacity="0.4" />
    <rect x="6.5" y="6.5" width="4" height="4" fill="currentColor" opacity="0.4" />
    <rect
      x="1.5"
      y="1.5"
      width="9"
      height="9"
      rx="0.5"
      stroke="currentColor"
      strokeWidth="1"
    />
  </svg>
);

export function BgRemoverSweep({}: Props) {
  return (
    <WidgetFrame
      title="Removing the background"
      description={
        <>
          Cleaning a product photo. Pixel-perfect masking with hair and edge
          detail preserved, exported as PNG with alpha.
        </>
      }
      tags={
        <>
          <Pill variant="filled" icon={FormatIcon}>
            PNG
          </Pill>
          <Pill icon={TransparentIcon}>Transparent</Pill>
        </>
      }
    >
      <div
        className="relative w-full h-full rounded-[14px] overflow-hidden shadow-[0_1px_2px_rgba(20,10,40,0.06)]"
        style={{
          backgroundColor: "#FAFAFA",
          backgroundImage:
            "linear-gradient(45deg, #E2E2E2 25%, transparent 25%), linear-gradient(-45deg, #E2E2E2 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #E2E2E2 75%), linear-gradient(-45deg, transparent 75%, #E2E2E2 75%)",
          backgroundSize: "16px 16px",
          backgroundPosition: "0 0, 0 8px, 8px -8px, -8px 0",
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/bg-remover.mp4" type="video/mp4" />
        </video>
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
      </div>
    </WidgetFrame>
  );
}
