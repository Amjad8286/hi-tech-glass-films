import Link from "next/link";
import {
  areas,
  featuredAreaSlugs,
  mapsSearchUrl,
  services,
  site,
  whatsappUrl,
} from "@/lib/site";
import { Logo } from "@/components/Logo";
import { ClockIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/Icons";

// The full area list is far too long for a footer — link the highest-intent
// ones and send the rest through /areas.
const footerAreas = featuredAreaSlugs
  .map((slug) => areas.find((a) => a.slug === slug))
  .filter((a): a is NonNullable<typeof a> => Boolean(a));

const socialLinks = [
  { label: "Google Business Profile", href: site.social.google },
  { label: "Instagram", href: site.social.instagram },
  { label: "Facebook", href: site.social.facebook },
].filter((s): s is { label: string; href: string } => Boolean(s.href));

export function Footer() {
  return (
    <footer className="mt-24 border-t border-ink-line bg-ink text-frost">
      {/* Closing call to action — the last thing on every page. */}
      <div className="border-b border-ink-line pane-grid-dark">
        <div className="mx-auto flex max-w-page flex-col gap-6 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Free site visit. Written quote. No obligation.
            </p>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-mute2">
              Tell us the glass and the problem — heat, glare, privacy, safety or
              a new look — and we&apos;ll measure, recommend the right film grade
              and price it in writing.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <a href={`tel:${site.phone.tel}`} className="btn-brand">
              <PhoneIcon className="h-4 w-4" />
              {site.phone.display}
            </a>
            <a
              href={whatsappUrl("Hi! I'd like a free site visit for window film.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-on-dark"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp us
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-page gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1fr_0.8fr]">
        <div>
          <Logo tone="dark" showStrapline={false} />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-mute2">
            {site.tagline} Supplied and fitted by our own team from {site.address.locality}.
          </p>

          <address className="mt-6 space-y-3 text-sm not-italic">
            <p className="flex gap-2.5 text-slate-mute2">
              <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-glass-light" />
              <span>{site.address.full}</span>
            </p>
            <p className="flex gap-2.5 text-slate-mute2">
              <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-glass-light" />
              <span>{site.hoursLabel}</span>
            </p>
            <p className="flex gap-2.5">
              <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-glass-light" />
              <a
                href={`tel:${site.phone.tel}`}
                className="font-medium text-frost transition-colors hover:text-glass-light"
              >
                {site.phone.display}
              </a>
            </p>
            {site.email && (
              <p className="pl-[26px]">
                <a
                  href={`mailto:${site.email}`}
                  className="text-slate-mute2 transition-colors hover:text-frost"
                >
                  {site.email}
                </a>
              </p>
            )}
          </address>

          <a
            href={mapsSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block text-sm font-medium text-glass-light hover:underline"
          >
            Get directions →
          </a>
        </div>

        <div>
          <p className="eyebrow text-glass-light">Services</p>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-slate-mute2 transition-colors hover:text-frost"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-glass-light">Areas we serve</p>
          <ul className="mt-4 space-y-2 text-sm">
            {footerAreas.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/areas/${a.slug}`}
                  className="text-slate-mute2 transition-colors hover:text-frost"
                >
                  {a.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/areas"
                className="font-medium text-frost transition-colors hover:text-glass-light"
              >
                All {areas.length} areas →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-glass-light">Company</p>
          <ul className="mt-4 space-y-2 text-sm">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-slate-mute2 transition-colors hover:text-frost"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {socialLinks.length > 0 && (
            <>
              <p className="eyebrow mt-8 text-glass-light">Find us</p>
              <ul className="mt-4 space-y-2 text-sm">
                {socialLinks.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-mute2 transition-colors hover:text-frost"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>

      <div className="border-t border-ink-line">
        {/* Extra bottom padding keeps the dark footer running under the sticky
            mobile call bar instead of leaving a pale strip behind it. */}
        <div className="mx-auto flex max-w-page flex-col gap-2 px-5 pb-[5.25rem] pt-6 text-xs text-slate-mute2 sm:flex-row sm:items-center sm:justify-between sm:px-8 md:pb-6">
          <p>
            © {new Date().getFullYear()} {site.legalName}. {site.address.locality},{" "}
            {site.address.city}.
          </p>
          <p>
            {site.rating
              ? `Rated ${site.rating.value} ★ across ${site.rating.count} Google reviews.`
              : `Window film supply & installation · ${services.length} film services · ${areas.length} areas covered.`}
          </p>
        </div>
      </div>
    </footer>
  );
}
