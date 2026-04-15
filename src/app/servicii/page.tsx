import { Breadcrumbs } from "@/components/breadcrumbs";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { ServiceGroup } from "@/components/service-group";
import { StructuredData } from "@/components/structured-data";
import { services } from "@/lib/content/site-content";
import { breadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Servicii",
  description:
    "Consultații, ecografii, videocolposcopie și evaluări obstetricale cu prețuri vizibile pentru Prof. Univ. Dr. Dominic Iliescu în Craiova.",
  path: "/servicii",
  keywords: [
    "servicii ginecologie Craiova",
    "ecografie sarcină Craiova",
    "videocolposcopie Craiova",
    "consiliere infertilitate Craiova",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema("/servicii", "Servicii")} />
      <Breadcrumbs
        items={[
          { href: "/", label: "Acasă" },
          { href: "/servicii", label: "Servicii" },
        ]}
      />

      <section className="py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="Servicii și tarife"
            title="Evaluări grupate clar, cu prețuri vizibile"
            description="Consultațiile și evaluările sunt organizate astfel încât fiecare pacientă să poată identifica mai ușor tipul de serviciu de care are nevoie, de la consultații ginecologice și monitorizare, până la ecografii obstetricale și evaluări specializate în sarcină."
          />
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container className="space-y-8">
          {services.map((category) => (
            <ServiceGroup key={category.key} category={category} />
          ))}
        </Container>
      </section>
    </>
  );
}
