import type { ReactNode } from "react";

interface Props {
  prompt: string;
  status?: string;
  badges?: string[];
  children: ReactNode;
}

export function ChatMock({ prompt, status = "Generating ...", badges, children }: Props) {
  return (
    <div className="w-full h-full flex flex-col gap-3 p-5">

      {/* User bubble */}
      <div className="flex justify-end shrink-0">
        <div className="bg-white/[0.09] border border-white/[0.08] rounded-[18px] rounded-tr-[4px] px-4 py-2.5 max-w-[85%]">
          <p className="font-sans text-[13px] leading-[1.55] text-white m-0">{prompt}</p>
        </div>
      </div>

      {/* Response card */}
      <div className="flex-1 relative rounded-2xl overflow-hidden min-h-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(-44deg, rgba(80,110,210,0.15) 0%, rgba(110,60,180,0.18) 100%), rgb(23 23 23)",
          }}
        />
        <div className="relative h-full flex flex-col gap-3 p-5">

          {/* Header */}
          <div className="flex items-center gap-2 shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/imagine-logo.svg" alt="" className="w-6 h-6 shrink-0" />
            <span className="font-sans font-medium text-[14px] text-white">{status}</span>
          </div>

          {badges && badges.length > 0 && (
            <div className="flex items-center gap-2 shrink-0 flex-wrap">
              {badges.map((b) => (
                <div key={b} className="flex items-center h-[22px] px-2 bg-white/[0.07] border border-white/[0.07] rounded-md">
                  <span className="font-sans text-[10.5px] text-white/40 tracking-[0.2px]">{b}</span>
                </div>
              ))}
            </div>
          )}

          {/* Content area */}
          <div className="flex-1 min-h-0 relative">
            {children}
          </div>

        </div>
      </div>

    </div>
  );
}
