"use client";

import { useState } from "react";
import { CopyButton } from "./CopyButton";
import {
  INSTALL_METHODS,
  METHOD_ORDER,
  type MethodId,
} from "@/lib/data/install-methods";

export function InstallPanel() {
  const [active, setActive] = useState<MethodId>("claude");
  const method = INSTALL_METHODS[active];

  return (
    <div className="mt-14" id="install">
      <div
        role="tablist"
        className="inline-flex gap-1 p-1 bg-surface-primary border border-border-primary rounded-[10px] mb-[18px]"
      >
        {METHOD_ORDER.map((id) => {
          const isActive = id === active;
          return (
            <button
              key={id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(id)}
              className={
                "h-[34px] px-[14px] rounded-lg cursor-pointer " +
                "font-sans text-[13px] font-medium transition-colors duration-[180ms] " +
                (isActive
                  ? "bg-surface-secondary text-white"
                  : "bg-transparent text-content-secondary hover:text-white")
              }
            >
              {INSTALL_METHODS[id].label}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 w-full rounded-2xl overflow-hidden bg-surface-primary border border-border-primary">
        {method.steps.map((step, i) => (
          <div
            key={step.num}
            className={
              "p-[22px] relative " +
              (i < method.steps.length - 1
                ? "border-b border-border-primary md:border-b-0 md:border-r md:border-border-primary"
                : "")
            }
          >
            <div className="absolute top-[18px] right-[18px] font-mono font-medium text-[11px] tracking-[0.04em] text-content-tertiary">
              {step.num}
            </div>
            <h3 className="font-display text-[16px] font-semibold tracking-[-0.01em] text-white m-0 mb-2 pr-9">
              {step.title}
            </h3>
            <p className="font-sans text-[14px] font-normal leading-[1.55] text-content-secondary m-0 mb-[14px] [&_strong]:text-white [&_strong]:font-medium [&_em]:not-italic [&_em]:text-primary-30 [&_em]:font-medium [&_code]:font-mono [&_code]:text-[12px] [&_code]:font-medium [&_code]:text-primary-30 [&_code]:bg-neutral-110 [&_code]:px-[6px] [&_code]:py-px [&_code]:rounded [&_code]:border [&_code]:border-border-primary">
              {step.body}
            </p>
            {i === 1 && (
              <div className="flex items-center gap-[6px] bg-neutral-110 border border-border-secondary rounded-lg pl-3 pr-[6px] py-[6px] hover:border-border-tertiary focus-within:border-primary-50 transition-colors">
                <code className="flex-1 min-w-0 font-mono text-[12px] text-primary-30 overflow-x-auto whitespace-nowrap [&::-webkit-scrollbar]:hidden">
                  {method.command}
                </code>
                <CopyButton value={method.command} />
              </div>
            )}
          </div>
        ))}
      </div>

      <p className="font-sans text-[14px] text-content-tertiary mt-[18px]">
        Using Claude Code or Codex? The{" "}
        <button
          type="button"
          onClick={() => setActive("cli")}
          className="text-primary-30 border-b border-[rgb(165_110_255_/_0.4)] pb-px hover:text-white hover:border-white cursor-pointer"
        >
          CLI
        </button>{" "}
        works best.
      </p>
    </div>
  );
}
