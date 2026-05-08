import type { ListingItem } from "@/lib/data/tools";

interface Props {
  items: ListingItem[];
}

export function ListingRows({ items }: Props) {
  return (
    <div className="w-full h-full flex flex-col gap-[6px] justify-center">
      {items.map((item) => (
        <div
          key={item.name}
          className="flex items-center gap-[10px] py-2 px-[10px] bg-black/35 border border-border-primary rounded-lg"
        >
          <div
            className="w-7 h-7 rounded-md flex-shrink-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${item.thumb}')` }}
          />
          <span className="flex-1 font-mono text-[12px] text-white overflow-hidden text-ellipsis whitespace-nowrap">
            {item.name}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.04em] px-[6px] py-[2px] rounded bg-surface-secondary text-content-secondary border border-border-primary">
            {item.badge}
          </span>
          <span className="font-mono text-[11px] text-content-tertiary">
            {item.time}
          </span>
        </div>
      ))}
    </div>
  );
}
