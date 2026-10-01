import type { Metadata } from "next";
import { mapsSearchUrl, reviews, site } from "@/lib/site";
import { Section, Eyebrow } from "@/components/Section";
import { ReviewCard } from "@/components/ReviewCard";
import { CTABand } from "@/components/CTABand";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: site.rating
    ? `Reviews — ${site.rating.value} ★ on Google`
    : "Customer Reviews & Feedback",
  description: `What Mumbai customers say about ${site.name} — window film, frosted glass, privacy and safety film fitted across the city.`,
  alternates: { canonical: "/reviews" },
};

/**
 * Review markup is emitted only when `site.rating` is set, i.e. when there is a
 * Business Profile rating behind it. Publishing an aggregateRating a profile
 * cannot back up is a structured-data violation — see the note in site.ts.
 */
const reviewSchema = site.rating
  ? {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${site.url}/#business`,
      name: site.name,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: site.rating.value,
        reviewCount: site.rating.count,
      },
      review: reviews.map((r) => ({
        "@type": "Review",
        author: { "@type": "Person", name: r.name },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: r.text,
      })),
    }
  : null;

export default function ReviewsPage() {
  const googleUrl = site.social.google ?? mapsSearchUrl;

  return (
    <>
      {reviewSchema && <JsonLd data={reviewSchema} />}

      <Section className="pt-14 text-center sm:pt-20">
        <Eyebrow>Reviews</Eyebrow>
        <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          {site.rating
            ? `Rated ${site.rating.value} ★ across ${site.rating.count} Google reviews`
            : "What Mumbai customers say about the work"}
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-slate-muted">
          We let the work speak. Here is a sample of the feedback left after
          window film, frosted glass and privacy film jobs across the city.
        </p>
        <a
          href={googleUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost mt-7"
        >
          {site.social.google ? "Read all reviews on Google →" : "Find us on Google Maps →"}
        </a>
      </Section>

      <Section className="mt-12">
        <div className="grid gap-5 sm:grid-cols-2">
          {reviews.map((r) => (
            <ReviewCard key={r.name} {...r} />
          ))}
        </div>
      </Section>

      <Section className="mt-24">
        <CTABand />
      </Section>
    </>
  );
}
