export interface Agent {
  name: string;
  logo: string;
  wordmark?: string;
  wordmarkScale?: number;
  invert?: boolean;
  colored?: boolean;
  iconOnly?: boolean;
}

export const AGENTS: Agent[] = [
  { name: "Claude Desktop", logo: "/agents/claude.svg",   colored: true },
  { name: "Claude Code",    logo: "/agents/claude.svg",   colored: true },
  { name: "Cursor",         logo: "/agents/cursor.svg",   wordmark: "/agents/wordmarks/cursor.svg" },
  { name: "Windsurf",       logo: "/agents/windsurf.svg", wordmark: "/agents/wordmarks/windsurf.svg", wordmarkScale: 1.45 },
  { name: "Cline",          logo: "/agents/cline.png",    wordmark: "/agents/wordmarks/cline.svg" },
  { name: "Continue",       logo: "/agents/continue.png" },
  { name: "Zed",            logo: "/agents/zed.svg",      invert: true },
  { name: "Codex CLI",      logo: "",                     iconOnly: false },
];
