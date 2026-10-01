# Hi-Tech Glass Films — Website

Marketing site for **Hi-Tech Glass Films**, a window-film and glass shop in
Andheri West, Mumbai. Built with **Next.js 14 (App Router) + TypeScript +
Tailwind CSS**, fully statically generated, and wired with structured data that
matches the Google Business Profile.

```
Hi-Tech Glass Films
84339 78255
Juhu Galli, Mahavi Darshan, Dhangar Wadi, Andheri West, Mumbai, Maharashtra 400058
```

## Tech stack

- **Next.js 14** (App Router, fully static / SSG — 80 pre-rendered routes)
- **TypeScript**
- **Tailwind CSS** with a project design-token layer (see below)
- **next/font** (self-hosted Sora · Inter · IBM Plex Mono — no layout shift)
- Generated **icon** and **1200×630 OG image** (`src/app/icon.tsx`,
  `src/app/opengraph-image.tsx`) — no static `og.png` needed
- Built-in **sitemap.xml** + **robots.txt** routes
- **JSON-LD**: `HomeAndConstructionBusiness`, `Service`, `FAQPage`, `Breadcrumb`
  (and `AggregateRating`/`Review`, once there is a rating to publish)

## Run it locally

```bash
npm install
npm run dev        # http://localhost:3000
```

Build for production:

```bash
npm run build
npm start
```

> `npm run build` downloads the Google fonts once at build time, so the build
> machine needs internet access (Vercel handles this automatically).
>
> `npm run lint` is wired up but ESLint has never been configured in this repo —
> running it drops into Next's interactive setup. Type safety is enforced by
> `npm run build`, which type-checks the whole project.

## Brand & design system

| Token | Value | Used for |
| --- | --- | --- |
| `ink` | `#070D14` | Graphite-navy ground: footer, dark bands, primary buttons |
| `frost` | `#F5F8FB` | Page background and text on dark |
| `glass` | `#2F75F2` | Azure brand signal — every action on the site |
| `glass-deep` | `#1A4FC4` | Brand text on light surfaces (6.2:1) |
| `glass-light` | `#7AB0FF` | Brand text on dark surfaces (8.7:1) |
| `ice` | `#59D2E6` | Highlight — gradients, the lit edge of a pane |
| `sun` | `#F3A93C` | Warmth: ratings, heat references |

Type: **Sora** for display (geometric, engineered — the "hi-tech" half of the
name), **Inter** for body, **IBM Plex Mono** for eyebrows and spec readouts.

Shared classes live in `src/app/globals.css`: `.brand-gradient`, `.pane-grid`,
`.frosted` / `.frosted-dark`, `.glass-edge`, `.surface`, `.eyebrow`, and the
button set `.btn-primary` / `.btn-brand` / `.btn-ghost` / `.btn-on-dark`.
Use these rather than re-typing utility strings — they are what keeps the
surfaces identical across 80 pages.

The logo (two panes of glass as the uprights of an "H", joined by a beam of
light) lives in `src/components/Logo.tsx`, and is rebuilt with plain divs in
`src/app/icon.tsx` for the favicon. **Keep those two in step.**

## What to change before going live

Everything business-specific lives in **`src/lib/site.ts`**.

1. **`site.url`** — set the real domain (canonical URLs, sitemap, schema).
2. **`site.rating`** — left as `null` deliberately. Every star claim on the site
   and the `aggregateRating` markup render from this field, so nothing is
   claimed until the Hi-Tech Glass Films Business Profile has reviews behind it.
   Set it to `{ value: "5.0", count: 24 }` once it does.
3. **`site.social`** — all `null`. Paste the real Google Business Profile,
   Instagram and Facebook URLs; they are then added to `sameAs` and the footer.
   Leave anything you don't have as `null`.
4. **`site.geo`** — approximate coordinates for Juhu Galli. Replace with the
   exact pin from the Business Profile.
5. **`site.email`** — `null`. Set it to show an email in the footer, on the
   contact page and in schema.
6. **`reviews`** — the testimonials carried over from the site's previous brand.
   Confirm or replace them.
7. **Hours** — currently Mon–Sat 9:30–20:00. Update if that is not how the shop
   actually operates.

## Project media

Real project photos and video are described in `src/lib/projectMedia.ts` and
served from `public/gallery/media/`. To re-import from a raw WhatsApp drop:

```bash
# put the originals in project-media/, then
./scripts/import-project-media.sh    # needs node + ffmpeg
```

`public/gallery/<category>/` holds licensed stock photography (Pexels) used for
the hero and supporting imagery.

## Deploy

Easiest is **Vercel** (zero config):

```bash
npm i -g vercel
vercel
```

Then add the custom domain in the Vercel dashboard. Cloudflare Pages or any Node
host works too (`npm run build` + `npm start`).

## SEO checklist after launch

- [ ] Submit `https://yourdomain/sitemap.xml` in Google Search Console
- [ ] Add the live website URL to the Google Business Profile
- [ ] Confirm NAP on the site exactly matches the Business Profile listing
- [ ] Validate structured data at https://search.google.com/test/rich-results
- [ ] Set `site.rating` once the profile has reviews, so the star markup ships

## Page structure

```
/                        Home — hero, services, process, work, reviews, areas
/services                All 11 services
/services/[slug]         Service pages + FAQ schema
/areas                   Area index, grouped by region (crawl path)
/areas/[slug]            55 locality pages for local "near me" search
/gallery                 Project photo/video gallery, filterable
/reviews                 Customer feedback (+ Review schema once rated)
/about                   About + NAP
/contact                 Call / WhatsApp / map / directions / quote form
```
