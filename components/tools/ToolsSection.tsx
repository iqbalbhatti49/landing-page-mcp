import { Reveal } from "@/components/primitives/Reveal";
import { TOOLS } from "@/lib/data/tools";
import { ToolCard } from "./ToolCard";

export function ToolsSection() {
  return (
    <section
      id="tools"
      className="py-28 border-t border-border-primary"
    >
      <div className="container-page">
        <Reveal className="max-w-[720px] m-0 mb-14">
          <div className="font-mono text-[12px] tracking-[0.06em] uppercase text-content-tertiary mb-[18px]">
            Toolset
          </div>
          <h2
            className="font-display font-semibold leading-[1.0] tracking-[-0.028em] m-0 mb-4 text-white text-balance"
            style={{ fontSize: "clamp(40px, 5.4vw, 72px)" }}
          >
            Eight functions for your agent.
          </h2>
          <p className="font-sans text-[18px] leading-[1.55] text-content-secondary m-0 max-w-[60ch] tracking-[-0.005em]">
            Every endpoint is a standard MCP tool call. Your imagine.art
            account, your model selection, your asset library.
          </p>
        </Reveal>

        <div className="grid grid-cols-12 gap-[14px]">
          {TOOLS.map((tool, i) => (
            <ToolCard key={tool.fn} tool={tool} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
