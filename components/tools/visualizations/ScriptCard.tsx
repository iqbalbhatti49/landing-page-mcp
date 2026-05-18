import type { ScriptItem } from "@/lib/data/tools";
import { ChatMock } from "./ChatMock";

interface Props {
  items: ScriptItem[];
}

export function ScriptCard({ items }: Props) {
  return (
    <ChatMock
      prompt="Write a noir diner scene, cold open, ready for production"
      status="Generated"
    >
      <div
        className="absolute inset-0 rounded-xl overflow-hidden flex flex-col"
        style={{ background: "#0f0f0f" }}
      >
        {/* Header bar */}
        <div
          className="flex items-center justify-between shrink-0"
          style={{
            padding: "8px 20px",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
            background: "#0a0a0a",
          }}
        >
          <span
            className="font-mono tracking-[1.6px] uppercase"
            style={{ fontSize: "9px", color: "rgba(255,255,255,0.18)" }}
          >
            screenplay
          </span>
          <span
            className="font-mono"
            style={{ fontSize: "9px", color: "rgba(255,255,255,0.14)" }}
          >
            p. 1
          </span>
        </div>

        {/* Script body */}
        <div
          className="flex-1 overflow-hidden font-mono"
          style={{ padding: "18px 24px", fontSize: "11px", lineHeight: "1.7" }}
        >
          {items.map((item, i) => {
            if (item.type === "gap") return <div key={i} style={{ height: 4 }} />;

            if (item.type === "scene") return (
              <div
                key={i}
                style={{
                  color: "rgba(255,255,255,0.9)",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  paddingBottom: 6,
                  marginBottom: 2,
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {item.text}
              </div>
            );

            if (item.type === "action") return (
              <div
                key={i}
                style={{
                  color: "rgba(255,255,255,0.42)",
                  maxWidth: "46ch",
                }}
              >
                {item.text}
              </div>
            );

            if (item.type === "char") return (
              <div
                key={i}
                style={{
                  color: "rgba(255,255,255,0.88)",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  paddingLeft: "30%",
                  marginTop: 4,
                }}
              >
                {item.text}
              </div>
            );

            if (item.type === "paren") return (
              <div
                key={i}
                style={{
                  color: "rgba(255,255,255,0.28)",
                  fontStyle: "italic",
                  paddingLeft: "23%",
                }}
              >
                {item.text}
              </div>
            );

            if (item.type === "line") return (
              <div
                key={i}
                style={{
                  color: "rgba(255,255,255,0.65)",
                  paddingLeft: "16%",
                  maxWidth: "76%",
                }}
              >
                {item.text}
              </div>
            );

            return null;
          })}
        </div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            height: 56,
            background: "linear-gradient(to bottom, transparent, #0f0f0f)",
          }}
        />
      </div>
    </ChatMock>
  );
}
