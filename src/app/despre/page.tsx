import { Breadcrumbs } from "@/components/breadcrumbs";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { StructuredData } from "@/components/structured-data";
import {
  committeeHighlights,
  profileNarrative,
  publicationSignals,
  societyTags,
} from "@/lib/content/site-content";
import { breadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Despre",
  description:
    "Profil medical și academic al Prof. Univ. Dr. Dominic Iliescu: obstetrică-ginecologie, medicină materno-fetală, ecografie avansată și activitate științifică în Craiova.",
  path: "/despre",
  keywords: ["Prof. Univ. Dr. Dominic Iliescu", "obstetrică-ginecologie Craiova", "ecografie sarcină Craiova"],
});

export default function AboutPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema("/despre", "Despre")} />
      <Breadcrumbs
        items={[
          { href: "/", label: "Acasă" },
          { href: "/despre", label: "Despre" },
        ]}
      />

      <section className="py-12 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionHeading
              eyebrow="Profil"
              title="Un parcurs profesional construit între clinică, cercetare și educație medicală"
              description="Prof. Univ. Dr. Dominic Iliescu este medic primar obstetrică-ginecologie în Craiova, cu o activitate construită la intersecția dintre practica medicală, cercetare și educația universitară."
            />
            <div className="mt-8 space-y-6 text-base leading-8 text-[var(--color-muted)]">
              {profileNarrative.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
            <h2 className="font-display text-4xl leading-none tracking-[-0.03em] text-[var(--color-ink)]">
              Ce oferă această autoritate în relația cu pacienta
            </h2>
            <div className="mt-6 grid gap-4">
              {[
                {
                  title: "Experiență clinică solidă",
                  body: "Consultațiile și evaluările sunt susținute de ani de practică în obstetrică-ginecologie, inclusiv în contexte care necesită interpretare mai fină și urmărire atentă.",
                },
                {
                  title: "Rigoare academică",
                  body: "Activitatea universitară și științifică sprijină o abordare actualizată, atentă la dovezi și la evoluția ghidurilor de practică.",
                },
                {
                  title: "Comunicare clară",
                  body: "Explicațiile clare și deciziile medicale argumentate rămân esențiale pentru pacientele care caută siguranță și încredere înainte de programare.",
                },
              ].map((card) => (
                <article key={card.title} className="rounded-[1.6rem] border border-white/70 bg-white p-5">
                  <h3 className="text-lg font-semibold text-[var(--color-ink)]">{card.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{card.body}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-[var(--color-border)] bg-white p-6 shadow-[0_20px_55px_rgba(15,35,42,0.05)] sm:p-8">
            <h2 className="font-display text-4xl leading-none tracking-[-0.03em] text-[var(--color-ink)]">
              Repere de autoritate
            </h2>
            <div className="mt-6 grid gap-4">
              {[
                "Profesor universitar la Universitatea de Medicină și Farmacie din Craiova",
                "Șef al Clinicii II Obstetrică-Ginecologie",
                "Coordonator de doctorat și formator în programe de competență",
                "Implicare în activitate editorială, peer review și ghiduri de specialitate",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.4rem] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-4 text-sm leading-7 text-[var(--color-ink)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[var(--color-border)] bg-white p-6 shadow-[0_20px_55px_rgba(15,35,42,0.05)] sm:p-8">
            <h2 className="font-display text-4xl leading-none tracking-[-0.03em] text-[var(--color-ink)]">
              Publicații și contribuții
            </h2>
            <ul className="mt-6 grid gap-3">
              {publicationSignals.map((item) => (
                <li
                  key={item}
                  className="rounded-[1.4rem] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-4 text-sm leading-7 text-[var(--color-ink)]"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <ButtonLink href="/publicatii">Vezi publicațiile</ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
            <h2 className="font-display text-4xl leading-none tracking-[-0.03em] text-[var(--color-ink)]">
              Societăți profesionale
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {societyTags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex rounded-full border border-[var(--color-border)] bg-white px-4 py-2 text-sm font-medium text-[var(--color-ink)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[var(--color-border)] bg-white p-6 shadow-[0_20px_55px_rgba(15,35,42,0.05)] sm:p-8">
            <h2 className="font-display text-4xl leading-none tracking-[-0.03em] text-[var(--color-ink)]">
              Comitete și implicare instituțională
            </h2>
            <ul className="mt-6 grid gap-3">
              {committeeHighlights.map((item) => (
                <li
                  key={item}
                  className="rounded-[1.4rem] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-4 text-sm leading-7 text-[var(--color-ink)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
