/* eslint-disable @next/next/no-img-element */

interface Props {
  src: string;
}

export function BgRemoverSweep({ src }: Props) {
  return (
    <div className="grid grid-cols-2 w-full h-full min-h-[200px] rounded-[10px] overflow-hidden border border-border-primary">
      <div className="relative">
        <img
          src={src}
          alt=""
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <span className="absolute top-2 left-2 font-mono text-[10px] tracking-[0.04em] text-white/85 px-[6px] py-[2px] bg-neutral-110/70 rounded">
          original
        </span>
      </div>
      <div
        className="relative border-l border-border-primary"
        style={{
          backgroundImage:
            "linear-gradient(45deg, rgb(255 255 255 / 0.04) 25%, transparent 25%, transparent 75%, rgb(255 255 255 / 0.04) 75%), linear-gradient(45deg, rgb(255 255 255 / 0.04) 25%, transparent 25%, transparent 75%, rgb(255 255 255 / 0.04) 75%)",
          backgroundSize: "12px 12px",
          backgroundPosition: "0 0, 6px 6px",
          backgroundColor: "var(--color-neutral-110)",
        }}
      >
        <span className="absolute top-2 right-2 font-mono text-[10px] tracking-[0.04em] text-white/85 px-[6px] py-[2px] bg-neutral-110/70 rounded">
          alpha
        </span>
      </div>
    </div>
  );
}
