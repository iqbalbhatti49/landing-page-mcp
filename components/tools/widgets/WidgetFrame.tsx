import Image from "next/image";
import type { ReactNode } from "react";

interface WidgetFrameProps {
  title: ReactNode;
  description?: ReactNode;
  tags?: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
  contentClassName?: string;
}

export function WidgetFrame({
  title,
  description,
  tags,
  footer,
  children,
  contentClassName = "",
}: WidgetFrameProps) {
  return (
    <div
      className="relative w-full h-full overflow-hidden rounded-[28px]"
      style={{
        background:
          "radial-gradient(120% 90% at 100% 0%, #E2D2F4 0%, #ECE0F8 35%, #F4EDFC 65%, #EFE6FA 100%)",
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.35] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch' /><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.55 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      <div className="relative h-full flex flex-col p-6 gap-3.5">
        <div className="flex items-center gap-3 shrink-0">
          <Image
            src="/imagine-logo.svg"
            alt=""
            width={28}
            height={28}
            className="rounded-[7px]"
          />
          <div className="font-sans text-[15px] font-semibold text-[#1A1424] tracking-[-0.01em] leading-tight">
            {title}
          </div>
        </div>

        {description && (
          <div className="font-sans text-[13.5px] leading-[1.55] text-[#2F2435] shrink-0">
            {description}
          </div>
        )}

        {tags && (
          <div className="flex flex-wrap gap-1.5 shrink-0">{tags}</div>
        )}

        <div className={`flex-1 min-h-0 ${contentClassName}`}>{children}</div>

        {footer && (
          <div className="font-sans text-[13px] leading-[1.5] text-[#7A4FCF] shrink-0">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
