interface Props {
  src: string;
  sourceLabel: string;
  resultLabel: string;
}

export function UpscaleTwoPane({ src, sourceLabel, resultLabel }: Props) {
  return (
    <div className="w-full max-w-[720px]">
      <div className="grid grid-cols-2 gap-3">
        <div
          className="aspect-[16/10] rounded-lg overflow-hidden bg-cover bg-center border border-border-primary"
          style={{
            backgroundImage: `url('${src}')`,
            imageRendering: "pixelated",
            filter: "blur(2px)",
          }}
        />
        <div
          className="aspect-[16/10] rounded-lg overflow-hidden bg-cover bg-center border border-border-secondary"
          style={{ backgroundImage: `url('${src}')` }}
        />
      </div>
      <div className="flex justify-between font-mono text-[11px] text-content-tertiary mt-3">
        <span>
          <span className="text-white">{sourceLabel}</span> source
        </span>
        <span>
          <span className="text-white">{resultLabel}</span> 4×
        </span>
      </div>
    </div>
  );
}
