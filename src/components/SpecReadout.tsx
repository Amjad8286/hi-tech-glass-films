// Signature element: window-film performance shown like instrument readouts.
// The specs (UV / heat / glare rejection) are the real language of this trade.
export function SpecReadout({
  specs,
  tone = "light",
}: {
  specs: { label: string; value: string }[];
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";
  return (
    <dl
      className={`grid grid-cols-3 divide-x overflow-hidden rounded-xl border ${
        isDark
          ? "divide-ink-line border-ink-line bg-ink/60"
          : "divide-frost-deep border-frost-deep bg-white/70"
      }`}
    >
      {specs.map((s) => (
        <div key={s.label} className="px-3 py-4 text-center">
          <dd
            className={`font-mono text-xl font-medium tracking-tight ${
              isDark ? "text-glass-light" : "text-glass-deep"
            }`}
          >
            {s.value}
          </dd>
          <dt
            className={`mt-1 font-mono text-[10px] uppercase tracking-eyebrow ${
              isDark ? "text-slate-mute2" : "text-slate-muted"
            }`}
          >
            {s.label}
          </dt>
        </div>
      ))}
    </dl>
  );
}
