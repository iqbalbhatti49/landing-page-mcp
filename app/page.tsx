import { SiteNav } from "@/components/nav/SiteNav";
import { Hero } from "@/components/hero/Hero";
import { AgentsRow } from "@/components/agents/AgentsRow";
import { ToolsSection } from "@/components/tools/ToolsSection";
import { TeamsSection } from "@/components/teams/TeamsSection";
import { FaqSection } from "@/components/faq/FaqSection";
import { CtaBleed } from "@/components/cta/CtaBleed";
import { SiteFooter } from "@/components/footer/SiteFooter";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Imagine MCP",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "macOS, Windows, Linux",
  description:
    "An MCP server for ImagineArt. Six creative endpoints (text-to-image, text-to-video, music, upscaler, background remover, balance) for Claude, Cursor, Cline, Hermes, OpenClaw, and any MCP-compatible client.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  publisher: {
    "@type": "Organization",
    name: "Vyro AI",
    url: "https://imagine.art",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteNav />
      <main>
        {/* Border lines — scoped to this wrapper, stop after TeamsSection */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none mx-auto"
            style={{
              maxWidth: "1240px",
              borderLeft: "1px solid rgba(255,255,255,0.06)",
              borderRight: "1px solid rgba(255,255,255,0.06)",
            }}
          />
          <Hero />
          <AgentsRow />
          <ToolsSection />
        </div>

        <TeamsSection />
        <FaqSection />
        <CtaBleed />
      </main>
      <SiteFooter />
    </>
  );
}
