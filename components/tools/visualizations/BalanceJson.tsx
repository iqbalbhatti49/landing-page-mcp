/* eslint-disable @next/next/no-img-element */

const USED  = 2840;
const TOTAL = 5000;
const PCT   = (USED / TOTAL) * 100;

export function BalanceJson() {
  const used = 2840;
  const total = 5000;
  const pct = (used / total) * 100;

  return (
    <div className="w-full h-full flex flex-col gap-3 p-5">

      {/* User bubble */}
      <div className="flex justify-end shrink-0">
        <div className="bg-white/[0.09] border border-white/[0.08] rounded-[18px] rounded-tr-[4px] px-4 py-2.5 max-w-[85%]">
          <p className="font-sans text-[13px] leading-[1.55] text-white m-0">
            how many imagine.art credits do I have left?
          </p>
        </div>
      </div>

      {/* Response card */}
      <div className="relative rounded-2xl overflow-hidden shrink-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(-44deg, rgba(80,110,210,0.15) 0%, rgba(110,60,180,0.18) 100%), rgb(23 23 23)",
          }}
        />
        <div className="relative flex flex-col gap-5 p-6">

          {/* Header */}
          <div className="flex items-center gap-2">
            <img src="/imagine-logo.svg" alt="" className="w-6 h-6 shrink-0" />
            <span className="font-sans font-medium text-[14px] text-white">Credit balance</span>
          </div>

          {/* Big number */}
          <div className="flex items-end gap-3">
            <span
              className="font-display font-semibold text-white leading-none tracking-[-0.6px]"
              style={{ fontSize: "clamp(44px, 7vw, 58px)" }}
            >
              {USED.toLocaleString()}
            </span>
            <span className="font-sans text-[14px] text-content-secondary pb-1">
              of {TOTAL.toLocaleString()} credits
            </span>
          </div>

          {/* Progress bar */}
          <div className="w-full h-[6px] rounded-full overflow-hidden bg-primary-90/60">
            <div
              className="h-full bg-primary-50 rounded-full"
              style={{ width: `${PCT}%` }}
            />
          </div>

          {/* Badges */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 h-[24px] px-2.5 bg-white/[0.07] border border-white/[0.07] rounded-md">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M6 1L1.5 3V6.5C1.5 9 6 11 6 11C6 11 10.5 9 10.5 6.5V3L6 1Z" stroke="white" strokeWidth="1.2" strokeOpacity="0.4" strokeLinejoin="round" />
              </svg>
              <span className="font-sans text-[11px] text-white/40 tracking-[0.2px]">Pro plan</span>
            </div>
            <div className="flex items-center gap-1.5 h-[24px] px-2.5 bg-white/[0.07] border border-white/[0.07] rounded-md">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <rect x="1.5" y="2.5" width="9" height="8" rx="1.5" stroke="white" strokeWidth="1.2" strokeOpacity="0.4" />
                <line x1="1.5" y1="5" x2="10.5" y2="5" stroke="white" strokeWidth="1.2" strokeOpacity="0.4" />
                <line x1="4" y1="1" x2="4" y2="4" stroke="white" strokeWidth="1.2" strokeOpacity="0.4" strokeLinecap="round" />
                <line x1="8" y1="1" x2="8" y2="4" stroke="white" strokeWidth="1.2" strokeOpacity="0.4" strokeLinecap="round" />
              </svg>
              <span className="font-sans text-[11px] text-white/40 tracking-[0.2px]">Renews Jun 4</span>
            </div>
          </div>

        </div>
      </div>

      {/* Follow-up text */}
      <p className="font-sans text-[13px] leading-[1.6] text-content-secondary m-0 shrink-0">
        You've got {USED.toLocaleString()} credits on the Pro plan, refreshing on June 4. Want me to generate something?
      </p>

    </div>
  );
}
