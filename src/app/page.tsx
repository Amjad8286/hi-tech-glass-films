import Image from "next/image";
import Link from "next/link";
import { areas, featuredAreaSlugs, reviews, services, site, whatsappUrl } from "@/lib/site";
import { projectMedia, type ProjectMediaCategory } from "@/lib/projectMedia";
import { Section, Eyebrow } from "@/components/Section";
import { SpecReadout } from "@/components/SpecReadout";
import { ServiceCard } from "@/components/ServiceCard";
import { ReviewCard } from "@/components/ReviewCard";
import { CTABand } from "@/components/CTABand";
import { CheckIcon, PhoneIcon, WhatsAppIcon } from "@/components/Icons";

// A representative spread rather than the whole list — /areas holds the rest.
const homeAreas = featuredAreaSlugs
  .map((slug) => areas.find((a) => a.slug === slug))
  .filter((a): a is NonNullable<typeof a> => Boolean(a));

// One still from each of four different categories, so the strip shows range
// rather than four versions of the same job. Driven off the gallery data, so
// it keeps working as the shot library grows.
const FEATURED_CATEGORIES: ProjectMediaCategory[] = [
  "Frosted Glass Films",
  "Decorative Films",
  "Sun Control Films",
  "Branded Graphics & Signage",
];
const featuredWork = FEATURED_CATEGORIES.map((category) =>
  projectMedia.find((m) => m.category === category && m.mediaType === "image"),
).filter((m): m is NonNullable<typeof m> => Boolean(m));

const HERO_PROOF = [
  "Free site visit",
  "Written quote",
  "Homes & commercial",
  "Warranty-backed film",
];

const PROCESS = [
  {
    title: "Free site visit",
    body: "We measure every pane, check which way it faces and look at what the room actually suffers from — heat, glare, overlooking or safety.",
  },
  {
    title: "Film matched to the glass",
    body: "Grade chosen for your glazing and orientation, not guesswork. You see the sample against your own glass before anything is ordered.",
  },
  {
    title: "Clean installation",
    body: "Surfaces prepped, wet application for accurate positioning, squeegeed off to an optically flat, bubble-free finish. We clear up after.",
  },
  {
    title: "Handover and care",
    body: "Cure guidance in writing, warranty paperwork with the invoice, and a number that still answers if anything needs looking at.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO — the trade's most characteristic image (sun on a glazed facade)
          next to the specs that say exactly what the film does about it. */}
      <div className="relative overflow-hidden">
        <span aria-hidden className="pointer-events-none absolute inset-0 pane-grid" />
        <span
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-glass/10 blur-3xl"
        />

        <Section className="relative pt-12 sm:pt-16 lg:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="animate-rise">
              <Eyebrow>
                Window film · Glass · Mirror — {site.address.locality}, {site.address.city}
              </Eyebrow>
              <h1 className="mt-5 font-display text-[2.5rem] font-bold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.4rem]">
                Window film,
                <br />
                engineered for
                <br />
                <span className="text-glass-deep">Mumbai glass.</span>
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-muted">
                Sun control, privacy, safety and decorative film — measured
                against your own glazing, matched to the way it faces, and fitted
                bubble-free by our own team from {site.address.locality}.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={`tel:${site.phone.tel}`} className="btn-primary">
                  <PhoneIcon className="h-4 w-4" />
                  Call {site.phone.display}
                </a>
                <a
                  href={whatsappUrl("Hi! I'd like a free quote for window film.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-brand"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp a free quote
                </a>
              </div>

              <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2.5 text-sm text-slate-muted">
                {HERO_PROOF.map((p) => (
                  <li key={p} className="flex items-center gap-1.5">
                    <CheckIcon className="h-4 w-4 shrink-0 text-glass-deep" />
                    {p}
                  </li>
                ))}
              </ul>

              <Link
                href="/services"
                className="mt-5 inline-block text-sm font-medium text-glass-deep hover:underline"
              >
                Browse all {services.length} film types →
              </Link>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-frost-deep shadow-panel">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/gallery/sun-control/sun-1.jpg"
                    alt="Sunlight striking the glazed facade of a modern building — the heat load sun control film is fitted to stop"
                    fill
                    priority
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <span
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-transparent"
                />
              </div>

              {/* Performance panel, overlapping the image — the film's job
                  stated as instrument readouts. */}
              <div className="relative z-10 mx-4 -mt-20 rounded-2xl frosted-dark p-6 shadow-panel sm:mx-8">
                <p className="font-mono text-[11px] uppercase tracking-eyebrow text-glass-light">
                  Sun control · typical performance
                </p>
                <div className="mt-4">
                  <SpecReadout
                    tone="dark"
                    specs={[
                      { label: "UV rays", value: "99%" },
                      { label: "Heat", value: "78%" },
                      { label: "Glare", value: "90%" },
                    ]}
                  />
                </div>
                <p className="mt-5 text-sm leading-relaxed text-slate-mute2">
                  Same daylight, same view — without the heat, fading and glare
                  that west-facing Mumbai glass lets through.
                </p>
                <Link
                  href="/services/sun-control-film"
                  className="mt-4 inline-block text-sm font-medium text-glass-light transition-colors hover:text-frost hover:underline"
                >
                  How sun control film works →
                </Link>
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* Capability strip — figures that come straight out of the site data. */}
      <Section className="mt-16">
        <div className="glass-edge w-full" />
        <div className="grid grid-cols-2 gap-6 py-8 text-center sm:grid-cols-4">
          {[
            { k: `${services.length}`, v: "Film services", href: "/services" },
            { k: `${areas.length}`, v: "Areas covered", href: "/areas" },
            { k: "Free", v: "Site measurement" },
            { k: "Written", v: "Quotes & warranty" },
          ].map((s) =>
            s.href ? (
              <Link key={s.v} href={s.href} className="transition-colors hover:text-glass-deep">
                <p className="font-display text-2xl font-bold text-ink">{s.k}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-slate-muted">{s.v}</p>
              </Link>
            ) : (
              <div key={s.v}>
                <p className="font-display text-2xl font-bold text-ink">{s.k}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-slate-muted">{s.v}</p>
              </div>
            ),
          )}
        </div>
        <div className="glass-edge w-full" />
      </Section>

      {/* Services */}
      <Section className="mt-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <Eyebrow>What we fit</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Films for every pane of glass
            </h2>
          </div>
          <Link
            href="/services"
            className="hidden shrink-0 text-sm font-medium text-glass-deep hover:underline sm:block"
          >
            All services →
          </Link>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} s={s} />
          ))}
        </div>
      </Section>

      {/* How we work — the dark band that breaks up the page and carries the
          part of the pitch that is about workmanship rather than product. */}
      <div className="relative mt-24 overflow-hidden bg-ink text-frost">
        <span aria-hidden className="absolute inset-0 pane-grid-dark" />
        <Section className="relative py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="eyebrow text-glass-light">How we work</p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                A fit you never have to think about again
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-slate-mute2">
                Most film that fails was never wrong on paper — it was the wrong
                grade for that glass, or it was laid onto a surface that was not
                properly prepped. We work the other way round.
              </p>
              <div className="relative mt-8 hidden overflow-hidden rounded-2xl border border-ink-line lg:block">
                <div className="relative aspect-[16/9]">
                  <Image
                    src="/gallery/frosted/frosted-1.jpg"
                    alt="Close detail of textured frosted film across a pane, lit from behind"
                    fill
                    sizes="(min-width: 1024px) 38vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <ol className="grid gap-5 sm:grid-cols-2">
              {PROCESS.map((step, i) => (
                <li
                  key={step.title}
                  className="rounded-2xl border border-ink-line bg-white/[0.03] p-6"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-glass/15 font-mono text-sm font-medium text-glass-light">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-mute2">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </Section>
      </div>

      {/* Recent work */}
      {featuredWork.length > 0 && (
        <Section className="mt-24">
          <div className="flex items-end justify-between gap-6">
            <div>
              <Eyebrow>Our work</Eyebrow>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Glass we&apos;ve treated across Mumbai
              </h2>
            </div>
            <Link
              href="/gallery"
              className="hidden shrink-0 text-sm font-medium text-glass-deep hover:underline sm:block"
            >
              Full gallery →
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredWork.map((item) => (
              <Link
                key={item.src}
                href="/gallery"
                className="group surface overflow-hidden transition-shadow hover:shadow-lift"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-frost-deep">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    loading="lazy"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <span className="eyebrow inline-block rounded-full bg-glass/10 px-2.5 py-0.5 text-[10px]">
                    {item.category}
                  </span>
                  <p className="mt-2 font-display text-[15px] font-semibold leading-snug text-ink">
                    {item.title}
                  </p>
                  <p className="mt-0.5 font-mono text-[11px] uppercase tracking-eyebrow text-slate-mute2">
                    {item.area}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <Link
            href="/gallery"
            className="mt-6 inline-block text-sm font-medium text-glass-deep hover:underline sm:hidden"
          >
            Full gallery →
          </Link>
        </Section>
      )}

      {/* Reviews */}
      <Section className="mt-24">
        <div className="text-center">
          <Eyebrow>Customer feedback</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            What Mumbai says about the work
          </h2>
          {site.rating && (
            <p className="mt-3 text-slate-muted">
              Rated {site.rating.value} ★ across {site.rating.count} Google reviews.
            </p>
          )}
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r) => (
            <ReviewCard key={r.name} {...r} />
          ))}
        </div>
      </Section>

      {/* Areas */}
      <Section className="mt-24">
        <Eyebrow>Where we work</Eyebrow>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Serving Mumbai, Thane &amp; Navi Mumbai
        </h2>
        <p className="mt-4 max-w-xl text-slate-muted">
          Based in {site.address.locality}, covering {areas.length} localities from
          Colaba to Borivali and out across the eastern suburbs.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {homeAreas.map((a) => (
            <Link
              key={a.slug}
              href={`/areas/${a.slug}`}
              className="rounded-full border border-frost-deep bg-white/70 px-5 py-2.5 text-sm text-ink transition-colors hover:border-glass hover:text-glass-deep"
            >
              {a.name}
            </Link>
          ))}
          <Link
            href="/areas"
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-frost transition-colors hover:bg-glass-deep"
          >
            All {areas.length} areas →
          </Link>
        </div>
      </Section>

      <Section className="mt-24">
        <CTABand />
      </Section>
    </>
  );
}
