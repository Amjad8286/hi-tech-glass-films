"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { site, whatsappUrl } from "@/lib/site";
import { CloseIcon, MenuIcon, PhoneIcon, WhatsAppIcon } from "@/components/Icons";

/**
 * Menu for everything below the desktop breakpoint.
 *
 * The site previously had no mobile navigation at all — the desktop nav was
 * simply hidden, leaving the footer as the only way to reach any page from a
 * phone. Since most local-trade traffic is mobile, this is the primary nav.
 */
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const wrapRef = useRef<HTMLDivElement>(null);

  // The panel lives inside the persistent header, so it survives navigation
  // unless it is closed explicitly.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onPointerDown = (e: PointerEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <div ref={wrapRef} className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-frost-deep bg-white/70 text-ink transition-colors hover:border-glass hover:text-glass-deep"
      >
        {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
      </button>

      {open && (
        <div
          id="mobile-nav"
          className="absolute inset-x-0 top-full max-h-[calc(100dvh-8rem)] animate-slide-down overflow-y-auto border-b border-frost-deep bg-frost shadow-panel"
        >
          <nav aria-label="Mobile" className="mx-auto max-w-page px-5 py-4 sm:px-8">
            <ul className="divide-y divide-frost-deep">
              {site.nav.map((item) => {
                const active =
                  pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center justify-between py-3.5 text-[15px] font-medium transition-colors ${
                        active ? "text-glass-deep" : "text-ink hover:text-glass-deep"
                      }`}
                    >
                      {item.label}
                      <span aria-hidden className="text-slate-mute2">
                        →
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
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
                WhatsApp a quote
              </a>
            </div>

            <p className="mb-2 mt-4 text-xs leading-relaxed text-slate-muted">
              {site.address.full} · {site.hoursLabel}
            </p>
          </nav>
        </div>
      )}
    </div>
  );
}
