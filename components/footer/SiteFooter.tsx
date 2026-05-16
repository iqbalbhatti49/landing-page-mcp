import Image from "next/image";
import Link from "next/link";
import { FOOTER_COLUMNS } from "@/lib/data/nav";

export function SiteFooter() {
  return (
    <footer className="py-16 pb-10 border-t border-border-primary">
      <div className="container-page">
        <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr] gap-10 mb-10">
          <div>
            <Link
              href="#hero"
              className="inline-flex items-center gap-[10px] mb-[14px]"
            >
              <Image
                src="/imagine-logo.svg"
                alt=""
                width={26}
                height={26}
                className="w-[26px] h-[26px]"
              />
              <span className="font-display text-[18px] font-semibold tracking-[-0.02em] text-white">
                Imagine{" "}
                <span className="text-primary-40 font-semibold">MCP</span>
              </span>
            </Link>
            <p className="font-sans text-[14px] text-content-secondary max-w-[320px] leading-[1.55] m-0">
              An MCP server by Vyro AI. ImagineArt&apos;s creative tools, for
              any agent.
            </p>
          </div>
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading}>
              <h5 className="font-display text-[14px] font-medium tracking-[-0.005em] text-white mb-[14px]">
                {col.heading}
              </h5>
              {col.links.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="block font-sans text-[14px] text-content-secondary mb-2 hover:text-white transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="pt-[22px] border-t border-border-primary font-sans text-[13px] text-content-tertiary">
          © 2026 Vyro AI
        </div>
      </div>
    </footer>
  );
}
