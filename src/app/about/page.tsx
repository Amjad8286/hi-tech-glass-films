import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { areas, mapsSearchUrl, services, site } from "@/lib/site";
import { Section, Eyebrow } from "@/components/Section";
import { CTABand } from "@/components/CTABand";
import { CheckIcon, ClockIcon, PhoneIcon, PinIcon } from "@/components/Icons";

export const metadata: Metadata = {
  // Brand omitted — the root layout's title template appends it.
  title: "About Us — Window Film Fitters in Andheri West",
  description: `${site.name} supplies and installs sun control, frosted, privacy, safety and decorative window film across Mumbai, Thane and Navi Mumbai from a base in Andheri West.`,
  alternates: { canonical: "/about" },
};

const PRINCIPLES = [
  {
    title: "Measured, not estimated",
    body: "Every quote follows a site visit. We measure each pane, note which way it faces and tell you what the film will and will not do about it.",
  },
  {
    title: "The right grade, not the dearest",
    body: "A west-facing living room and a street-facing cabin need different films. We specify for the problem in front of us rather than selling one product into every job.",
  },
  {
    title: "Finished properly",
    body: "Prepped surfaces, wet application, full squeegee-off. An optically flat, bubble-free lay is the whole difference between film that lasts a decade and film that lifts in a year.",
  },
  {
    title: "Nothing left behind",
    body: "Floors protected, offcuts bagged, glass cleaned down before we leave. Most residential jobs are done inside a day with the room usable that evening.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Section className="pt-14 sm:pt-20">
        <Eyebrow>About us</Eyebrow>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          A Mumbai glass-film shop built on clean, honest work
        </h1>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5 text-lg leading-relaxed text-slate-muted">
            <p>
              {site.name} supplies and installs window film across Mumbai, Thane
              and Navi Mumbai. We work out of {site.address.locality} and cover
              homes, offices, clinics, showrooms and shopfronts — from a single
              bedroom window to a full commercial fit-out.
            </p>
            <p>
              The range runs to {services.length} film types: sun control for
              heat and glare, one-way and frosted film for privacy, safety and
              security film for glass that people walk into, UV film that stops
              interiors fading, decorative and branded film for offices — plus
              toughened glass and mirror work when the job needs the glass
              changed rather than treated.
            </p>
            <p>
              Our approach is simple: measure properly, recommend the film that
              actually suits your glass and your problem, and finish the job
              cleanly. The site visit and the written quote cost nothing, and
              there is no obligation at the end of them.
            </p>
            <p>
              <Link href="/gallery" className="font-medium text-glass-deep hover:underline">
                See recent projects →
              </Link>
            </p>
          </div>

          <aside className="surface h-fit p-7">
            <p className="eyebrow">Visit or call</p>
            <address className="mt-4 space-y-3 text-sm not-italic">
              <p className="flex gap-2.5 text-ink">
                <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-glass-deep" />
                <span className="leading-relaxed">{site.address.full}</span>
              </p>
              <p className="flex gap-2.5 text-ink">
                <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-glass-deep" />
                <span>{site.hoursLabel}</span>
              </p>
              <p className="flex gap-2.5">
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-glass-deep" />
                <a
                  href={`tel:${site.phone.tel}`}
                  className="font-medium text-glass-deep hover:underline"
                >
                  {site.phone.display}
                </a>
              </p>
            </address>

            <div className="glass-edge my-5 w-full" />

            <dl className="space-y-3 text-sm">
              <div>
                <dt className="text-slate-muted">Services</dt>
                <dd className="text-ink">{services.length} window film & glass services</dd>
              </div>
              <div>
                <dt className="text-slate-muted">Coverage</dt>
                <dd className="text-ink">
                  {areas.length} areas across Mumbai, Thane & Navi Mumbai
                </dd>
              </div>
              {site.rating && (
                <div>
                  <dt className="text-slate-muted">Rating</dt>
                  <dd className="text-ink">
                    {site.rating.value} ★ · {site.rating.count} Google reviews
                  </dd>
                </div>
              )}
            </dl>

            <a
              href={mapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 w-full"
            >
              Get directions
            </a>
          </aside>
        </div>
      </Section>

      <Section className="mt-20">
        <div className="relative overflow-hidden rounded-3xl border border-frost-deep">
          <div className="relative aspect-[21/9] min-h-[200px]">
            <Image
              src="/gallery/frosted/frosted-1.jpg"
              alt="Daylight diffusing through textured frosted window film"
              fill
              sizes="(min-width: 1180px) 1116px, 100vw"
              className="object-cover"
            />
          </div>
          <span
            aria-hidden
            className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/50 to-transparent"
          />
          <div className="absolute inset-0 flex items-center">
            <p className="max-w-md px-6 font-display text-xl font-semibold leading-snug text-frost sm:px-10 sm:text-2xl">
              Film is only as good as the hands that lay it.
            </p>
          </div>
        </div>
      </Section>

      <Section className="mt-20">
        <Eyebrow>How we work</Eyebrow>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Four things we don&apos;t compromise on
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {PRINCIPLES.map((p) => (
            <div key={p.title} className="surface p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-glass/10 text-glass-deep">
                <CheckIcon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">{p.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="mt-24">
        <CTABand />
      </Section>
    </>
  );
}
