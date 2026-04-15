import { Breadcrumbs } from "@/components/breadcrumbs";
import { ButtonLink } from "@/components/button-link";
import { AcademicSection } from "@/components/academic-section";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { StructuredData } from "@/components/structured-data";
import {
  academicSections,
  academicStats,
  publicationSignals,
  siteData,
} from "@/lib/content/site-content";
import { breadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Activitate academică",
  description:
    "Activitatea academică a Prof. Univ. Dr. Dominic Iliescu: formare universitară, coordonare doctorală, cercetare, societăți profesionale și contribuții editoriale.",
  path: "/activitate-academica",
  keywords: ["activitate academică Dominic Iliescu", "publicații obstetrică ginecologie", "UMF Craiova obstetrică ginecologie"],
});

export default function AcademicPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema("/activitate-academica", "Activitate academică")} />
      <Breadcrumbs
        items={[
          { href: "/", label: "Acasă" },
          { href: "/activitate-academica", label: "Activitate academică" },
        ]}
      />

      <section className="py-12 sm:py-16">
        <Container className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionHeading
              eyebrow="Activitate academică și științifică"
              title="Un profil profesional susținut de cercetare, formare și implicare în standardele domeniului"
              description="Activitatea academică și științifică reprezintă o componentă importantă a profilului profesional al Prof. Univ. Dr. Dominic Iliescu. Aceasta completează practica medicală prin cercetare, formare universitară, coordonare doctorală și participare activă la dezvoltarea standardelor profesionale în obstetrică și ginecologie."
            />
          </div>

          <div className="grid gap-4">
            {academicStats.map((stat) => (
              <div key={stat.label} className="rounded-[2rem] border border-[var(--color-border)] bg-white p-6">
                <p className="font-display text-5xl leading-none text-[var(--color-accent-strong)]">{stat.value}</p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-12 sm:pb-16">
        <Container className="space-y-8">
          {academicSections.map((section) => (
            <AcademicSection key={section.title} {...section} />
          ))}
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
            <h2 className="font-display text-4xl leading-none tracking-[-0.03em] text-[var(--color-ink)]">
              Relevanță pentru paciente
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
              Pentru pacientă, această activitate înseamnă acces la o perspectivă medicală actualizată, atentă la dovezile științifice și la evoluția standardelor de practică. Este diferența dintre o evaluare de rutină și o abordare construită pe experiență, actualizare și responsabilitate profesională.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[var(--color-border)] bg-white p-6 shadow-[0_20px_55px_rgba(15,35,42,0.05)] sm:p-8">
            <h2 className="font-display text-4xl leading-none tracking-[-0.03em] text-[var(--color-ink)]">
              Semnale de vizibilitate științifică
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
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="/publicatii">Vezi publicațiile</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Contact
              </ButtonLink>
            </div>
            <p className="mt-6 text-sm leading-7 text-[var(--color-muted)]">
              Activitatea este legată de {siteData.academic_highlights.research_directions[0].toLowerCase()},{" "}
              {siteData.academic_highlights.research_directions[2].toLowerCase()} și de integrarea tehnologiilor moderne în practica obstetricii-ginecologiei.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
