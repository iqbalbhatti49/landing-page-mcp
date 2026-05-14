import { Reveal } from "@/components/primitives/Reveal";
import type { Tool } from "@/lib/data/tools";
import { ToolVisual } from "./ToolVisual";

interface Props {
  tool: Tool;
  index: number;
}

export function ToolCard({ tool, index }: Props) {
  return (
    <Reveal
      as="article"
      delay={index * 60}
      className="rounded-2xl bg-surface-primary border border-border-primary overflow-hidden flex flex-col transition-colors duration-200 hover:border-border-secondary"
    >
      <div className="relative min-h-[180px] flex-1">
        <div className="absolute inset-0">
          <ToolVisual tool={tool} />
        </div>
      </div>
      <div className="p-5 border-t border-border-primary">
        <div className="font-mono text-[11px] font-medium text-content-tertiary tracking-[-0.005em] mb-[6px]">
          {tool.fn}
        </div>
        <h3 className="font-display text-[15px] font-semibold leading-[1.2] tracking-[-0.018em] text-white m-0 mb-1">
          {tool.name}
        </h3>
        <p className="font-sans text-[13px] leading-[1.55] text-content-secondary m-0">
          {tool.desc}
        </p>
      </div>
    </Reveal>
  );
}
