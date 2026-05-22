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
  { name: "Claude",   logo: "/agents/claude.svg", colored: true },
  { name: "Cursor",   logo: "/agents/cursor.svg", wordmark: "/agents/wordmarks/cursor.svg" },
  { name: "Cline",    logo: "/agents/cline.png",  wordmark: "/agents/wordmarks/cline.svg" },
  { name: "Hermes",   logo: "",                   iconOnly: false },
  { name: "OpenClaw", logo: "",                   iconOnly: false },
];
