/* eslint-disable @next/next/no-img-element */
import { ChatMock } from "./ChatMock";

const IMG_1A = "https://www.figma.com/api/mcp/asset/fa9c0bf2-12dc-4794-ace5-3826cfa3de4f";
const IMG_1B = "https://www.figma.com/api/mcp/asset/36f194e0-15dc-4339-b43c-2e461da5dfd9";
const IMG_2A = "https://www.figma.com/api/mcp/asset/46d21c5c-318a-4d34-b247-dbe8d6a2aa0c";
const IMG_2B = "https://www.figma.com/api/mcp/asset/c069a127-45b9-4ee1-bf01-aa1d9f88be90";

export function T2IGrid() {
  return (
    <ChatMock
      prompt="Create a campaign shoot of Grove Cold Brew as the product"
      status="Generated · 4 variations"
      badges={["ImagineArt 1.5", "16:9"]}
    >
      <div className="absolute inset-0 rounded-xl overflow-hidden bg-black/25 flex flex-col gap-2.5 p-3">
        <div className="flex flex-1 min-h-0 gap-2.5">
          <div className="flex-1 rounded-lg overflow-hidden relative">
            <img src={IMG_1A} alt="Campaign image 1" className="absolute inset-0 w-full h-full object-cover" />
            <img src={IMG_1B} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="flex-1 rounded-lg overflow-hidden relative">
            <img src={IMG_2A} alt="Campaign image 2" className="absolute inset-0 w-full h-full object-cover" />
            <img src={IMG_2B} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
        <span className="font-sans text-[12px] font-medium text-white/50 shrink-0">
          Generations
        </span>
      </div>
    </ChatMock>
  );
}
