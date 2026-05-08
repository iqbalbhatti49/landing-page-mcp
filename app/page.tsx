import { SiteNav } from "@/components/nav/SiteNav";
import { Hero } from "@/components/hero/Hero";
import { AgentsRow } from "@/components/agents/AgentsRow";
import { ToolsSection } from "@/components/tools/ToolsSection";
import { CtaBleed } from "@/components/cta/CtaBleed";
import { SiteFooter } from "@/components/footer/SiteFooter";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Imagine MCP",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "macOS, Windows, Linux",
  description:
    "An MCP server for ImagineArt. Eight creative endpoints (text-to-image, text-to-video, music, scripts, upscaler, background remover, list, balance) for Claude, Cursor, Cline, Windsurf, and any MCP-compatible client.",
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
        <Hero />
        <AgentsRow />
        <ToolsSection />
        <CtaBleed />
      </main>
      <SiteFooter />
    </>
  );
}
