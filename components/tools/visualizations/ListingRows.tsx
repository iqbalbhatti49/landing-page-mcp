/* eslint-disable @next/next/no-img-element */
import type { ListingItem } from "@/lib/data/tools";
import { ChatMock } from "./ChatMock";

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
    <ChatMock
      prompt="Show my recent generations"
      status="3 recent generations"
    >
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        <img
          src="/list-generation.jpg"
          alt="List generations"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
      </div>
    </ChatMock>
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
