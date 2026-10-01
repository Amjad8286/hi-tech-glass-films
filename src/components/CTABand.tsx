"use client";

import { useState } from "react";
import { site } from "@/lib/site";

// Instant-estimate form: 3 fields, zero backend. Submitting opens WhatsApp
// with a pre-filled message — captures call-averse visitors who would never
// dial a number but will happily type three fields.
export function CTABand() {
  const [name, setName] = useState("");
  const [service, setService] = useState("Sun control film");
  const [area, setArea] = useState("");

  const waMessage = encodeURIComponent(
    `Hi Elegant Glass Films! I'm ${name || "…"}${area ? ` (in ${area})` : ""}. I'd like a quote for ${service}. Please advise on next steps.`
  );

  return (
    <div className="relative overflow-hidden rounded-3xl light-gradient px-6 py-12 text-center sm:px-12 sm:py-16">
      <div className="absolute inset-0 animate-sheen bg-white/20 blur-md" />
      <div className="relative">
        <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
          Book a free site visit
        </h2>
        <p className="mx-auto mt-3 max-w-md text-white/90">
          We measure, recommend the right film, and give you a clear quote — no obligation.
        </p>

        <form
          className="mx-auto mt-8 grid max-w-lg gap-3 text-left"
          action={`https://wa.me/${site.phone.whatsapp}`}
          method="get"
          onSubmit={(e) => {
            e.preventDefault();
            window.open(`https://wa.me/${site.phone.whatsapp}?text=${waMessage}`, "_blank");
          }}
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1 block text-xs font-medium uppercase tracking-wide text-white/80">
                Your name
              </span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Rohan"
                autoComplete="name"
                className="w-full rounded-xl border border-white/30 bg-white/95 px-4 py-3 text-sm text-ink placeholder:text-slate-muted focus:border-white focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-xs font-medium uppercase tracking-wide text-white/80">
                Your area
              </span>
              <input
                type="text"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                placeholder="e.g. Andheri West"
                autoComplete="address-level2"
                className="w-full rounded-xl border border-white/30 bg-white/95 px-4 py-3 text-sm text-ink placeholder:text-slate-muted focus:border-white focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </label>
          </div>
          <label className="block">
            <span className="mb-1 block text-xs font-medium uppercase tracking-wide text-white/80">
              Film needed
            </span>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full rounded-xl border border-white/30 bg-white/95 px-4 py-3 text-sm text-ink focus:border-white focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              <option>Sun control film</option>
              <option>One-way privacy film</option>
              <option>Frosted glass film</option>
              <option>Decorative glass film</option>
              <option>Safety &amp; security film</option>
              <option>UV protection film</option>
              <option>Office glass branding</option>
              <option>Car window tinting</option>
              <option>Glass &amp; mirror work</option>
              <option>Not sure — need advice</option>
            </select>
          </label>
          <button
            type="submit"
            className="mt-2 w-full rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-frost transition-colors hover:bg-ink-soft sm:text-base"
          >
            Get my free quote on WhatsApp →
          </button>
        </form>

        <p className="mt-5 text-sm text-white/80">
          Prefer to talk?{" "}
          <a href={`tel:${site.phone.tel}`} className="font-medium text-white underline underline-offset-4 hover:no-underline">
            Call {site.phone.display}
          </a>
        </p>
      </div>
    </div>
  );
}
