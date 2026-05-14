import { Reveal } from "@/components/primitives/Reveal";
import type { Tool } from "@/lib/data/tools";
import { BgRemoverSweep } from "./visualizations/BgRemoverSweep";
import { UpscaleTwoPane } from "./visualizations/UpscaleTwoPane";
import { MusicCard } from "./visualizations/MusicCard";
import { ScriptCard } from "./visualizations/ScriptCard";
import { ListingRows } from "./visualizations/ListingRows";
import { BalanceJson } from "./visualizations/BalanceJson";
import { T2IGrid } from "./visualizations/T2IGrid";
import { T2VPlayer } from "./visualizations/T2VPlayer";

interface Props {
  tool: Tool;
  index: number;
}

function Visualization({ tool }: { tool: Tool }) {
  switch (tool.kind) {
    case "image-carousel":
      return <T2IGrid initial={tool.initialTiles} />;
    case "video-timecode":
      return (
        <T2VPlayer
          src={tool.src}
          poster={tool.poster}
          durationLabel={tool.durationLabel}
        />
      );
    case "bg-remove":
      return <BgRemoverSweep src={tool.src} />;
    case "upscale-pair":
      return (
        <UpscaleTwoPane
          src={tool.src}
          sourceLabel={tool.sourceLabel}
          resultLabel={tool.resultLabel}
        />
      );
    case "music":
      return (
        <MusicCard
          src={tool.src}
          poster={tool.poster}
          caption={tool.caption}
          duration={tool.duration}
        />
      );
    case "script":
      return <ScriptCard items={tool.items} />;
    case "listing":
      return <ListingRows items={tool.items} />;
    case "balance":
      return <BalanceJson />;
  }
}

export function ToolCard({ tool, index }: Props) {
  return (
    <Reveal
      as="article"
      delay={index * 60}
      className="rounded-2xl bg-surface-primary border border-border-primary overflow-hidden flex flex-col transition-colors duration-200 hover:border-border-secondary"
    >
      <div className="flex-1 min-h-[180px] flex items-stretch [&>*]:w-full">
        <Visualization tool={tool} />
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
