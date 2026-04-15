import { Breadcrumbs } from "@/components/breadcrumbs";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { PublicationsAccordion } from "@/components/publications-accordion";
import { SectionHeading } from "@/components/section-heading";
import { StructuredData } from "@/components/structured-data";
import { publicationGroups } from "@/lib/content/publications";
import { breadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Publicații",
  description:
    "Publicațiile și contribuțiile editoriale ale Prof. Univ. Dr. Dominic Iliescu: volume, capitole de carte, articole științifice, ghiduri și prezentări la congrese.",
  path: "/publicatii",
  keywords: ["publicații Dominic Iliescu", "articole științifice obstetrică ginecologie", "capitole de carte medicină fetală"],
});

export default function PublicationsPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema("/publicatii", "Publicații")} />
      <Breadcrumbs
        items={[
          { href: "/", label: "Acasă" },
          { href: "/publicatii", label: "Publicații" },
        ]}
      />

      <section className="py-12 sm:py-16">
        <Container className="grid gap-8 lg:grid-cols-[1fr_0.92fr]">
          <div>
            <SectionHeading
              eyebrow="Publicații și contribuții editoriale"
              title="Repertoriu structurat al activității științifice și editoriale"
              description="Lista de mai jos reunește volume coordonate, capitole de carte, articole științifice, traduceri editoriale, ghiduri și prezentări identificate în CV-ul profesional și în materialele deja integrate în proiect."
            />
          </div>
          <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
            <p className="text-sm leading-7 text-[var(--color-muted)]">
              Structura în acordeoane păstrează lectura clară chiar și pentru un volum amplu de lucrări, astfel încât activitatea științifică să poată fi parcursă ușor de paciente, colegi și publicul academic.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="/activitate-academica">Activitate academică</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Contact
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container>
          <PublicationsAccordion groups={publicationGroups} />
        </Container>
      </section>
    </>
  );
}
