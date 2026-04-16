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
  variant?: "metric" | "title";
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
    variant: "metric",
  },
  {
    value: "Premiul Academiei Române",
    label: "Premiul „Daniel Danielopolu” în 2025",
    variant: "title",
  },
  {
    value: "Premiul Congresului Mondial ISUOG",
    label: "“Ecografia în travaliul la termen şi pre-termen (Ultrasound in term and preterm labour)”",
    variant: "title",
  },
  {
    value: "2 brevete ",
    label: "în inovare medicală și inteligență artificială",
    variant: "metric",
  },
  {
    value: "34 ",
    label: "cursuri de formare universitară și postuniversitară",
    variant: "metric",
  },
  {
    value: "50+ — articole ISI ca autor principal",
    label: "108 articole ISI în total, 349 Alte Volume de rezumate cu ISBN / ISSN",
  },
  {
    value: "792+",
    label: "citări ISI",
    variant: "metric",
  },
  {
    value: "1712 citări Google scholar",
    label: "h-index 22, i10-index 50",
    variant: "title",
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
              description="În alegerea unui medic obstetrician-ginecolog, experiența clinică este importantă. La fel de importantă este însă capacitatea de a analiza corect fiecare situație, de a diferenția esențialul de detaliile secundare și de a construi o conduită medicală adaptată nevoilor reale ale fiecărei paciente. Un act medical de calitate înseamnă nu doar investigații și tratamente, ci și judecată clinică, echilibru, claritate în comunicare și respect pentru contextul individual.
              Pentru multe paciente, încrederea apare atunci când lucrurile sunt explicate limpede, fără grabă și fără ambiguități. De aceea, o abordare medicală solidă presupune evaluare atentă, recomandări bine fundamentate și decizii luate cu rigoare, responsabilitate și actualizare profesională constantă. Mai ales în obstetrică și ginecologie, unde deciziile pot avea implicații importante asupra sănătății, fertilității, sarcinii sau calității vieții, este esențial ca fiecare pas să fie susținut de competență și discernământ.
              Activitatea medicală, universitară și științifică a Prof. Univ. Dr. Dominic Iliescu susține această abordare orientată spre claritate, diagnostic atent și conduită medicală bine fundamentată. Experiența clinică este completată de implicarea constantă în educația medicală și cercetarea de specialitate, ceea ce contribuie la o practică bazată pe standarde actuale, evaluare critică și atenție reală pentru detalii.
              Pentru pacientă, acest lucru se traduce printr-un parcurs medical mai clar, mai bine explicat și mai bine înțeles. Înseamnă investigații recomandate cu un scop precis, opțiuni prezentate onest, răspunsuri formulate clar și decizii construite pe argumente medicale solide. Înseamnă, de asemenea, o relație medicală bazată pe seriozitate, echilibru și încredere — mai ales în momentele în care este nevoie de siguranță, orientare și o evaluare atentă."
            />
            <p className="mt-6 text-base leading-8 text-[var(--color-muted)]">
              Activitatea medicală, universitară și științifică a Prof. Univ. Dr. Dominic Iliescu susține o abordare orientată spre claritate, diagnostic atent și conduită medicală bine fundamentată. Pentru multe paciente, asta înseamnă mai multă încredere într-un parcurs medical explicat limpede și adaptat contextului real.
            </p>
          </div>

          <div className="grid auto-rows-fr gap-4 lg:grid-cols-2">
            {aboutApproachStats.map((stat) => (
              <div
                key={stat.label}
                className="h-full rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 sm:p-6"
              >
                <div className="flex h-full flex-col gap-3">
                  <p
                    className={[
                      "font-display text-[var(--color-accent-strong)]",
                      stat.variant === "metric"
                        ? "max-w-[10ch] text-[2.65rem] leading-[0.92] tracking-[-0.05em] sm:text-[3rem]"
                        : "max-w-[11ch] text-[2rem] leading-[1.02] tracking-[-0.04em] sm:text-[2.35rem]",
                    ].join(" ")}
                  >
                    {stat.value}
                  </p>
                  <p className="mt-auto text-sm leading-6 text-[var(--color-muted)] sm:text-[0.95rem]">
                    {stat.label}
                  </p>
                </div>
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
