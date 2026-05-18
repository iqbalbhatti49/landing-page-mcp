"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Tools",   href: "#tools" },
  { label: "Install", href: "#install" },
  { label: "Docs",    href: "#" },
  { label: "Pricing", href: "#" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-[60]"
        style={{ padding: scrolled ? "10px 0" : "16px 0", transition: "padding 0.3s ease" }}
      >
        <div
          className="mx-auto flex items-center justify-between"
          style={{
            maxWidth:       scrolled ? "1240px" : "100%",
            padding:        scrolled ? "8px 12px" : "10px clamp(40px,12vw,220px)",
            borderRadius:   "16px",
            background:     scrolled ? "rgba(15,15,15,0.88)" : "transparent",
            border:         scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
            backdropFilter: scrolled ? "saturate(180%) blur(72px)" : "none",
            boxShadow:      scrolled ? "0 0 0 1px rgba(0,0,0,0.2), 0 4px 6px rgba(0,0,0,0.1), 0 12px 48px rgba(0,0,0,0.3)" : "none",
            transition:     "max-width 0.55s cubic-bezier(0.4,0,0.2,1), padding 0.55s cubic-bezier(0.4,0,0.2,1), background 0.5s cubic-bezier(0.4,0,0.2,1), border-color 0.5s cubic-bezier(0.4,0,0.2,1), box-shadow 0.5s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          {/* Logo — kept from existing design */}
          <Link href="https://www.imagine.art/" className="inline-flex items-center gap-[10px] shrink-0 no-underline">
            <Image src="/imagine-logo.svg" alt="" width={26} height={26} className="w-[26px] h-[26px]" priority />
            <span className="font-display text-[18px] font-semibold tracking-[-0.02em] text-white">
              Imagine <span className="text-primary-40 font-semibold">MCP</span>
            </span>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="px-[14px] py-[6px] rounded-lg font-sans text-[14px] font-medium tracking-[0.14px] whitespace-nowrap transition-colors duration-150"
                style={{ color: "rgba(255,255,255,0.75)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#fff"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.75)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden lg:flex items-center gap-1 shrink-0">
            <a
              href="#install"
              className="inline-flex items-center justify-center h-[34px] px-[14px] rounded-[9px] font-sans text-[13.5px] font-medium text-white tracking-[0.14px] transition-all duration-200"
              style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.25)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.18)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)"; }}
            >
              Get the server
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="lg:hidden flex items-center justify-center w-[38px] h-[38px] rounded-[10px] border-none cursor-pointer transition-colors duration-150"
            style={{ background: "transparent", color: "#fff" }}
            aria-label="Open menu"
          >
            <span className="flex flex-col gap-[5px]">
              <span
                className="block w-[18px] h-[1.5px] rounded-sm bg-current transition-transform duration-[250ms]"
                style={{ transform: menuOpen ? "translateY(3.25px) rotate(45deg)" : "none" }}
              />
              <span
                className="block w-[18px] h-[1.5px] rounded-sm bg-current transition-transform duration-[250ms]"
                style={{ transform: menuOpen ? "translateY(-3.25px) rotate(-45deg)" : "none" }}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[101] bg-[#0a0a0a] flex flex-col" style={{ animation: "mobileMenuIn 0.22s cubic-bezier(0.4,0,0.2,1) forwards" }}>
          <div className="flex items-center justify-between px-6 py-[18px] shrink-0">
            <Link href="https://www.imagine.art/" className="inline-flex items-center gap-[10px]">
              <Image src="/imagine-logo.svg" alt="" width={26} height={26} className="w-[26px] h-[26px]" />
              <span className="font-display text-[18px] font-semibold tracking-[-0.02em] text-white">
                Imagine <span className="text-primary-40">MCP</span>
              </span>
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center p-1 border-none bg-transparent cursor-pointer transition-colors duration-150"
              style={{ color: "rgba(255,255,255,0.6)" }}
              aria-label="Close menu"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center pb-10">
            <div className="flex flex-col items-center gap-1">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-center px-8 py-2.5 rounded-[10px] font-sans text-[22px] font-light tracking-[-0.2px] transition-colors duration-150"
                  style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}
                >
                  {l.label}
                </a>
              ))}
            </div>

            <div className="w-[calc(100%-48px)] h-px bg-white/[0.08] my-4" />

            <div className="flex items-center justify-center gap-2.5 px-6">
              <a
                href="#install"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center justify-center h-11 px-6 rounded-[14px] font-sans text-[14px] font-medium text-white bg-white/10 border border-white/25"
              >
                Get the server
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
