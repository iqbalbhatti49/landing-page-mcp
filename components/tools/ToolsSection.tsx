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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[14px]">
          {TOOLS.map((tool, i) => (
            <ToolCard key={tool.fn} tool={tool} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
