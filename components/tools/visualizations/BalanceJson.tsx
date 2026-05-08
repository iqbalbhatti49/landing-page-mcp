export function BalanceJson() {
  return (
    <pre className="w-full h-full min-h-[200px] m-0 p-5 font-mono text-[13px] leading-[1.85] text-content-secondary bg-neutral-110 border border-border-primary rounded-[10px] whitespace-pre flex flex-col justify-center">
      <span className="text-content-tertiary">{"// imagine.balance()"}</span>
      {"\n{\n  "}
      <span className="text-primary-30">&quot;credits&quot;</span>
      {": "}
      <span className="text-white">2847</span>
      {",\n  "}
      <span className="text-primary-30">&quot;used&quot;</span>
      {":    "}
      <span className="text-white">1153</span>
      {",\n  "}
      <span className="text-primary-30">&quot;renews&quot;</span>
      {":  "}
      <span className="text-content-secondary">&quot;2026-10-31&quot;</span>
      {"\n}"}
    </pre>
  );
}
