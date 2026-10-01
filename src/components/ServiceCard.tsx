import Link from "next/link";
import type { Service } from "@/lib/site";
import { ServiceIcon } from "@/components/Icons";

// Badge → the audience the film is usually bought for. Keeps an 11-card grid
// scannable: visitors pattern-match the icon and badge before reading copy.
// Keys are service slugs from site.ts and must stay in step with them.
const SERVICE_AUDIENCE: Record<string, string> = {
  "sun-control-film": "Home · Office",
  "one-way-privacy-film": "Privacy",
  "frosted-glass-film": "Privacy · Decor",
  "decorative-glass-film": "Decor",
  "safety-security-film": "Safety",
  "uv-protection-film": "Protection",
  "office-glass-branding": "Commercial",
  "residential-window-film": "Residential",
  "commercial-glass-film": "Commercial",
  "glass-and-mirror": "Glass & Mirror",
  "car-window-tinting": "Automotive",
};

export function ServiceCard({ s }: { s: Service }) {
  return (
    <Link
      href={`/services/${s.slug}`}
      className="group surface relative flex flex-col overflow-hidden p-6 transition-all hover:-translate-y-0.5 hover:border-glass/50 hover:shadow-lift"
    >
      {/* Brand hairline that lights up on hover. */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-0.5 scale-x-0 brand-gradient transition-transform duration-300 group-hover:scale-x-100"
      />

      <div className="mb-5 flex items-center justify-between gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-glass/10 text-glass-deep transition-colors group-hover:bg-glass/20">
          <ServiceIcon slug={s.slug} className="h-5 w-5" />
        </span>
        <span className="rounded-full border border-frost-deep px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide text-slate-muted">
          {SERVICE_AUDIENCE[s.slug] ?? "Window film"}
        </span>
      </div>

      <h3 className="font-display text-lg font-semibold leading-snug text-ink">{s.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-muted">{s.short}</p>

      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-glass-deep">
        Explore
        <span aria-hidden className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  );
}
