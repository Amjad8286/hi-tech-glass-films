/**
 * Inline SVG icon set.
 *
 * Replaces the emoji the service cards used to carry: emoji render differently
 * on every platform and read as informal, which is the opposite of what a
 * premium trade brand needs. These inherit `currentColor` and the surrounding
 * font size, so they pick up the brand palette automatically.
 */

type IconProps = { className?: string };

const base = "h-5 w-5";

function Svg({ className, children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className ?? base}
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

/* ── Interface icons ──────────────────────────────────────────────────── */

export function PhoneIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M6.5 3h3l1.5 4-2 1.3a12 12 0 0 0 5.7 5.7L16 12l4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3.5 5.2 2 2 0 0 1 5.5 3h1Z" />
    </Svg>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className ?? base}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.38a9.86 9.86 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.65-1.03-5.13-2.9-7A9.82 9.82 0 0 0 12.04 2Zm0 18.02h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.1.81.83-3.03-.2-.31a8.18 8.18 0 0 1-1.26-4.36c0-4.54 3.7-8.23 8.23-8.23a8.18 8.18 0 0 1 5.81 2.41 8.17 8.17 0 0 1 2.41 5.82c0 4.54-3.7 8.22-8.23 8.22Zm4.52-6.16c-.25-.13-1.47-.72-1.69-.8-.23-.09-.39-.13-.56.12-.16.25-.64.8-.78.97-.15.16-.29.18-.53.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.17 1.73 2.64 4.19 3.7.59.26 1.04.41 1.4.52.59.19 1.12.16 1.55.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.17-.47-.29Z" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M6 6l12 12M18 6L6 18" />
    </Svg>
  );
}

export function PinIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M12 21s7-5.4 7-10.5A7 7 0 0 0 5 10.5C5 15.6 12 21 12 21Z" />
      <circle cx="12" cy="10.5" r="2.5" />
    </Svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.2 1.9" />
    </Svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M4.5 12.5 9.5 17.5 19.5 6.5" />
    </Svg>
  );
}

export function ArrowIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Svg>
  );
}

/* ── Service icons ────────────────────────────────────────────────────── */

const SERVICE_ICONS: Record<string, (p: IconProps) => JSX.Element> = {
  // Sun over a pane — heat and glare stopped at the glass.
  "sun-control-film": ({ className }) => (
    <Svg className={className}>
      <circle cx="12" cy="8" r="3.2" />
      <path d="M12 2.2v1.4M17.5 3.8l-1 1M20.5 9h-1.4M5.5 3.8l1 1M3.5 9h1.4" />
      <path d="M3.5 14.5h17M5.5 18.5h13" />
    </Svg>
  ),
  // Half-mirrored pane: reflective one way, clear the other.
  "one-way-privacy-film": ({ className }) => (
    <Svg className={className}>
      <rect x="3.5" y="4" width="17" height="16" rx="2" />
      <path d="M12 4v16" />
      <path d="M15 8.5l3.5-2.5M15 12.5l3.5-2.5M15 16.5l3.5-2.5" />
    </Svg>
  ),
  // Pane half-dissolved into etch texture.
  "frosted-glass-film": ({ className }) => (
    <Svg className={className}>
      <rect x="3.5" y="4" width="17" height="16" rx="2" />
      <path d="M3.5 11h17" />
      <path d="M6.5 14.5h2M11 14.5h2M15.5 14.5h2M6.5 17.5h2M11 17.5h2M15.5 17.5h2" />
    </Svg>
  ),
  // Patterned glass.
  "decorative-glass-film": ({ className }) => (
    <Svg className={className}>
      <rect x="3.5" y="4" width="17" height="16" rx="2" />
      <path d="M12 7.5 14.2 12 12 16.5 9.8 12Z" />
      <path d="M6.5 9.5v5M17.5 9.5v5" />
    </Svg>
  ),
  // Shield over glass.
  "safety-security-film": ({ className }) => (
    <Svg className={className}>
      <path d="M12 3 5 5.6v5.6c0 4.3 2.9 7.6 7 9.3 4.1-1.7 7-5 7-9.3V5.6L12 3Z" />
      <path d="M9.2 12.2l2 2 3.6-4" />
    </Svg>
  ),
  // Rays stopped by the pane.
  "uv-protection-film": ({ className }) => (
    <Svg className={className}>
      <path d="M4 20V4" />
      <circle cx="18" cy="12" r="2.6" />
      <path d="M18 7.2V5.8M21.8 8.2l-1 1M22.8 12h1.2M14.4 8.2l1 1M18 16.8v1.4" />
      <path d="M7.5 9.5h3M7.5 12h3M7.5 14.5h3" />
    </Svg>
  ),
  // Glazed frontage carrying a graphic band.
  "office-glass-branding": ({ className }) => (
    <Svg className={className}>
      <rect x="3.5" y="4" width="17" height="16" rx="2" />
      <path d="M3.5 9.5h17M3.5 14h17" />
      <path d="M6.8 11.8h5.4" />
    </Svg>
  ),
  // House.
  "residential-window-film": ({ className }) => (
    <Svg className={className}>
      <path d="M4 10.5 12 4l8 6.5V20H4Z" />
      <rect x="9.3" y="13" width="5.4" height="7" />
    </Svg>
  ),
  // Tower block.
  "commercial-glass-film": ({ className }) => (
    <Svg className={className}>
      <path d="M4 20V7l7-3v16" />
      <path d="M11 20V10l9 3v7" />
      <path d="M6.8 9.5v1.5M6.8 13.5v1.5M14.8 14v1.5M17.5 15v1.5" />
    </Svg>
  ),
  // Framed mirror.
  "glass-and-mirror": ({ className }) => (
    <Svg className={className}>
      <rect x="5" y="3.5" width="14" height="17" rx="7" />
      <path d="M8.5 9.5 11.5 6.5M8.5 14 13.5 9" />
    </Svg>
  ),
  // Car profile.
  "car-window-tinting": ({ className }) => (
    <Svg className={className}>
      <path d="M3 15.5v-2l1.8-4A2 2 0 0 1 6.7 8h10.6a2 2 0 0 1 1.9 1.5l1.8 4v2" />
      <path d="M3 15.5h18" />
      <circle cx="7.2" cy="17" r="1.8" />
      <circle cx="16.8" cy="17" r="1.8" />
      <path d="M9.5 8v5.5" />
    </Svg>
  ),
};

/** Falls back to a plain pane for any service without a dedicated icon. */
export function ServiceIcon({ slug, className }: { slug: string; className?: string }) {
  const Icon =
    SERVICE_ICONS[slug] ??
    (({ className: c }: IconProps) => (
      <Svg className={c}>
        <rect x="3.5" y="4" width="17" height="16" rx="2" />
        <path d="M12 4v16M3.5 12h17" />
      </Svg>
    ));
  return <Icon className={className} />;
}
