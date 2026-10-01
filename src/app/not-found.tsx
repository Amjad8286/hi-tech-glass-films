import Link from "next/link";
import { site } from "@/lib/site";
import { Section } from "@/components/Section";
import { PhoneIcon } from "@/components/Icons";

export default function NotFound() {
  return (
    <Section className="py-28 text-center">
      <p className="font-mono text-sm uppercase tracking-eyebrow text-glass-deep">404</p>
      <h1 className="mt-4 font-display text-4xl font-bold tracking-tight">
        This page is clear glass
      </h1>
      <p className="mt-3 text-slate-muted">
        There&apos;s nothing here — let&apos;s get you back.
      </p>
      <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
        <Link href="/" className="btn-primary">
          Back to home
        </Link>
        <Link href="/services" className="btn-ghost">
          Browse window films
        </Link>
      </div>
      <p className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-muted">
        <PhoneIcon className="h-4 w-4 text-glass-deep" />
        Or call {site.phone.display}
      </p>
    </Section>
  );
}
