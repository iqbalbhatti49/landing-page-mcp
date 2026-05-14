import { Reveal } from "@/components/primitives/Reveal";
import { TOOLS } from "@/lib/data/tools";
import { ToolVisual } from "./ToolVisual";

export function ToolsSection() {
  return (
    <section id="tools" className="border-t border-border-primary">
      <div className="container-page">

        {/* Section header */}
        <Reveal className="pt-24 pb-20 max-w-[720px]">
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

        {/* Tool rows */}
        {TOOLS.map((tool, i) => (
          <Reveal
            key={tool.fn}
            className="border-t border-border-primary py-14 lg:py-16 relative overflow-hidden"
          >
            {/* Large background number */}
            <span
              aria-hidden="true"
              className="absolute -top-3 left-0 font-display font-semibold leading-none text-white select-none pointer-events-none"
              style={{ fontSize: "clamp(100px, 13vw, 180px)", opacity: 0.045 }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>

            <div className="flex gap-12 lg:gap-20 relative">

              {/* Left: label column — desktop only */}
              <div className="hidden lg:flex flex-col w-[160px] shrink-0 pt-[3px]">
                <span className="font-mono text-[11px] text-content-tertiary leading-[1.7] break-all">
                  {tool.fn}
                </span>
              </div>

              {/* Right: content */}
              <div className="flex-1 min-w-0">
                {/* fn — mobile only */}
                <div className="font-mono text-[11px] text-content-tertiary mb-3 lg:hidden">
                  {tool.fn}
                </div>

                <h3
                  className="font-display font-semibold leading-[1.1] tracking-[-0.5px] text-white m-0 mb-3"
                  style={{ fontSize: "clamp(20px, 2.2vw, 30px)" }}
                >
                  {tool.name}
                </h3>

                <p className="font-sans text-[15px] leading-[1.7] text-content-secondary m-0 mb-8 max-w-[56ch]">
                  {tool.desc}
                </p>

                <div className="rounded-2xl bg-surface-primary border border-border-primary overflow-hidden h-[340px] relative">
                  <div className="absolute inset-0 flex flex-col justify-center">
                    <ToolVisual tool={tool} />
                  </div>
                </div>
              </div>

            </div>
          </Reveal>
        ))}

        {/* Bottom spacing */}
        <div className="pb-24" />
      </div>
    </section>
  );
}
