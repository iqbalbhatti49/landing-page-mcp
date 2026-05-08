import { Reveal } from "@/components/primitives/Reveal";
import type { Tool, ToolSpan } from "@/lib/data/tools";
import { BgRemoverSweep } from "./visualizations/BgRemoverSweep";
import { UpscaleTwoPane } from "./visualizations/UpscaleTwoPane";
import { MusicCard } from "./visualizations/MusicCard";
import { ScriptCard } from "./visualizations/ScriptCard";
import { ListingRows } from "./visualizations/ListingRows";
import { BalanceJson } from "./visualizations/BalanceJson";
import { T2IGrid } from "./visualizations/T2IGrid";
import { T2VPlayer } from "./visualizations/T2VPlayer";

const SPAN_CLASSES: Record<ToolSpan, string> = {
  hero: "col-span-12 min-h-[360px]",
  wide: "col-span-12 min-h-[280px]",
  half: "col-span-12 lg:col-span-6 min-h-[320px]",
};

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
  const isHero = tool.span === "hero";
  return (
    <Reveal
      as="article"
      delay={index * 60}
      className={`${SPAN_CLASSES[tool.span]} rounded-2xl bg-surface-primary border border-border-primary relative overflow-hidden flex flex-col gap-6 p-7 transition-colors duration-200 hover:border-border-secondary`}
    >
      <div className="max-w-[540px]">
        <div
          className={`font-mono font-medium text-content-tertiary tracking-[-0.005em] m-0 mb-2 ${
            isHero ? "text-[13px] mb-[10px]" : "text-[12px]"
          }`}
        >
          {tool.fn}
        </div>
        <h3
          className={`font-display font-semibold text-white m-0 ${
            isHero
              ? "text-[30px] leading-[1.05] tracking-[-0.025em]"
              : "text-[18px] leading-[1.2] tracking-[-0.018em]"
          }`}
        >
          {tool.name}
        </h3>
        <p
          className={`font-sans leading-[1.55] text-content-secondary m-0 mt-2 ${
            isHero ? "text-[16px] max-w-[60ch] mt-[10px]" : "text-[14px] max-w-[56ch]"
          }`}
        >
          {tool.desc}
        </p>
      </div>
      <div className="flex-1 flex items-stretch w-full [&>*]:w-full">
        <Visualization tool={tool} />
      </div>
    </Reveal>
  );
}
