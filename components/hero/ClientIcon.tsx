/* eslint-disable @next/next/no-img-element */
export type ClientId =
  | "claude-desktop"
  | "cursor"
  | "cline"
  | "windsurf"
  | "continue"
  | "claude-code"
  | "zed"
  | "codex-cli";

const WORDMARKS: Partial<Record<ClientId, string>> = {
  cursor:   "/agents/wordmarks/cursor.svg",
  windsurf: "/agents/wordmarks/windsurf.svg",
  cline:    "/agents/wordmarks/cline.svg",
};

export function hasWordmark(id: ClientId): boolean {
  return id in WORDMARKS;
}

export function ClientWordmark({ id }: { id: ClientId }) {
  const src = WORDMARKS[id];
  if (!src) return null;
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className="inline-block align-middle relative -top-[0.05em] shrink-0 object-contain"
      style={{ height: "0.85em", width: "auto" }}
    />
  );
}

const iconClass = "inline-block align-middle relative -top-[0.05em] shrink-0 w-[0.85em] h-[0.85em] object-contain";

export function ClientIcon({ id }: { id: ClientId }) {
  switch (id) {
    case "claude-desktop":
    case "claude-code":
      return <img src="/agents/claude.svg" alt="" aria-hidden="true" className={iconClass} />;
    case "continue":
      return <img src="/agents/continue.png" alt="" aria-hidden="true" className={`${iconClass} rounded-full`} />;
    case "zed":
      return <img src="/agents/zed.svg" alt="" aria-hidden="true" className={iconClass} style={{ filter: "brightness(0) invert(1)" }} />;
    case "codex-cli":
      return <img src="/agents/openai.svg" alt="" aria-hidden="true" className={iconClass} style={{ filter: "brightness(0) invert(1)" }} />;
    default:
      return null;
  }
}
