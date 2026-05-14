/* eslint-disable @next/next/no-img-element */
import type { ListingItem } from "@/lib/data/tools";

interface Props {
  items: ListingItem[];
}

export function ListingRows({}: Props) {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <img
        src="/list-generation.jpg"
        alt="List generations preview"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
    </div>
  );
}
