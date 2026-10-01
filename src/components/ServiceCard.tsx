import Link from "next/link";
import type { Service } from "@/lib/site";

// Category → icon + label. Keeps the 11-card grid scannable: visitors
// pattern-match the icon/badge before reading a single word of copy.
const CATEGORY_STYLES: Record<string, { icon: string; label: string }> = {
  "sun-control-film": { icon: "☀️", label: "Residential · Commercial" },
  "one-way-privacy-film": { icon: "🪞", label: "Privacy" },
  "frosted-glass-film": { icon: "❄️", label: "Decorative · Privacy" },
  "decorative-glass-film": { icon: "✨", label: "Decorative" },
  "safety-security-film": { icon: "🛡️", label: "Safety" },
  "uv-protection-film": { icon: "🔆", label: "Protection" },
  "office-glass-branding-film": { icon: "🏢", label: "Commercial" },
  "residential-window-film": { icon: "🏠", label: "Residential" },
  "commercial-glass-film-solutions": { icon: "🏬", label: "Commercial" },
  "glass-mirror-work": { icon: "🪟", label: "Glass & Mirror" },
  "car-window-tinting": { icon: "🚗", label: "Automotive" },
};

export function ServiceCard({ s }: { s: Service }) {
  const cat = CATEGORY_STYLES[s.slug] ?? { icon: "🎬", label: "Film" };
  return (
    <Link
      href={`/services/${s.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-frost-deep bg-white/70 p-6 transition-all hover:-translate-y-0.5 hover:border-glass/50 hover:shadow-[0_18px_40px_-24px_rgba(12,124,117,0.5)]"
    >
      <div className="mb-5 flex items-center justify-between">
        <span
          aria-hidden
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-glass/10 text-lg transition-colors group-hover:bg-glass/20"
        >
          {cat.icon}
        </span>
        <span className="rounded-full border border-frost-deep px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide text-slate-muted">
          {cat.label}
        </span>
      </div>
      <h3 className="font-display text-xl font-semibold text-ink">{s.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-muted">{s.short}</p>
      <span
        aria-hidden
        className="mt-5 inline-flex items-center text-sm font-medium text-glass-deep"
      >
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </span>
    </Link>
  );
}
