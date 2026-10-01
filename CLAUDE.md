# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build + full type-check (requires internet — fetches Google Fonts once)
npm start        # serve the production build
```

`npm run lint` exists but ESLint has never been configured here — it drops into
Next's interactive setup. **`npm run build` is the real gate**: it type-checks
the whole project. There is no test suite.

## Architecture

This is a fully static Next.js 14 App Router site for a local business (Hi-Tech Glass Films, Andheri West, Mumbai). All pages are SSG — there is no runtime server or database.

### Single source of truth: `src/lib/site.ts`

All business data lives here: NAP (name/address/phone), hours, `nav[]`, `services[]`, `areas[]`, and `reviews[]`. **Keep NAP identical to the Google Business Profile** — it feeds the JSON-LD schema and the sitemap, so a mismatch hurts local SEO. When adding or changing content (new service, updated hours, new review), this is the only file to edit.

It also exports `mapsSearchUrl` and `whatsappUrl(message?)`. Build phone and map
links from those rather than hand-writing `wa.me` URLs in a page.

**Nullable claim fields.** `site.rating`, `site.email` and every entry in
`site.social` are typed nullable and ship as `null`. This is deliberate, not an
oversight:

- `site.rating` drives every star/review-count claim in the UI **and** the
  `aggregateRating` in `localBusinessSchema` and on `/reviews`. Publishing a
  rating the Business Profile cannot back up is a Google structured-data
  violation. Components must keep rendering a sensible alternative when it is
  null — never hard-code "5.0" or a review count into copy.
- `site.social` nulls are filtered out of `sameAs` and the footer. Never point
  one at a network's homepage to fill the gap.

`areas[]` is the exception to "one file": the data is long enough to live in `src/lib/areas.ts` and is re-exported from `site.ts`, so `@/lib/site` remains the single import point. Import area data from `site.ts`, not `areas.ts`.

### Service areas: `src/lib/areas.ts`

~55 locality pages across Mumbai, Thane and Navi Mumbai. Each `Area` carries unique `blurb`, `intro`, `propertyMix`, `landmarks`, `postalCodes`, `topServices`, `nearby` and two area-specific `faqs`.

**These fields must stay genuinely distinct per area.** Google demotes sets of location pages that differ only by place name (its "doorway pages" guidance), so templated copy would actively harm rankings rather than just being lazy. Adding an area means writing real local detail for it.

Other conventions:
- `covers?: string[]` — used where a locality has no real East/West split (Churchgate, Marine Lines, Charni Road, Prabhadevi, and the Navi Mumbai nodes). One page targets both search terms instead of two thin ones.
- `isHub: true` — region landing pages (`mumbai`, `navi-mumbai`), excluded from region listings on `/areas`.
- `nearby[]` must reference valid slugs; it drives internal linking between area pages.
- `shortName?` — only for names long enough to push `<title>` past ~60 chars.
- `featuredAreaSlugs` in `site.ts` controls which areas appear on the home page and in the footer. Rendering all ~55 in the footer would read as link spam.

### Project media: `src/lib/projectMedia.ts`

Real project photos and video, served from `public/gallery/media/`. Every entry
was written after viewing the actual frame. `scripts/import-project-media.sh`
copies and renames originals out of a raw `project-media/` drop (gitignored) and
extracts video poster frames. `public/gallery/<category>/` holds licensed stock
photography (Pexels) used for the hero and supporting imagery.

### Structured data: `src/lib/schema.ts`

Exports functions (`localBusinessSchema`, `serviceSchema`, `areaServiceSchema`, `faqSchema`, `breadcrumbSchema`) that consume `site.ts` data and return JSON-LD objects.

`localBusinessSchema` is injected on **every** page via the root layout, so keep it small — its `areaServed` stays at region level deliberately. Per-locality `areaServed` belongs in `areaServiceSchema`, which is emitted once on its own area page.

Page `title` metadata must **not** include the brand: the root layout sets `title.template` to `%s · Hi-Tech Glass Films` and appends it. `openGraph.title` is the exception — it has no template inheritance, so it states the brand in full. These are injected via the `<JsonLd>` component. New page types that need structured data should add a helper here rather than inlining schema objects in page files.

### Dynamic routes

- `src/app/services/[slug]/page.tsx` — iterates `services[]` from `site.ts`; `generateStaticParams` returns all slugs.
- `src/app/areas/[slug]/page.tsx` — same pattern for `areas[]`.
- `src/app/areas/page.tsx` — the area index, grouped by `AreaRegion`. Required: with ~55 area pages, this is the crawl path that keeps them from being orphaned.

Adding a new service or area only requires adding an entry to the data file; the route pages, sitemap and index pick it up automatically.

### Design system

Tokens are in `tailwind.config.ts`; the doc comment there records the WCAG AA
contrast ratios for each text pairing. The rule of thumb: **`glass-deep` for
brand text on light surfaces, `glass-light` on dark.**

Shared classes live in `@layer components` in `src/app/globals.css`:
`.brand-gradient`, `.pane-grid` / `.pane-grid-dark`, `.frosted` /
`.frosted-dark`, `.glass-edge`, `.surface`, `.eyebrow`, and the button set
`.btn-primary` / `.btn-brand` / `.btn-ghost` / `.btn-on-dark`. Use these instead
of re-typing utility strings — they are what keeps surfaces identical across 80
pages. Focus rings are set once on `:focus-visible` in `@layer base`.

### Components (`src/components/`)

Shared UI only. `Header` + `MobileNav` (the mobile menu is the only navigation below `lg`, so don't remove it), `Footer`, `MobileCTA` (sticky call/WhatsApp bar on mobile — the footer's bottom row carries matching padding so the dark background runs underneath it), `Section`, `Logo` / `LogoMark`, `Icons` (inline SVG set, including `ServiceIcon` keyed by service slug), `ServiceCard`, `ReviewCard`, `SpecReadout`, `CTABand`, `ProjectMediaGallery` + `MediaLightbox`, `JsonLd`.

No state management library; everything is a server component except `MobileNav`, `CTABand`, `ProjectMediaGallery` and `MediaLightbox`.

`ServiceIcon` and `SERVICE_AUDIENCE` in `ServiceCard` are keyed by **service slug** — keep them in step with `services[]` or cards silently fall back to a generic icon.

### Fonts

Three self-hosted Google Fonts loaded via `next/font`: Sora (display/headings), Inter (body), IBM Plex Mono (eyebrows and spec readouts). CSS variables `--font-display`, `--font-body`, `--font-mono` are set on `<html>` in `layout.tsx` and referenced in Tailwind config.

### SEO / meta

- `src/app/sitemap.ts` and `src/app/robots.ts` — auto-generated from `site.url`
- `src/app/layout.tsx` — root `<Metadata>` with OG tags; per-page metadata is defined in each `page.tsx`
- `src/app/icon.tsx` and `src/app/opengraph-image.tsx` generate the favicon and the 1200×630 share card at build time. The icon rebuilds the `Logo` mark with plain divs because Satori cannot take the SVG — **keep the two in step.**
- Canonical URL and `metadataBase` derive from `site.url` — update that before going live

### Pre-launch checklist

- Set `site.url` to the real domain
- Set `site.social.google` to the real Google Business Profile URL
- Set `site.geo` from the Business Profile map pin (currently approximate)
- Confirm or replace the `reviews` carried over from the previous brand
- Set `site.rating` once the profile has verifiable reviews
- Submit sitemap to Google Search Console
