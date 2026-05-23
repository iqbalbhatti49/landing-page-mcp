"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { IMAGINE_TOOL_LINKS } from "@/lib/data/nav";

const NAV_LINKS = [
  { label: "Tools",   href: "#tools" },
  { label: "Install", href: "#install" },
  { label: "Github",  href: "https://github.com/asjad3/landing-page-mcp" },
  { label: "Pricing", href: "https://www.imagine.art/subscription" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [mobileToolsOpen, setMobileToolsOpen] = useState(false);

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
        style={{ padding: scrolled ? "10px 20px" : "16px 0", transition: "padding 0.3s ease" }}
      >
        <div
          className="mx-auto flex items-center justify-between"
          style={{
            maxWidth:       scrolled ? "1240px" : "100%",
            padding:        scrolled ? "8px 12px" : "10px clamp(40px,12vw,220px)",
            borderRadius:   "16px",
            background:     scrolled ? "rgba(15,15,15,0.70)" : "transparent",
            border:         scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
            backdropFilter: scrolled ? "saturate(180%) blur(24px)" : "none",
            boxShadow:      scrolled ? "0 0 0 1px rgba(0,0,0,0.2), 0 4px 6px rgba(0,0,0,0.1), 0 12px 48px rgba(0,0,0,0.3)" : "none",
            transition:     "max-width 0.55s cubic-bezier(0.4,0,0.2,1), padding 0.55s cubic-bezier(0.4,0,0.2,1), background 0.5s cubic-bezier(0.4,0,0.2,1), border-color 0.5s cubic-bezier(0.4,0,0.2,1), box-shadow 0.5s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          {/* Logo — kept from existing design */}
          <Link href="https://www.imagine.art/" className="inline-flex items-center gap-[10px] shrink-0 no-underline">
            <Image src="/imagine-logo.svg" alt="" width={26} height={26} className="w-[26px] h-[26px] ml-[2px]" priority />
            <span className="font-display text-[18px] font-semibold tracking-[-0.02em] text-white">
              Imagine <span className="text-primary-40 font-semibold">MCP</span>
            </span>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {NAV_LINKS.map((l) =>
              l.label === "Tools" ? (
                <div
                  key={l.label}
                  className="relative"
                  onMouseEnter={() => setToolsOpen(true)}
                  onMouseLeave={() => setToolsOpen(false)}
                >
                  <a
                    href={l.href}
                    aria-haspopup="menu"
                    aria-expanded={toolsOpen}
                    className="inline-flex items-center gap-[6px] px-[14px] py-[6px] rounded-lg font-sans text-[14px] font-medium tracking-[0.14px] whitespace-nowrap transition-colors duration-150"
                    style={{
                      color: toolsOpen ? "#fff" : "rgba(255,255,255,0.75)",
                      background: toolsOpen ? "rgba(255,255,255,0.08)" : "transparent",
                    }}
                  >
                    {l.label}
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                      <path
                        d="M2.5 3.75L5 6.25L7.5 3.75"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <div
                    role="menu"
                    aria-label="Imagine tools"
                    className="absolute top-full left-0 pt-2"
                    style={{
                      opacity: toolsOpen ? 1 : 0,
                      visibility: toolsOpen ? "visible" : "hidden",
                      transform: toolsOpen ? "translateY(0)" : "translateY(-4px)",
                      transition: "opacity 0.18s ease, transform 0.18s ease, visibility 0.18s",
                      pointerEvents: toolsOpen ? "auto" : "none",
                    }}
                  >
                    <div
                      className="min-w-[240px] rounded-[12px] py-2"
                      style={{
                        background: "rgba(15,15,15,0.92)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        backdropFilter: "saturate(180%) blur(48px)",
                        boxShadow: "0 12px 36px rgba(0,0,0,0.4)",
                      }}
                    >
                      {IMAGINE_TOOL_LINKS.map((t) => (
                        <a
                          key={t.label}
                          href={t.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          role="menuitem"
                          className="block px-3 py-[7px] mx-1 rounded-[8px] font-sans text-[13.5px] font-medium tracking-[0.1px] transition-colors duration-150"
                          style={{ color: "rgba(255,255,255,0.78)" }}
                          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#fff"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)"; }}
                          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.78)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                        >
                          {t.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={l.label}
                  href={l.href}
                  {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="px-[14px] py-[6px] rounded-lg font-sans text-[14px] font-medium tracking-[0.14px] whitespace-nowrap transition-colors duration-150"
                  style={{ color: "rgba(255,255,255,0.75)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#fff"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.75)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                >
                  {l.label}
                </a>
              )
            )}
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
              {NAV_LINKS.map((l) =>
                l.label === "Tools" ? (
                  <div key={l.label} className="flex flex-col items-center">
                    <button
                      type="button"
                      onClick={() => setMobileToolsOpen((o) => !o)}
                      aria-expanded={mobileToolsOpen}
                      className="inline-flex items-center gap-2 text-center px-8 py-2.5 rounded-[10px] font-sans text-[22px] font-light tracking-[-0.2px] transition-colors duration-150 bg-transparent border-none cursor-pointer"
                      style={{ color: "rgba(255,255,255,0.55)" }}
                    >
                      {l.label}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 10 10"
                        fill="none"
                        aria-hidden="true"
                        style={{
                          transform: mobileToolsOpen ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.18s ease",
                        }}
                      >
                        <path
                          d="M2.5 3.75L5 6.25L7.5 3.75"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    {mobileToolsOpen && (
                      <div className="flex flex-col items-center gap-0.5 mt-1 mb-2">
                        {IMAGINE_TOOL_LINKS.map((t) => (
                          <a
                            key={t.label}
                            href={t.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMenuOpen(false)}
                            className="block text-center px-6 py-1.5 font-sans text-[15px] font-light tracking-[-0.1px] transition-colors duration-150"
                            style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}
                          >
                            {t.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={l.label}
                    href={l.href}
                    {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    onClick={() => setMenuOpen(false)}
                    className="block text-center px-8 py-2.5 rounded-[10px] font-sans text-[22px] font-light tracking-[-0.2px] transition-colors duration-150"
                    style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}
                  >
                    {l.label}
                  </a>
                )
              )}
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
