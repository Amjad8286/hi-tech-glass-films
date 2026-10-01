import type { Config } from "tailwindcss";

/**
 * Hi-Tech Glass Films design tokens.
 *
 * The palette is deliberately engineered rather than decorative: a graphite-navy
 * ground (`ink`), an azure signal colour (`glass`) that carries every action on
 * the site, and an ice highlight (`ice`) that reads like light caught on the
 * edge of a pane. `sun` is reserved for warmth — ratings and heat references.
 *
 * Every pairing used for text has been checked to WCAG AA:
 *   slate-muted  on frost → 5.4:1    glass-deep on frost → 6.2:1
 *   ice-deep     on frost → 5.2:1    sun-deep   on frost → 5.1:1
 *   glass-light  on ink   → 8.7:1    slate-mute2 on ink  → 7.2:1
 * Use `glass-deep` for brand text on light surfaces and `glass-light` on dark.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#070D14",
          soft: "#0F1A26",
          line: "#1E2E3E",
        },
        frost: {
          DEFAULT: "#F5F8FB",
          deep: "#E4EBF2",
        },
        glass: {
          light: "#7AB0FF",
          DEFAULT: "#2F75F2",
          deep: "#1A4FC4",
          dark: "#133A8F",
        },
        ice: {
          DEFAULT: "#59D2E6",
          deep: "#0A6F85",
        },
        sun: {
          DEFAULT: "#F3A93C",
          deep: "#9A5B0E",
        },
        slate: {
          muted: "#54657A",
          mute2: "#8DA0B5",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        eyebrow: "0.28em",
      },
      maxWidth: {
        page: "1180px",
      },
      boxShadow: {
        card: "0 18px 40px -24px rgba(7, 13, 20, 0.35)",
        lift: "0 24px 50px -28px rgba(26, 79, 196, 0.55)",
        panel: "0 36px 80px -36px rgba(7, 13, 20, 0.65)",
      },
      keyframes: {
        sheen: {
          "0%": { transform: "translateX(-120%) skewX(-12deg)" },
          "100%": { transform: "translateX(220%) skewX(-12deg)" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "zoom-in": {
          "0%": { opacity: "0", transform: "scale(0.97)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "slide-from-right": {
          "0%": { opacity: "0", transform: "translateX(28px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-from-left": {
          "0%": { opacity: "0", transform: "translateX(-28px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-down": {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        sheen: "sheen 5.5s ease-in-out infinite",
        rise: "rise 0.7s ease-out both",
        "fade-in": "fade-in 0.2s ease-out both",
        "zoom-in": "zoom-in 0.25s cubic-bezier(0.16, 1, 0.3, 1) both",
        "slide-from-right": "slide-from-right 0.28s cubic-bezier(0.16, 1, 0.3, 1) both",
        "slide-from-left": "slide-from-left 0.28s cubic-bezier(0.16, 1, 0.3, 1) both",
        "slide-down": "slide-down 0.22s cubic-bezier(0.16, 1, 0.3, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
