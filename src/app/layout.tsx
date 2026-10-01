import type { Metadata } from "next";
import { Sora, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { localBusinessSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCTA } from "@/components/MobileCTA";

// Sora carries the brand: geometric, engineered, confident at display sizes —
// the "hi-tech" half of the name. Inter does the reading, IBM Plex Mono does
// the instrument readouts and eyebrows.
const display = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const DESCRIPTION =
  "Sun control, frosted, one-way privacy, safety and decorative window film supplied and fitted across Mumbai. Based in Andheri West — free site visit and written quote.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Window Film & Glass, Andheri West, Mumbai`,
    template: `%s · ${site.name}`,
  },
  description: DESCRIPTION,
  applicationName: site.name,
  keywords: [
    "window film Mumbai",
    "glass film Andheri West",
    "sun control film Mumbai",
    "frosted glass film office",
    "one way privacy film",
    "safety and security window film",
    "window tinting Mumbai",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Window Film & Glass, Mumbai`,
    description: DESCRIPTION,
  },
  twitter: { card: "summary_large_image", title: site.name, description: DESCRIPTION },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <JsonLd data={localBusinessSchema()} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:text-sm focus:text-frost"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
