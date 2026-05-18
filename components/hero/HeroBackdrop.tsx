export function HeroBackdrop() {
  return (
    <div
      className="absolute inset-0 overflow-hidden z-0 pointer-events-none bg-background"
      aria-hidden="true"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260505_105838_084968f2-4415-42a4-971a-3bec54539549.mp4"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgb(15 15 15 / 0.5) 70%, var(--color-background) 100%)",
        }}
      />
    </div>
  );
}
