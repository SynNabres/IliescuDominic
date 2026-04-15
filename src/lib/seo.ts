import type { Metadata } from "next";

import {
  contactLocations,
  createBreadcrumbItems,
  getAbsoluteUrl,
  primaryPhone,
  siteData,
  siteUrl,
  whatsappHref,
} from "@/lib/content/site-content";

type MetadataConfig = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function createPageMetadata(config: MetadataConfig): Metadata {
  const canonical = getAbsoluteUrl(config.path);
  const openGraphImage = getAbsoluteUrl("/images/doctor/dominic-iliescu-ginecolog-craiova-1024x683-2.jpg");

  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    alternates: { canonical },
    openGraph: {
      title: config.title,
      description: config.description,
      type: "website",
      locale: "ro_RO",
      url: canonical,
      images: [{ url: openGraphImage, width: 1200, height: 800, alt: "Prof. Univ. Dr. Dominic Iliescu în timpul unei evaluări ecografice." }],
    },
    twitter: {
      card: "summary_large_image",
      title: config.title,
      description: config.description,
      images: [openGraphImage],
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness"],
    "@id": `${siteUrl}#medical-business`,
    name: siteData.brand.name,
    description:
      "Obstetrică-ginecologie, medicină materno-fetală, ecografie avansată și evaluări ginecologice specializate în Craiova.",
    url: siteUrl,
    telephone: primaryPhone,
    email: siteData.contact.email,
    medicalSpecialty: ["Obstetrics", "Gynecologic"],
    areaServed: "Craiova",
    openingHours: "Mo-Fr 09:00-21:00",
    sameAs: [whatsappHref],
    address: contactLocations.map((location) => ({
      "@type": "PostalAddress",
      streetAddress: location.address,
      addressLocality: siteData.brand.city,
      addressCountry: "RO",
    })),
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Person", "Physician"],
    "@id": `${siteUrl}#person`,
    name: siteData.brand.name,
    jobTitle: "Profesor universitar și medic primar obstetrică-ginecologie",
    medicalSpecialty: ["Obstetrics", "Gynecologic", "MaternalFetalMedicine"],
    address: { "@type": "PostalAddress", addressLocality: siteData.brand.city, addressCountry: "RO" },
    affiliation: ["Universitatea de Medicină și Farmacie din Craiova", "Spitalul Clinic Județean de Urgență Craiova"],
    email: siteData.contact.email,
    telephone: primaryPhone,
    knowsAbout: ["medicină materno-fetală", "ecografie avansată", "patologia colului uterin", "histeroscopie", "consiliere infertilitate"],
    url: siteUrl,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}#website`,
    url: siteUrl,
    name: siteData.brand.name,
    inLanguage: "ro-RO",
    about: "Obstetrică-ginecologie, medicină materno-fetală și ecografie avansată în Craiova",
  };
}

export function breadcrumbSchema(pathname: string, currentLabel: string) {
  const items = createBreadcrumbItems(pathname, currentLabel);

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
