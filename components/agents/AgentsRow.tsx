import { AGENTS } from "@/lib/data/agents";

export function AgentsRow() {
  return (
    <section className="py-24 pb-10">
      <div className="container-page">
        <div className="font-mono text-[12px] tracking-[0.06em] uppercase text-content-tertiary mb-7">
          Works with
        </div>
        <div className="flex flex-wrap gap-y-7 gap-x-10 font-display">
          {AGENTS.map((a) => (
            <span
              key={a}
              className="text-[22px] font-medium tracking-[-0.01em] text-content-secondary hover:text-white transition-colors"
            >
              {a}
            </span>
          ))}
        </div>
        <div className="mt-7 font-sans text-[14px] text-content-tertiary">
          Plus any client implementing the Model Context Protocol.
        </div>
      </div>
    </section>
  );
}
