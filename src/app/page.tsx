import { Breadcrumbs } from "@/components/breadcrumbs";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { Hero } from "@/components/hero";
import { SectionHeading } from "@/components/section-heading";
import { StructuredData } from "@/components/structured-data";
import {
  authorityHighlights,
  bookingUrl,
  faqItems,
  featuredPricing,
  homeBookingServices,
  featuredServices,
  formatPrice,
} from "@/lib/content/site-content";
import { breadcrumbSchema, createPageMetadata, faqSchema } from "@/lib/seo";

type AboutApproachStat = {
  value: string;
  label: string;
  compact?: boolean;
};

export const metadata = createPageMetadata({
  title: "Acasă",
  description:
    "Prof. Univ. Dr. Dominic Iliescu, medic primar obstetrică-ginecologie în Craiova, cu expertiză în medicină materno-fetală, ecografie avansată și evaluări ginecologice specializate.",
  path: "/",
  keywords: [
    "Dominic Iliescu",
    "Dominic Iliescu Craiova",
    "Dr Dominic Iliescu",
    "ginecolog Craiova",
    "morfologie fetală Craiova",
  ],
});

const aboutApproachStats: AboutApproachStat[] = [
  {
    value: "22+",
    label: "ani de experiență în obstetrică-ginecologie",
    compact: true,
  },
  {
    value: "Premiul Academiei Române",
    label: "Premiul „Daniel Danielopolu” în 2025",
    compact: true,
  },
  {
    value: "Premiul Congresului Mondial ISUOG",
    label: "“Ecografia în travaliul la termen şi pre-termen (Ultrasound in term and preterm labour)”",
    compact: true,
  },
  {
    value: "2 brevete ",
    label: "în inovare medicală și inteligență artificială",
    compact: true,
  },
  {
    value: "34 ",
    label: "cursuri de formare universitară și postuniversitară",
    compact: true,
  },
  {
    value: "50+ — articole ISI ca autor principal",
    label: "108 articole ISI în total, 349 Alte Volume de rezumate cu ISBN / ISSN",
  },
  {
    value: "792+",
    label: "citări ISI",
    compact: true,
  },
  {
    value: "1712 citări Google scholar",
    label: "h-index 22, i10-index 50",
    compact: true,
  },
];

export default function HomePage() {
  return (
    <>
      <StructuredData data={[breadcrumbSchema("/", "Acasă"), faqSchema(faqItems)]} />
      <Hero />
      <Breadcrumbs items={[{ href: "/", label: "Acasă" }]} />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2rem] border border-[var(--color-border)] bg-white p-7 shadow-[0_24px_60px_rgba(15,35,42,0.06)] sm:p-10">
            <SectionHeading
              eyebrow="Despre abordare"
              title="Îngrijire medicală calmă, precisă și bine argumentată"
              description="În alegerea unui medic obstetrician-ginecolog, experiența clinică este importantă. La fel de importantă este și capacitatea de a evalua corect, de a explica limpede și de a lua decizii medicale bazate pe rigoare, actualizare profesională și responsabilitate."
            />
            <p className="mt-6 text-base leading-8 text-[var(--color-muted)]">
              Activitatea medicală, universitară și științifică a Prof. Univ. Dr. Dominic Iliescu susține o abordare orientată spre claritate, diagnostic atent și conduită medicală bine fundamentată. Pentru multe paciente, asta înseamnă mai multă încredere într-un parcurs medical explicat limpede și adaptat contextului real.
            </p>
          </div>

          <div className="grid auto-rows-fr gap-4 lg:grid-cols-2">
            {aboutApproachStats.map((stat) => (
              <div
                key={stat.label}
                className="flex h-full min-h-[10.5rem] flex-col justify-between rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
              >
                <p
                  className={[
                    "font-display leading-none text-[var(--color-accent-strong)]",
                    stat.compact ? "text-[2rem] tracking-[-0.03em] sm:text-[2.25rem]" : "text-5xl",
                  ].join(" ")}
                >
                  {stat.value}
                </p>
                <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Servicii recomandate"
            title="Evaluări frecvent solicitate"
            description="Serviciile sunt prezentate clar, cu prețuri vizibile și acces rapid către programare, pentru a scurta drumul dintre căutare și decizia de a merge mai departe."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {featuredServices.map((service) =>
              service ? (
                <article
                  key={service.name}
                  className="rounded-[2rem] border border-[var(--color-border)] bg-white p-6 shadow-[0_20px_55px_rgba(15,35,42,0.05)]"
                >
                  <h3 className="text-xl font-semibold text-[var(--color-ink)]">{service.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{service.description}</p>
                  <div className="mt-6 flex items-center justify-between gap-4">
                    <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">
                      {formatPrice(service.price)}
                    </span>
                    <ButtonLink href="/servicii" variant="ghost" className="px-0">
                      Vezi detalii
                    </ButtonLink>
                  </div>
                </article>
              ) : null
            )}
          </div>
          <div className="mt-8">
            <ButtonLink href="/servicii" variant="secondary">
              Vezi toate serviciile
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeading
              eyebrow="Tarife orientative"
              title="Tarife consultații și ecografii ginecologice în Craiova"
              description="Descoperă costurile principalelor servicii oferite de Prof. Univ. Dr. Dominic Iliescu, de la consultații ginecologice și ecografii ginecologice până la ecografii de sarcină și evaluări specializate."
            />
            <div className="mt-6 rounded-[2rem] border border-[var(--color-border)] bg-white p-6 shadow-[0_20px_55px_rgba(15,35,42,0.05)]">
              <div className="divide-y divide-[var(--color-border)]">
                {featuredPricing.map((service) =>
                  service ? (
                    <div key={service.name} className="flex items-center justify-between gap-4 py-4">
                      <p className="max-w-xl text-sm leading-7 text-[var(--color-ink)]">{service.name}</p>
                      <span className="shrink-0 text-sm font-semibold text-[var(--color-accent-strong)]">
                        {formatPrice(service.price)}
                      </span>
                    </div>
                  ) : null
                )}
              </div>
              <div className="mt-6">
                <ButtonLink href="/servicii" variant="ghost" className="px-0">
                  Consultă lista completă de tarife
                </ButtonLink>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-7 sm:p-10">
            <SectionHeading
              eyebrow="Autoritate și activitate academică"
              title="Practică medicală susținută de implicare universitară și științifică"
              description="Activitatea sa reunește practica clinică, formarea universitară și contribuția științifică în domenii precum obstetrica, ginecologia, medicina materno-fetală, ecografia avansată, patologia colului uterin, histeroscopia și evaluarea infertilității."
            />
            <div className="mt-8 grid gap-4">
              {authorityHighlights.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.75rem] border border-white/80 bg-white/80 p-5 shadow-[0_16px_32px_rgba(15,35,42,0.05)]"
                >
                  <h3 className="text-lg font-semibold text-[var(--color-ink)]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{item.body}</p>
                </article>
              ))}
            </div>
            <div className="mt-8">
              <ButtonLink href="/activitate-academica" variant="secondary">
                Descoperă activitatea academică
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="rounded-[2.5rem] border border-[var(--color-border)] bg-[var(--color-ink)] px-6 py-10 text-white shadow-[0_32px_90px_rgba(15,35,42,0.16)] sm:px-10 lg:px-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent-soft)]">
                Programare
              </p>
              <h2 className="mt-4 font-display text-5xl leading-none tracking-[-0.04em]">
                Programează o consultație ginecologică sau o ecografie în Craiova
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/74">
                Inițiază rapid programarea pentru consultații ginecologice, ecografii ginecologice, ecografii de sarcină și evaluări specializate oferite de Prof. Univ. Dr. Dominic Iliescu.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href={bookingUrl}>Programează-te</ButtonLink>
                <ButtonLink href="/servicii" variant="secondary" className="border-white/30 bg-white/8 text-white hover:border-white/60 hover:text-white">
                  Vezi serviciile
                </ButtonLink>
              </div>
            </div>

            <div className="rounded-[1.9rem] border border-white/12 bg-white/8 p-6 sm:p-7">
              <div className="max-w-xl">
                <p className="text-lg font-semibold">Servicii frecvent solicitate</p>
                <p className="mt-2 text-sm leading-7 text-white/68">
                  Acces rapid către cele mai solicitate servicii de ginecologie, obstetrică și medicină materno-fetală.
                </p>
              </div>
              <div className="mt-6 divide-y divide-white/10 rounded-[1.5rem] border border-white/10 bg-[rgba(255,255,255,0.04)]">
                {homeBookingServices.map((service) =>
                  service ? (
                    <div key={service.name} className="flex items-center justify-between gap-4 px-5 py-4">
                      <div>
                        <p className="text-sm font-semibold leading-7 text-white">{service.name}</p>
                        <p className="text-sm leading-7 text-white/58">{formatPrice(service.price)}</p>
                      </div>
                      <ButtonLink
                        href="/servicii"
                        variant="ghost"
                        className="shrink-0 px-0 text-white hover:text-[var(--color-accent-soft)]"
                      >
                        Detalii
                      </ButtonLink>
                    </div>
                  ) : null
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Întrebări frecvente"
            title="Repere utile înainte de programare"
            description="Răspunsuri scurte la întrebările care apar frecvent înaintea unei consultații sau a unei evaluări ecografice."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {faqItems.map((item) => (
              <article
                key={item.question}
                className="rounded-[2rem] border border-[var(--color-border)] bg-white p-6 shadow-[0_20px_55px_rgba(15,35,42,0.05)]"
              >
                <h3 className="text-lg font-semibold text-[var(--color-ink)]">{item.question}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{item.answer}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
