"use client";

import { useState } from "react";
import { services, site, whatsappUrl } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon } from "@/components/Icons";

const NOT_SURE = "Not sure — need advice";

// Instant-estimate form: three fields, zero backend. Submitting opens WhatsApp
// with a pre-filled message — it captures call-averse visitors who would never
// dial a number but will happily type three fields.
export function CTABand() {
  const [name, setName] = useState("");
  const [service, setService] = useState(services[0].name);
  const [area, setArea] = useState("");

  const message = `Hi ${site.name}! I'm ${name || "…"}${
    area ? ` (in ${area})` : ""
  }. I'd like a quote for ${service}. Please advise on next steps.`;

  return (
    <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-12 shadow-panel sm:px-12 sm:py-16">
      {/* Brand wash + technical grid, rather than a flat colour block. */}
      <span aria-hidden className="absolute inset-0 brand-gradient opacity-90" />
      <span aria-hidden className="absolute inset-0 pane-grid-dark opacity-70" />
      <span aria-hidden className="absolute inset-0 animate-sheen bg-white/15 blur-md" />

      <div className="relative text-center">
        <p className="font-mono text-[11px] uppercase tracking-eyebrow text-white/75">
          Free site visit
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Get a measured quote
        </h2>
        <p className="mx-auto mt-3 max-w-md text-white/90">
          We measure your glass, recommend the right film grade for its
          orientation, and put the price in writing — no obligation.
        </p>

        <form
          className="mx-auto mt-8 grid max-w-lg gap-3 text-left"
          action={`https://wa.me/${site.phone.whatsapp}`}
          method="get"
          onSubmit={(e) => {
            e.preventDefault();
            window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
          }}
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-white/80">
                Your name
              </span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Rohan"
                autoComplete="name"
                className="w-full rounded-xl border border-white/30 bg-white/95 px-4 py-3 text-sm text-ink placeholder:text-slate-muted focus-visible:ring-offset-0"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-white/80">
                Your area
              </span>
              <input
                type="text"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                placeholder="e.g. Andheri West"
                autoComplete="address-level2"
                className="w-full rounded-xl border border-white/30 bg-white/95 px-4 py-3 text-sm text-ink placeholder:text-slate-muted focus-visible:ring-offset-0"
              />
            </label>
          </div>
          <label className="block">
            <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-white/80">
              Film needed
            </span>
            {/* Options come from the service list so the two can never drift. */}
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full rounded-xl border border-white/30 bg-white/95 px-4 py-3 text-sm text-ink focus-visible:ring-offset-0"
            >
              {services.map((s) => (
                <option key={s.slug}>{s.name}</option>
              ))}
              <option>{NOT_SURE}</option>
            </select>
          </label>
          <button
            type="submit"
            className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-frost transition-colors hover:bg-ink-soft sm:text-base"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Get my free quote on WhatsApp
          </button>
        </form>

        <p className="mt-5 flex items-center justify-center gap-2 text-sm text-white/85">
          <PhoneIcon className="h-4 w-4" />
          Prefer to talk?{" "}
          <a
            href={`tel:${site.phone.tel}`}
            className="font-medium text-white underline underline-offset-4 hover:no-underline"
          >
            Call {site.phone.display}
          </a>
        </p>
      </div>
    </div>
  );
}
