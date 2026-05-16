import type { ScriptItem } from "@/lib/data/tools";
import { WidgetFrame } from "../widgets/WidgetFrame";
import { Pill } from "../widgets/Pill";

interface Props {
  items: ScriptItem[];
}

const FormatTag = (
  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
    <path
      d="M3 2H8M3 5H9M3 8H7M3 11H8"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

const variantClass: Record<ScriptItem["type"], string> = {
  scene: "text-[#FB5607] font-semibold tracking-[0.04em] uppercase",
  action: "text-[#3A3045] my-1",
  char: "text-center text-[#1A1424] font-semibold mt-3",
  line: "text-center text-[#3A3045]",
};

export function ScriptCard({ items }: Props) {
  return (
    <WidgetFrame
      title="Writing the scene"
      description={
        <>Screenplay format. Scene heading, action, character, dialogue.</>
      }
      tags={
        <>
          <Pill variant="filled" icon={FormatTag}>
            Screenplay
          </Pill>
          <Pill>Fountain</Pill>
        </>
      }
    >
      <div className="w-full h-full bg-white rounded-[14px] p-6 font-mono text-[13px] leading-[1.85] flex flex-col justify-center shadow-[0_1px_2px_rgba(20,10,40,0.06)]">
        {items.map((item, i) => (
          <div key={i} className={variantClass[item.type]}>
            {item.text}
          </div>
        ))}
      </div>
    </WidgetFrame>
  );
}
