export interface Agent {
  name: string;
  logo: string;
  invert?: boolean;
}

export const AGENTS: Agent[] = [
  { name: "Claude Desktop", logo: "/agents/anthropic.svg" },
  { name: "Claude Code",    logo: "/agents/anthropic.svg" },
  { name: "Cursor",         logo: "/agents/cursor.svg" },
  { name: "Windsurf",       logo: "/agents/windsurf.svg" },
  { name: "Cline",          logo: "/agents/cline.png" },
  { name: "Continue",       logo: "/agents/continue.png" },
  { name: "Zed",            logo: "/agents/zed.svg",     invert: true },
  { name: "Codex CLI",      logo: "/agents/openai.svg",  invert: true },
];
