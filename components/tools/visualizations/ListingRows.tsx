/* eslint-disable @next/next/no-img-element */
import type { ListingItem } from "@/lib/data/tools";
import { WidgetFrame } from "../widgets/WidgetFrame";
import { Pill } from "../widgets/Pill";

interface Props {
  items: ListingItem[];
}

const FilterIcon = (
  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
    <path
      d="M2 3H10M3.5 6H8.5M5 9H7"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

const DateIcon = (
  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
    <rect
      x="1.5"
      y="2.5"
      width="9"
      height="8"
      rx="1"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    <path
      d="M1.5 5H10.5M4 1.5V3M8 1.5V3"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

const badgeColor: Record<string, string> = {
  vid: "bg-[#FFE5D9] text-[#B83B00]",
  img: "bg-[#E8DEF7] text-[#5A2EBE]",
  aud: "bg-[#DDEFE0] text-[#256B3A]",
};

function ListRow({ item }: { item: ListingItem }) {
  return (
    <div className="flex items-center gap-3 px-3 py-2.5 rounded-[10px] hover:bg-black/[0.03] transition-colors">
      <img
        src={item.thumb}
        alt=""
        className="w-10 h-10 rounded-[8px] object-cover shrink-0"
      />
      <div className="flex-1 min-w-0">
        <div className="font-sans text-[13.5px] font-medium text-[#1A1424] truncate">
          {item.name}
        </div>
        <div className="font-sans text-[12px] text-[#6B5F7B] mt-px">
          {item.time} ago
        </div>
      </div>
      <span
        className={
          "inline-flex items-center h-[20px] px-[8px] rounded-full font-mono text-[10px] font-semibold uppercase tracking-[0.04em] " +
          (badgeColor[item.badge] ?? "bg-black/5 text-[#1A1424]")
        }
      >
        {item.badge}
      </span>
    </div>
  );
}

export function ListingRows({ items }: Props) {
  return (
    <WidgetFrame
      title="Your generations"
      description={
        <>Browse and retrieve any generation by type, date, or prompt.</>
      }
      tags={
        <>
          <Pill variant="filled" icon={FilterIcon}>
            All types
          </Pill>
          <Pill icon={DateIcon}>Last 30 days</Pill>
        </>
      }
    >
      <div className="w-full h-full bg-white rounded-[14px] p-2 overflow-hidden shadow-[0_1px_2px_rgba(20,10,40,0.06)]">
        <div className="flex flex-col">
          {items.map((it, i) => (
            <ListRow key={i} item={it} />
          ))}
        </div>
      </div>
    </WidgetFrame>
  );
}
