import { HERO_VIDEO } from "@/lib/data/tools";

export function HeroBackdrop() {
  return (
    <div
      className="absolute inset-0 overflow-hidden z-0 pointer-events-none"
      aria-hidden="true"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={HERO_VIDEO.poster}
        className="absolute inset-0 w-full h-full object-cover opacity-[0.45]"
      >
        <source src={HERO_VIDEO.src} type="video/mp4" />
      </video>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgb(15 15 15 / 0.55) 0%, rgb(15 15 15 / 0.85) 70%, var(--color-background) 100%)",
        }}
      />
    </div>
  );
}
