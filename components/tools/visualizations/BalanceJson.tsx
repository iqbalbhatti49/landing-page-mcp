import { WidgetFrame } from "../widgets/WidgetFrame";
import { Pill } from "../widgets/Pill";

const CrownIcon = (
  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
    <path
      d="M2 4L4 7L6 3.5L8 7L10 4L9.2 9H2.8L2 4Z"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
  </svg>
);

const CalendarIcon = (
  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
    <rect
      x="1.5"
      y="2.5"
      width="9"
      height="8"
      rx="1"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    <path
      d="M1.5 5H10.5M4 1.5V3M8 1.5V3"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

export function BalanceJson() {
  const used = 2840;
  const total = 5000;
  const pct = (used / total) * 100;

  return (
    <WidgetFrame title="Credit balance">
      <div className="flex flex-col justify-center h-full max-w-[520px]">
        <div className="flex items-baseline gap-3 mb-5">
          <span
            className="font-display font-semibold text-[#1A1424] leading-none tabular-nums tracking-[-0.03em]"
            style={{ fontSize: "clamp(56px, 7vw, 96px)" }}
          >
            {used.toLocaleString()}
          </span>
          <span className="font-sans text-[16px] text-[#3A3045]">
            of {total.toLocaleString()} credits
          </span>
        </div>

        <div
          className="h-[8px] rounded-full overflow-hidden mb-5"
          style={{ background: "rgba(26, 20, 36, 0.12)" }}
        >
          <div
            className="h-full rounded-full"
            style={{
              width: `${pct}%`,
              background:
                "linear-gradient(90deg, #6E2BD9 0%, #8A3FFC 100%)",
            }}
          />
        </div>

        <div className="flex flex-wrap gap-1.5">
          <Pill icon={CrownIcon}>Pro plan</Pill>
          <Pill icon={CalendarIcon}>Renews Jun 4</Pill>
        </div>
      </div>
    </WidgetFrame>
  );
}
