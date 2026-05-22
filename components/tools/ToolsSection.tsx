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
            Six tools.{" "}
            <span className="text-white/35">Infinite creative output.</span>
          </h2>
          <p className="font-sans text-[18px] leading-[1.7] text-content-secondary m-0 max-w-[60ch] tracking-[-0.005em]">
            Six creative capabilities, callable from Claude, Cursor, or any
            MCP client. Your account, your models, your output.
          </p>
        </Reveal>

        {/* Tool rows */}
        {TOOLS.map((tool, i) => (
          <Reveal
            key={tool.fn}
            className="border-t border-border-primary py-14 lg:py-16 relative overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 relative">

              {/* Left: text */}
              <div className="lg:w-[320px] shrink-0 flex flex-col justify-center relative overflow-hidden">
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 font-display font-semibold leading-none text-white select-none pointer-events-none"
                  style={{ fontSize: "clamp(72px, 9vw, 130px)", opacity: 0.13 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="mb-5">
                  <span className="inline-block font-sans text-[12px] font-medium text-content-secondary border border-border-tertiary rounded-full px-3 py-1">
                    {tool.tag}
                  </span>
                </div>

                <h3
                  className="font-display font-semibold leading-[1.1] tracking-[-0.5px] text-white m-0 mb-3"
                  style={{ fontSize: "clamp(20px, 2.2vw, 30px)" }}
                >
                  {tool.name}
                </h3>

                <p className="font-sans text-[15px] leading-[1.7] text-content-secondary m-0">
                  {tool.desc}
                </p>
              </div>

              {/* Right: widget rendering — matches the in-agent UI */}
              <div className="flex-1 min-w-0">
                <div className="rounded-2xl bg-surface-primary border border-border-primary overflow-hidden h-[520px] relative px-6 py-3">
                  <div className="absolute inset-x-6 inset-y-3 flex flex-col justify-center rounded-xl overflow-hidden">
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
