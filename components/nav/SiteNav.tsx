import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/primitives/Button";
import { NAV_LINKS } from "@/lib/data/nav";

export function SiteNav() {
  return (
    <nav className="sticky top-0 z-[60] bg-background border-b border-border-primary">
      <div className="container-page flex items-center justify-between h-16">
        <Link href="#hero" className="inline-flex items-center gap-[10px]">
          <Image
            src="/imagine-logo.svg"
            alt=""
            width={26}
            height={26}
            className="w-[26px] h-[26px]"
            priority
          />
          <span className="font-display text-[18px] font-semibold tracking-[-0.02em] text-white">
            Imagine <span className="text-primary-40 font-semibold">MCP</span>
          </span>
        </Link>

        <div className="hidden lg:flex gap-7 font-sans text-[14px] font-medium text-content-secondary">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex gap-2 items-center">
          <ButtonLink href="#install" variant="brand">
            Get the server
          </ButtonLink>
        </div>
      </div>
    </nav>
  );
}
