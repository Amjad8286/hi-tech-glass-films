import Link from "next/link";
import { site, whatsappUrl } from "@/lib/site";
import { Logo } from "@/components/Logo";
import { MobileNav } from "@/components/MobileNav";
import { ClockIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/Icons";

export function Header() {
  return (
    <header className="sticky top-0 z-40">
      {/* Utility bar — keeps NAP and the phone number permanently on screen for
          desktop visitors. Hidden on small screens, where the sticky bottom
          call bar does the same job without costing vertical space. */}
      <div className="hidden bg-ink text-xs text-slate-mute2 md:block">
        <div className="mx-auto flex h-9 max-w-page items-center justify-between gap-6 px-5 sm:px-8">
          <p className="flex items-center gap-2">
            <PinIcon className="h-3.5 w-3.5 shrink-0 text-glass-light" />
            <span className="truncate">
              {site.address.locality}, {site.address.city} · free site visit across
              Mumbai, Thane &amp; Navi Mumbai
            </span>
          </p>
          <div className="flex shrink-0 items-center gap-5">
            <span className="hidden items-center gap-2 lg:flex">
              <ClockIcon className="h-3.5 w-3.5 text-glass-light" />
              {site.hoursLabel}
            </span>
            <a
              href={`tel:${site.phone.tel}`}
              className="flex items-center gap-2 font-medium text-frost transition-colors hover:text-glass-light"
            >
              <PhoneIcon className="h-3.5 w-3.5 text-glass-light" />
              {site.phone.display}
            </a>
          </div>
        </div>
      </div>

      {/* Main bar. `relative` anchors the mobile menu panel to its lower edge. */}
      <div className="relative border-b border-frost-deep/80 bg-frost/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-page items-center justify-between gap-4 px-5 sm:h-[4.5rem] sm:px-8">
          <Link
            href="/"
            aria-label={`${site.name} — home`}
            className="shrink-0 rounded-lg transition-opacity hover:opacity-90"
          >
            <Logo />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-ink/75 transition-colors hover:text-glass-deep"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href={whatsappUrl("Hi! I'd like a free quote for window film.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brand hidden px-4 py-2.5 md:inline-flex"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href={`tel:${site.phone.tel}`}
              className="btn-primary hidden px-4 py-2.5 sm:inline-flex"
            >
              <PhoneIcon className="h-4 w-4" />
              {site.phone.display}
            </a>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
