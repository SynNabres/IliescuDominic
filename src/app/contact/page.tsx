import { Breadcrumbs } from "@/components/breadcrumbs";
import { ButtonLink } from "@/components/button-link";
import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { StructuredData } from "@/components/structured-data";
import {
  bookingUrl,
  contactActions,
  contactIntro,
  contactLocations,
  primaryPhone,
  secondaryPhone,
  secondaryPhoneHref,
  siteData,
} from "@/lib/content/site-content";
import { breadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Date de contact, program, locații, WhatsApp și formular de solicitare pentru Prof. Univ. Dr. Dominic Iliescu în Craiova.",
  path: "/contact",
  keywords: ["contact Dominic Iliescu", "programare ginecolog Craiova", "WhatsApp ginecolog Craiova"],
});

export default function ContactPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema("/contact", "Contact")} />
      <Breadcrumbs
        items={[
          { href: "/", label: "Acasă" },
          { href: "/contact", label: "Contact" },
        ]}
      />

      <section className="py-12 sm:py-16">
        <Container className="grid gap-8 lg:grid-cols-[1fr_0.92fr]">
          <div>
            <SectionHeading
              eyebrow="Contact și programare"
              title="Canale clare pentru programare și confirmare"
              description={contactIntro}
            />
          </div>
          <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
            <p className="text-sm leading-7 text-[var(--color-muted)]">
              Pentru programările care necesită reacție rapidă, apelul și WhatsApp sunt cele mai directe opțiuni. Formularul rămâne util când dorești să trimiți mai mult context înainte de confirmare.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href={bookingUrl}>Programează-te</ButtonLink>
              <ButtonLink href="/servicii" variant="secondary">
                Vezi serviciile
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-12 sm:pb-16">
        <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-[var(--color-border)] bg-white p-6 shadow-[0_20px_55px_rgba(15,35,42,0.05)] sm:p-8">
              <h2 className="font-display text-4xl leading-none tracking-[-0.03em] text-[var(--color-ink)]">
                Date rapide de contact
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--color-muted)]">
                <p>
                  <span className="font-semibold text-[var(--color-ink)]">Telefon principal:</span> {primaryPhone}
                </p>
                <p>
                  <span className="font-semibold text-[var(--color-ink)]">Telefon secundar:</span>{" "}
                  <a href={secondaryPhoneHref} className="transition hover:text-[var(--color-accent-strong)]">
                    {secondaryPhone}
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-[var(--color-ink)]">Email:</span> {siteData.contact.email}
                </p>
                <p>
                  <span className="font-semibold text-[var(--color-ink)]">Program:</span> {siteData.contact.hours}
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              {contactActions.map((action) => (
                <a
                  key={action.label}
                  href={action.href}
                  target={action.href.startsWith("http") ? "_blank" : undefined}
                  rel={action.href.startsWith("http") ? "noreferrer" : undefined}
                  className="rounded-[1.8rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition hover:border-[var(--color-accent)]"
                >
                  <p className="text-base font-semibold text-[var(--color-ink)]">{action.label}</p>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{action.helper}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              {contactLocations.map((location) => (
                <article
                  key={location.label}
                  className="rounded-[2rem] border border-[var(--color-border)] bg-white p-6 shadow-[0_20px_55px_rgba(15,35,42,0.05)]"
                >
                  <h3 className="text-lg font-semibold text-[var(--color-ink)]">{location.label}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{location.address}</p>
                  <a
                    href={location.mapsHref}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex text-sm font-semibold text-[var(--color-accent-strong)] transition hover:text-[var(--color-accent)]"
                  >
                    Deschide în hartă
                  </a>
                </article>
              ))}
            </div>

            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
