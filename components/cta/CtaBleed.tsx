import { ButtonLink } from "@/components/primitives/Button";
import { Reveal } from "@/components/primitives/Reveal";
import { CTA_VIDEO } from "@/lib/data/tools";

export function CtaBleed() {
  return (
    <section
      id="cta"
      className="relative py-24 md:pt-36 md:pb-40 overflow-hidden border-y border-border-primary isolate"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={CTA_VIDEO.poster}
        className="absolute inset-0 w-full h-full object-cover -z-[2] opacity-[0.30]"
      >
        <source src={CTA_VIDEO.src} type="video/mp4" />
      </video>
      <div
        className="absolute inset-0 -z-[1]"
        style={{
          background:
            "linear-gradient(180deg, var(--color-background) 0%, rgb(15 15 15 / 0.65) 25%, rgb(15 15 15 / 0.65) 75%, var(--color-background) 100%)",
        }}
      />
      <div className="container-page">
        <Reveal>
          <div className="font-mono text-[10.5px] font-semibold tracking-[1.8px] uppercase text-content-tertiary mb-[18px]">
            Ship it
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2
            className="font-display font-semibold leading-[1.2] tracking-[-0.2px] text-white text-balance my-[18px] max-w-[14ch]"
            style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
          >
            Plug in. Generate.
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="font-sans text-[18px] leading-[1.7] text-content-secondary max-w-[56ch] mb-8">
            One install, six tools, any client speaking the Model Context
            Protocol. Sign in with your imagine.art account and start calling
            tools from your agent.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="flex gap-3 flex-wrap">
            <ButtonLink href="#install" variant="brand" size="lg">
              Get Imagine MCP
            </ButtonLink>
            <ButtonLink href="#install" variant="ghost" size="lg">
              Read the docs
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
