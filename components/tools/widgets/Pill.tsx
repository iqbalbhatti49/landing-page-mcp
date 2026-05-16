import type { ReactNode } from "react";

interface PillProps {
  icon?: ReactNode;
  children: ReactNode;
  variant?: "filled" | "outlined";
}

export function Pill({ icon, children, variant = "outlined" }: PillProps) {
  const base =
    "inline-flex items-center gap-[5px] h-[26px] px-[10px] rounded-full font-sans text-[12px] font-medium tracking-[-0.005em] whitespace-nowrap";
  const styles =
    variant === "filled"
      ? "bg-[#1B1037] text-white"
      : "bg-white/55 border border-white/70 text-[#2A1F38] backdrop-blur-sm";

  return (
    <span className={`${base} ${styles}`}>
      {icon && <span className="inline-flex items-center">{icon}</span>}
      {children}
    </span>
  );
}

export function ShowMore() {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-1 mt-2 font-sans text-[12.5px] font-medium text-[#1A1424]"
    >
      Show more
      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
        <path
          d="M3 4.5L6 7.5L9 4.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
