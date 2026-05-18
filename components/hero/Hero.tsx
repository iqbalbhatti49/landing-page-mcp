"use client";

import { useState, useEffect } from "react";
import { ButtonLink } from "@/components/primitives/Button";
import { HeroBackdrop } from "./HeroBackdrop";
import { InstallPanel } from "./InstallPanel";
import { ClientIcon, ClientWordmark, hasWordmark, type ClientId } from "./ClientIcon";

const CLIENTS: { id: ClientId; name: string }[] = [
  { id: "claude-desktop", name: "Claude Desktop" },
  { id: "cursor", name: "Cursor" },
  { id: "cline", name: "Cline" },
  { id: "windsurf", name: "Windsurf" },
  { id: "continue", name: "Continue" },
  { id: "claude-code", name: "Claude Code" },
  { id: "zed", name: "Zed" },
  { id: "codex-cli", name: "Codex CLI" },
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % CLIENTS.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  const client = CLIENTS[index];

  return (
    <section
      id="hero"
      className="relative pt-24 md:pt-32 pb-16 md:pb-[88px] isolate overflow-visible"
    >
      <HeroBackdrop />
      <div className="container-page">
        <div className="flex flex-col items-center text-center">
          <div className="font-mono text-[10.5px] font-semibold tracking-[1.8px] uppercase text-content-tertiary mb-[22px]">
            v1.0
          </div>

          <h1
            className="font-display font-semibold leading-[1.06] tracking-[-1.5px] m-0 mb-[22px] text-white"
            style={{ fontSize: "clamp(42px, 5vw, 64px)" }}
          >
            Creative tools for
            <br />
            <span key={client.id} className="inline-flex items-center animate-word-in whitespace-nowrap">
              {hasWordmark(client.id) ? (
                <ClientWordmark id={client.id} />
              ) : (
                <span className="inline-flex items-center gap-[0.4em]" style={{ fontSize: "0.75em" }}>
                  <ClientIcon id={client.id} />
                  {client.name}
                </span>
              )}
            </span>
          </h1>

          <p className="font-sans text-[18px] font-normal leading-[1.7] text-content-secondary m-0 mb-8 max-w-[56ch] tracking-[-0.005em]">
            An MCP server for ImagineArt. Eight creative endpoints for Claude,
            Cursor, and any client that speaks the Model Context Protocol.
          </p>

          <div className="flex gap-[10px] flex-wrap justify-center">
            <ButtonLink href="#install" variant="brand" size="lg">
              Install the server
            </ButtonLink>
            <ButtonLink href="#tools" variant="ghost" size="lg">
              See the tools
            </ButtonLink>
          </div>
        </div>

        <InstallPanel />
      </div>

      {/* Fade dots in smoothly below the hero */}
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 pointer-events-none"
        style={{
          bottom: -96,
          height: 96,
          background: "linear-gradient(to bottom, var(--color-background), transparent)",
        }}
      />
    </section>
  );
}
