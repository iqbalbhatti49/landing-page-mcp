"use client";

import { useState } from "react";

interface CopyButtonProps {
  value: string;
}

export function CopyButton({ value }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const onClick = () => {
    navigator.clipboard?.writeText(value).catch(() => {});
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Copy"
      className={
        "inline-flex items-center gap-[6px] h-7 px-[10px] rounded-md cursor-pointer flex-shrink-0 " +
        "font-sans text-[11px] font-medium border transition-colors " +
        (copied
          ? "text-[#6FDC8C] border-[rgb(111_220_140_/_0.6)] bg-white/[0.06]"
          : "text-content-secondary border-border-primary bg-white/[0.06] hover:bg-white/[0.12] hover:text-white")
      }
    >
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="9" y="9" width="13" height="13" rx="2" />
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
      </svg>
      <span>{copied ? "Copied" : "Copy"}</span>
    </button>
  );
}
