/* eslint-disable @next/next/no-img-element */
import { Reveal } from "@/components/primitives/Reveal";
import { AGENTS } from "@/lib/data/agents";

export function AgentsRow() {
  return (
    <section className="py-24 pb-10">
      <div className="container-page">
        <Reveal>
          <div className="font-mono text-[10.5px] font-semibold tracking-[1.8px] uppercase text-content-tertiary mb-7">
            Works with
          </div>
          <div className="flex flex-wrap gap-y-5 gap-x-8">
            {AGENTS.map((a) => (
              <div key={a.name} className="flex items-center gap-2.5 group">
                <img
                  src={a.logo}
                  alt={a.name}
                  className="h-5 w-auto object-contain shrink-0 opacity-60 group-hover:opacity-100 transition-opacity"
                  style={a.invert ? { filter: "brightness(0) invert(1)" } : undefined}
                />
                <span className="font-display text-[18px] sm:text-[20px] font-medium tracking-[-0.01em] text-content-secondary group-hover:text-white transition-colors">
                  {a.name}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-7 font-sans text-[14px] text-content-tertiary">
            Plus any client implementing the Model Context Protocol.
          </div>
        </Reveal>
      </div>
    </section>
  );
}
