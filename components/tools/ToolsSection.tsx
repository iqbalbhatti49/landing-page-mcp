"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/primitives/Reveal";
import { TOOLS } from "@/lib/data/tools";
import { ToolVisual } from "./ToolVisual";
import { ToolCard } from "./ToolCard";

export function ToolsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const onScroll = () => {
      const mid = window.innerHeight / 2;
      let closest = 0;
      let minDist = Infinity;
      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const dist = Math.abs(rect.top + rect.height / 2 - mid);
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });
      setActiveIndex(closest);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="tools" className="py-28 border-t border-border-primary">
      <div className="container-page">
        <Reveal className="max-w-[720px] m-0 mb-20">
          <div className="font-mono text-[10.5px] font-semibold tracking-[1.8px] uppercase text-content-tertiary mb-[18px]">
            Toolset
          </div>
          <h2
            className="font-display font-semibold leading-[1.05] tracking-[-0.5px] m-0 mb-4 text-white text-balance"
            style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
          >
            Eight functions{" "}
            <span className="text-white/35">for your agent.</span>
          </h2>
          <p className="font-sans text-[18px] leading-[1.7] text-content-secondary m-0 max-w-[60ch] tracking-[-0.005em]">
            Every endpoint is a standard MCP tool call. Your imagine.art
            account, your model selection, your asset library.
          </p>
        </Reveal>

        {/* Desktop: sticky scroll */}
        <div className="hidden lg:flex gap-20 items-start">
          {/* Left: scrollable text items */}
          <div className="w-[360px] shrink-0">
            {TOOLS.map((tool, i) => (
              <div
                key={tool.fn}
                ref={(el) => { itemRefs.current[i] = el; }}
                className={`min-h-[60vh] flex items-center py-16 transition-opacity duration-500 ${
                  i === activeIndex ? "opacity-100" : "opacity-25"
                }`}
              >
                <div
                  className={`border-l-2 pl-5 transition-colors duration-500 ${
                    i === activeIndex ? "border-primary-60" : "border-transparent"
                  }`}
                >
                  <div className="font-mono text-[11px] font-medium text-content-tertiary tracking-[-0.005em] mb-3">
                    {tool.fn}
                  </div>
                  <h3
                    className="font-display font-semibold leading-[1.1] tracking-[-0.5px] text-white m-0 mb-3"
                    style={{ fontSize: "clamp(20px, 1.8vw, 26px)" }}
                  >
                    {tool.name}
                  </h3>
                  <p className="font-sans text-[15px] leading-[1.7] text-content-secondary m-0">
                    {tool.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: sticky visualization */}
          <div className="flex-1">
            <div className="sticky top-[calc(50vh-230px)]">
              <div
                key={activeIndex}
                className="rounded-2xl bg-surface-primary border border-border-primary overflow-hidden h-[460px] relative animate-tool-slide-up"
              >
                <div className="absolute inset-0">
                  <ToolVisual tool={TOOLS[activeIndex]} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: stacked grid */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
          {TOOLS.map((tool, i) => (
            <ToolCard key={tool.fn} tool={tool} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
