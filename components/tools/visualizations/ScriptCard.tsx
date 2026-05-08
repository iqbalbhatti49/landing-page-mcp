import type { ScriptItem } from "@/lib/data/tools";

interface Props {
  items: ScriptItem[];
}

const variantClass: Record<ScriptItem["type"], string> = {
  scene: "text-accent-orange font-medium",
  action: "my-1",
  char: "text-center text-white font-medium mt-2",
  line: "text-center",
};

export function ScriptCard({ items }: Props) {
  return (
    <div className="w-full h-full min-h-[200px] p-5 bg-neutral-110 border border-border-primary rounded-[10px] font-mono text-[12px] leading-[1.7] text-content-secondary flex flex-col justify-center">
      {items.map((item, i) => (
        <div key={i} className={variantClass[item.type]}>
          {item.text}
        </div>
      ))}
    </div>
  );
}
