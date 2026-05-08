"use client";

import type { ReactNode } from "react";
import { useReveal } from "@/lib/hooks/useReveal";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "article" | "section" | "li";
}

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const { ref, visible } = useReveal<HTMLElement>();
  const Component = Tag as "div";
  return (
    <Component
      ref={ref as React.RefObject<HTMLDivElement | null>}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Component>
  );
}
