import { ButtonLink } from "@/components/primitives/Button";
import { HeroBackdrop } from "./HeroBackdrop";
import { InstallPanel } from "./InstallPanel";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-[88px] isolate overflow-visible"
    >
      <HeroBackdrop />
      <div className="container-page">
        <div className="font-mono text-[12px] tracking-[0.06em] uppercase text-content-tertiary mb-[22px]">
          v1.0
        </div>

        <h1
          className="font-display font-semibold leading-[0.96] tracking-[-0.035em] m-0 mb-[22px] text-white text-balance max-w-[18ch]"
          style={{ fontSize: "clamp(48px, 7.6vw, 112px)" }}
        >
          Creative tools for any agent.
        </h1>

        <p className="font-sans text-[18px] font-normal leading-[1.55] text-content-secondary m-0 mb-8 max-w-[56ch] tracking-[-0.005em]">
          An MCP server for ImagineArt. Eight creative endpoints for Claude,
          Cursor, and any client that speaks the Model Context Protocol.
        </p>

        <div className="flex gap-[10px] flex-wrap">
          <ButtonLink href="#install" variant="brand" size="lg">
            Install the server
          </ButtonLink>
          <ButtonLink href="#tools" variant="ghost" size="lg">
            See the tools
          </ButtonLink>
        </div>

        <InstallPanel />
      </div>
    </section>
  );
}
