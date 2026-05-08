interface Props {
  src: string;
  poster: string;
  caption: string;
  duration: string;
}

export function MusicCard({ src, poster, caption, duration }: Props) {
  return (
    <div className="w-full h-full min-h-[200px] rounded-[10px] relative overflow-hidden bg-neutral-100 border border-border-primary">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>
      <div
        className="absolute bottom-2 left-[10px] right-[10px] flex justify-between font-mono text-[10.5px] text-white/85 pt-[18px]"
        style={{
          background: "linear-gradient(180deg, transparent, rgb(0 0 0 / 0.55))",
        }}
      >
        <span>{caption}</span>
        <span>{duration}</span>
      </div>
    </div>
  );
}
