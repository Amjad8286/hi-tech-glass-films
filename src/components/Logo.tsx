import { site } from "@/lib/site";

/**
 * The Hi-Tech Glass Films mark: two panes of glass standing as the uprights of
 * an "H", joined by a light beam. The front pane is clear, the rear one carries
 * film — which is the whole product in one shape.
 *
 * Used by the header, the footer and the 404. The favicon (src/app/icon.tsx)
 * rebuilds the same geometry with divs because Satori cannot take this SVG.
 */
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      role="img"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="htgf-tile" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0B265F" />
          <stop offset="55%" stopColor="#2F75F2" />
          <stop offset="100%" stopColor="#59D2E6" />
        </linearGradient>
      </defs>

      <rect width="40" height="40" rx="11" fill="url(#htgf-tile)" />

      {/* Rear pane — the one wearing the film, so it reads back a shade. */}
      <rect x="10" y="9" width="7" height="22" rx="2" fill="#FFFFFF" opacity="0.62" />
      {/* Front pane — clear. */}
      <rect x="23" y="9" width="7" height="22" rx="2" fill="#FFFFFF" />
      {/* Light beam crossing both panes. */}
      <rect x="10" y="17.5" width="20" height="4" rx="2" fill="#FFFFFF" opacity="0.92" />
      {/* Edge highlight. */}
      <path d="M6 32 L34 6" stroke="#FFFFFF" strokeOpacity="0.28" strokeWidth="1.5" />
    </svg>
  );
}

/**
 * Full lockup — mark plus wordmark. `tone` switches the wordmark for the dark
 * surfaces (footer, 404) without duplicating the markup.
 */
export function Logo({
  tone = "light",
  showStrapline = true,
  className = "",
}: {
  tone?: "light" | "dark";
  showStrapline?: boolean;
  className?: string;
}) {
  const isDark = tone === "dark";
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark />
      <span className="leading-none">
        <span
          className={`block font-display text-[1.05rem] font-bold leading-none tracking-tight sm:text-[1.15rem] ${
            isDark ? "text-frost" : "text-ink"
          }`}
        >
          {site.brand.lead}
          <span className={isDark ? "text-glass-light" : "text-glass-deep"}>
            {" "}
            {site.brand.trail}
          </span>
        </span>
        {showStrapline && (
          <span
            className={`mt-1.5 hidden font-mono sm:block text-[9px] uppercase tracking-eyebrow ${
              isDark ? "text-slate-mute2" : "text-slate-muted"
            }`}
          >
            Window film · Andheri West
          </span>
        )}
      </span>
    </span>
  );
}
