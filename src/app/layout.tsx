import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import "./globals.css";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MobileStickyCTA } from "@/components/mobile-sticky-cta";
import { StructuredData } from "@/components/structured-data";
import { organizationSchema, personSchema, websiteSchema } from "@/lib/seo";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://dominic-iliescu.ro"),
  title: {
    default: "Prof. Univ. Dr. Dominic Iliescu | Obstetrică-Ginecologie Craiova",
    template: "%s | Prof. Univ. Dr. Dominic Iliescu",
  },
  description:
    "Prof. Univ. Dr. Dominic Iliescu, obstetrică-ginecologie în Craiova. Expertiză în medicină materno-fetală, ecografie avansată, ginecologie și videocolposcopie.",
  applicationName: "Prof. Univ. Dr. Dominic Iliescu",
  category: "healthcare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className={`${manrope.variable} ${cormorant.variable} h-full scroll-smooth`}>
      <body className="min-h-full bg-[var(--color-background)] text-[var(--color-ink)]">
        <StructuredData data={[websiteSchema(), personSchema(), organizationSchema()]} />
        <div className="flex min-h-screen flex-col pb-24 md:pb-0">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <MobileStickyCTA />
        </div>
      </body>
    </html>
  );
}
