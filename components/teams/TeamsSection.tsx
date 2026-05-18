"use client";

import { useRef } from "react";
import { Reveal } from "@/components/primitives/Reveal";

const CARDS = [
  {
    title: "E-Commerce brands",
    desc: "Product shots cleaned, backgrounds stripped, upscaled to print resolution — all inside one conversation.",
    video: "/videos/teams/ecommerce.mp4",
  },
  {
    title: "Content creation & social media",
    desc: "One brief becomes a full week of posts. Same visual language, no rework, no back-and-forth.",
    video: "/videos/teams/content.mp4",
  },
  {
    title: "Performance marketers",
    desc: "One product photo. Twenty ad variants. Sized for every platform, generated in a single agent session.",
    video: "/videos/teams/performance.mp4",
  },
  {
    title: "Filmmaking",
    desc: "From concept to campaign: images, video, script, and score — produced by a single agent from a brief.",
    video: "/videos/teams/filmmaking.mp4",
  },
  {
    title: "Agencies",
    desc: "Ten client brands. Ten distinct visual identities. Generated in parallel and delivered on deadline.",
    video: "/videos/teams/agencies.mp4",
  },
];

const CARD_GAP = 24;

function ChevronLeft() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M11 13L7 9L11 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M7 5L11 9L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function TeamsSection() {
  const gridRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "prev" | "next") => {
    const el = gridRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + CARD_GAP : 360;
    el.scrollBy({ left: dir === "next" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <section className="border-t border-border-primary py-24">
      <div className="container-page">

        {/* Header */}
        <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
          <div className="max-w-[640px]">
            <h2
              className="font-display font-semibold leading-[1.05] tracking-[-0.5px] m-0 mb-4 text-white text-balance"
              style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
            >
              From concept to content in one conversation.
            </h2>
            <p className="font-sans text-[18px] leading-[1.7] text-content-secondary m-0 tracking-[-0.005em]">
              Tell your agent what you're working on. It picks the right tools and delivers production-ready results.
            </p>
          </div>

          {/* Nav buttons */}
          <div className="flex gap-3 shrink-0 pb-1">
            <button
              onClick={() => scroll("prev")}
              aria-label="Previous"
              className="flex items-center justify-center w-9 h-9 rounded-full border border-border-tertiary text-content-secondary hover:border-white hover:text-white transition-colors"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => scroll("next")}
              aria-label="Next"
              className="flex items-center justify-center w-9 h-9 rounded-full border border-border-tertiary text-content-secondary hover:border-white hover:text-white transition-colors"
            >
              <ChevronRight />
            </button>
          </div>
        </Reveal>

        {/* Card grid */}
        <div
          ref={gridRef}
          className="flex gap-6 overflow-x-auto no-scrollbar"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {CARDS.map((card, i) => (
            <Reveal
              key={card.title}
              delay={i * 80}
              className="team-card-item group shrink-0"
            >
              {/* Media */}
              <div
                className="w-full overflow-hidden rounded-2xl"
                style={{ height: "clamp(280px, 36vw, 480px)" }}
              >
                <video
                  src={card.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover block"
                  style={{
                    transition: "transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>

              {/* Body */}
              <div className="pt-4">
                <p
                  className="font-display font-medium text-white leading-snug tracking-[-0.3px] mb-2"
                  style={{ fontSize: "clamp(17px, 1.6vw, 22px)" }}
                >
                  {card.title}
                </p>
                <p className="font-sans text-[15px] leading-[1.7] text-content-secondary">
                  {card.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
