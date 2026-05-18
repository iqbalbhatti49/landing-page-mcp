import { ChatMock } from "./ChatMock";

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
    <ChatMock
      prompt="Remove the background from this product photo"
      status="Background removed"
      badges={["Pixel-perfect", "PNG"]}
    >
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        <video
          autoPlay muted loop playsInline preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/bg-remover.mp4" type="video/mp4" />
        </video>
      </div>
    </ChatMock>
  );
}
