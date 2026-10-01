import Link from "next/link";
import { site, services, reviews, areas, featuredAreaSlugs } from "@/lib/site";
import { Section, Eyebrow } from "@/components/Section";
import { SpecReadout } from "@/components/SpecReadout";
import { ServiceCard } from "@/components/ServiceCard";
import { ReviewCard } from "@/components/ReviewCard";
import { CTABand } from "@/components/CTABand";

// A representative spread rather than the whole list — /areas holds the rest.
const homeAreas = featuredAreaSlugs
  .map((slug) => areas.find((a) => a.slug === slug))
  .filter((a): a is NonNullable<typeof a> => Boolean(a));

export default function Home() {
  return (
    <>
      {/* HERO — opens on the most characteristic thing in this trade:
          light hitting glass, with the film's job stated as instrument specs. */}
      <Section className="pt-14 sm:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="animate-rise">
            <Eyebrow>Window film · Glass · Mirror — Andheri West</Eyebrow>
            <h1 className="mt-5 font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl">
              Command light,
              <br />
              heat, and privacy.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-muted">
              Precision-fitted window films for Mumbai homes, offices, and shopfronts —
              cooler rooms, sharper privacy, clearer views. Based in Andheri West, rated{" "}
              <span className="font-medium text-ink">5.0 across 24 reviews</span>.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`https://wa.me/${site.phone.whatsapp}?text=${encodeURIComponent("Hi! I'd like a free quote for window film.")}`}
                className="rounded-full bg-ink px-6 py-3 text-center text-sm font-medium text-frost transition-colors hover:bg-glass-deep"
              >
                Get a free quote on WhatsApp
              </a>
              <a
                href={`tel:${site.phone.tel}`}
                className="rounded-full border border-ink/15 px-6 py-3 text-center text-sm font-medium text-ink transition-colors hover:border-glass hover:text-glass-deep"
              >
                Call {site.phone.display}
              </a>
            </div>
            {/* Micro-trust row — proof at the decision moment, not a scroll away. */}
            <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-muted">
              <span className="font-medium text-ink">★★★★★ 5.0</span>
              <span aria-hidden>·</span>
              <Link href="/reviews" className="hover:text-glass-deep hover:underline">
                24 Google reviews
              </Link>
              <span aria-hidden>·</span>
              <span>10+ yrs experience</span>
            </p>
            <Link
              href="/services"
              className="mt-3 inline-block text-sm font-medium text-glass-deep hover:underline"
            >
              Browse all films →
            </Link>
          </div>

          {/* Frosted glass panel — the signature surface. */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl light-gradient p-1.5 shadow-[0_30px_70px_-30px_rgba(10,92,87,0.6)]">
              <div className="absolute inset-0 animate-sheen bg-white/25 blur-md" />
              <div className="relative rounded-[1.35rem] bg-ink/90 p-7 backdrop-blur">
                <p className="font-mono text-[11px] uppercase tracking-eyebrow text-glass">
                  Sun control · performance
                </p>
                <p className="mt-4 font-display text-2xl font-semibold text-frost">
                  What the film blocks
                </p>
                <div className="mt-6">
                  <SpecReadout
                    tone="dark"
                    specs={[
                      { label: "UV rays", value: "99%" },
                      { label: "Heat", value: "78%" },
                      { label: "Glare", value: "90%" },
                    ]}
                  />
                </div>
                <p className="mt-6 text-sm leading-relaxed text-slate-mute2">
                  Same daylight, same view — without the heat, fading, and glare that
                  west-facing Mumbai glass lets in.
                </p>
                <Link
                  href="/services/sun-control-film"
                  className="mt-4 inline-block text-sm font-medium text-glass transition-colors hover:text-frost hover:underline"
                >
                  See how sun control film works →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Trust strip */}
      <Section className="mt-16">
        <div className="glass-edge w-full" />
        <div className="grid grid-cols-2 gap-6 py-8 text-center sm:grid-cols-4">
          {[
            { k: "5.0 ★", v: "Google rating", href: "/reviews" },
            { k: "24", v: "Verified reviews", href: "/reviews" },
            { k: "10+ yrs", v: "Fitting glass film" },
            { k: "Free", v: "Site measurement" },
          ].map((s) =>
            s.href ? (
              <Link key={s.v} href={s.href} className="transition-colors hover:text-glass-deep">
                <p className="font-display text-2xl font-semibold text-ink">{s.k}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-slate-muted">{s.v}</p>
              </Link>
            ) : (
              <div key={s.v}>
                <p className="font-display text-2xl font-semibold text-ink">{s.k}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-slate-muted">{s.v}</p>
              </div>
            )
          )}
        </div>
        <div className="glass-edge w-full" />
      </Section>

      {/* Services */}
      <Section className="mt-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <Eyebrow>What we fit</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              Films for every pane of glass
            </h2>
          </div>
          <Link href="/services" className="hidden text-sm font-medium text-glass-deep hover:underline sm:block">
            All services →
          </Link>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} s={s} />
          ))}
        </div>
      </Section>

      {/* Reviews */}
      <Section className="mt-24">
        <div className="text-center">
          <Eyebrow>Rated 5.0 on Google</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            What Mumbai says about the work
          </h2>
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
        <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
          Serving Mumbai, Thane &amp; Navi Mumbai
        </h2>
        <p className="mt-4 max-w-xl text-slate-muted">
          Based in Andheri West, covering {areas.length} localities from Colaba
          to Borivali and out across the eastern suburbs.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {homeAreas.map((a) => (
            <Link
              key={a.slug}
              href={`/areas/${a.slug}`}
              className="rounded-full border border-frost-deep bg-white/60 px-5 py-2.5 text-sm text-ink transition-colors hover:border-glass hover:text-glass-deep"
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
