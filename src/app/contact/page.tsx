import type { Metadata } from "next";
import { mapsSearchUrl, site, whatsappUrl } from "@/lib/site";
import { Section, Eyebrow } from "@/components/Section";
import { CTABand } from "@/components/CTABand";
import { ClockIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact & Directions",
  description: `Call, WhatsApp or visit ${site.name} in ${site.address.locality}, ${site.address.city}. Free site visits for window film across Mumbai, Thane and Navi Mumbai.`,
  alternates: { canonical: "/contact" },
};

const mapsQuery = encodeURIComponent(`${site.name}, ${site.address.full}`);

const NEXT_STEPS = [
  "Tell us the rooms or glass areas and what the problem is.",
  "We fix a site visit — usually within a day or two, free either way.",
  "You get a written quote with the film grade, area and price per sq ft.",
];

export default function ContactPage() {
  return (
    <>
      <Section className="pt-14 sm:pt-20">
        <Eyebrow>Get in touch</Eyebrow>
        <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          Book a free site visit
        </h1>
        <p className="mt-5 max-w-xl text-lg text-slate-muted">
          Tell us your glass area and what you need — heat, privacy, safety or a
          fresh look — and we&apos;ll measure and quote, free of charge.
        </p>
      </Section>

      <Section className="mt-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="surface p-7">
            <dl className="space-y-6">
              <div>
                <dt className="eyebrow">Call or WhatsApp</dt>
                <dd className="mt-2">
                  <a
                    href={`tel:${site.phone.tel}`}
                    className="font-display text-3xl font-bold tracking-tight text-ink transition-colors hover:text-glass-deep"
                  >
                    {site.phone.display}
                  </a>
                </dd>
                <dd className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <a href={`tel:${site.phone.tel}`} className="btn-primary">
                    <PhoneIcon className="h-4 w-4" />
                    Call now
                  </a>
                  <a
                    href={whatsappUrl("Hi! I'd like a free site visit for window film.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-brand"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    WhatsApp
                  </a>
                </dd>
              </div>

              <div className="glass-edge w-full" />

              <div>
                <dt className="eyebrow">Address</dt>
                <dd className="mt-2 flex gap-2.5 text-[15px] leading-relaxed text-ink">
                  <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-glass-deep" />
                  <span>{site.address.full}</span>
                </dd>
                <dd className="mt-3 pl-[26px]">
                  <a
                    href={mapsSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-glass-deep hover:underline"
                  >
                    Get directions →
                  </a>
                </dd>
              </div>

              <div>
                <dt className="eyebrow">Hours</dt>
                <dd className="mt-2 flex gap-2.5 text-[15px] text-ink">
                  <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-glass-deep" />
                  <span>{site.hoursLabel}</span>
                </dd>
              </div>

              {site.email && (
                <div>
                  <dt className="eyebrow">Email</dt>
                  <dd className="mt-2 text-[15px]">
                    <a
                      href={`mailto:${site.email}`}
                      className="text-glass-deep hover:underline"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
              )}

              <div>
                <dt className="eyebrow">What happens next</dt>
                <dd className="mt-3">
                  <ol className="space-y-2.5 text-[15px] text-slate-muted">
                    {NEXT_STEPS.map((step, i) => (
                      <li key={step} className="flex gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-glass/10 font-mono text-[11px] font-medium text-glass-deep">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </dd>
              </div>
            </dl>
          </div>

          <div className="overflow-hidden rounded-2xl border border-frost-deep">
            <iframe
              title={`Map to ${site.name}, ${site.address.locality}`}
              className="h-full min-h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://maps.google.com/maps?q=${mapsQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
            />
          </div>
        </div>
      </Section>

      <Section className="mt-20">
        <CTABand />
      </Section>
    </>
  );
}
