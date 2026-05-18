/* eslint-disable @next/next/no-img-element */
import type { ListingItem } from "@/lib/data/tools";
import { ChatMock } from "./ChatMock";

interface Props {
  items: ListingItem[];
}

const badgeColor: Record<string, string> = {
  vid: "bg-primary-90 text-primary-30",
  img: "bg-surface-secondary text-content-secondary",
  aud: "bg-surface-secondary text-content-secondary",
};

function ListRow({ item }: { item: ListingItem }) {
  return (
    <div className="flex items-center gap-3 px-3 py-2.5 border-b border-border-primary last:border-0">
      <div className="w-9 h-9 rounded-lg overflow-hidden shrink-0 bg-surface-secondary">
        <img src={item.thumb} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-sans text-[12.5px] font-medium text-white truncate">{item.name}</div>
        <div className="font-sans text-[11px] text-content-tertiary">{item.time} ago</div>
      </div>
      <span className={`font-mono text-[10px] font-medium px-2 py-0.5 rounded-full uppercase tracking-wide ${badgeColor[item.badge] ?? "bg-surface-secondary text-content-secondary"}`}>
        {item.badge}
      </span>
    </div>
  );
}

export function ListingRows({ items }: Props) {
  return (
    <ChatMock prompt="Show my recent generations" status={`${items.length} results`}>
      <div className="absolute inset-0 rounded-xl overflow-hidden flex flex-col" style={{ background: "#111" }}>
        <div className="flex items-center justify-between px-3 py-2 border-b border-border-primary shrink-0" style={{ background: "#0a0a0a" }}>
          <span className="font-mono text-[9px] tracking-[1.4px] uppercase text-content-tertiary">generations</span>
          <span className="font-mono text-[9px] text-content-tertiary opacity-60">{items.length} items</span>
        </div>
        <div className="flex-1 overflow-hidden">
          {items.map((it, i) => (
            <ListRow key={i} item={it} />
          ))}
        </div>
      </div>
    </ChatMock>
  );
}
