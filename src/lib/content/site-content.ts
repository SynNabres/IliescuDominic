import rawSiteData from "../../../site_data.json";

type RawSiteData = typeof rawSiteData;

export type ServiceCategoryKey = keyof RawSiteData["services"];

export type NavigationItem = {
  href: string;
  label: string;
};

export type ServiceItem = {
  name: string;
  price: number;
  description: string;
};

export type ServiceCategory = {
  key: ServiceCategoryKey;
  title: string;
  intro: string;
  services: ServiceItem[];
};

export type PublicationEntry = {
  year: number;
  title: string;
  source?: string;
  note?: string;
  link?: string;
  doi?: string;
  subtype?: string;
  authorsNote?: string;
};

export type PublicationGroup = {
  id: string;
  title: string;
  description: string;
  entries: PublicationEntry[];
};

type Location = RawSiteData["contact"]["locations"][number];

const serviceDescriptions: Record<string, string> = {
  "Consultație clinică ginecologică":
    "Evaluare clinică completă pentru simptome ginecologice, prevenție și stabilirea conduitei medicale potrivite.",
  "Consiliere infertilitate":
    "Consultație orientată spre clarificarea pașilor de evaluare și a opțiunilor medicale într-un context reproductiv complex.",
  "Consultație la finalul lehuziei":
    "Control dedicat perioadei de după naștere, cu evaluarea recuperării și recomandări adaptate fiecărui caz.",
  "Recoltare probe biologice":
    "Recoltare realizată în condiții medicale controlate, atunci când evaluarea clinică indică teste suplimentare.",
  "Monitorizare ovulație":
    "Urmărire ecografică și clinică pentru pacientele care au nevoie de sincronizare și evaluare funcțională.",
  "Re-evaluare ovulație":
    "Control de etapă pentru ajustarea urmăririi și interpretarea evoluției după consultația inițială.",
  "Ecografie ginecologică":
    "Explorare ecografică detaliată pentru uter, ovare și structurile pelvine, utilă în diagnostic și monitorizare.",
  "Ecografie transabdominală":
    "Evaluare ecografică complementară, indicată atunci când contextul clinic cere o perspectivă suplimentară.",
  "Re-evaluare ginecologică":
    "Consultație de control pentru interpretarea evoluției, a investigațiilor și a răspunsului la tratament.",
  Videocolposcopie:
    "Examinare specializată a colului uterin, utilă în evaluarea leziunilor cervicale și în decizia de monitorizare.",
  "Ecografie în primul trimestru: datare, viabilitate":
    "Confirmă localizarea sarcinii, viabilitatea și reperele inițiale necesare unei urmăriri corecte.",
  "Ecografie în primul trimestru: monitorizare":
    "Control ecografic de etapă pentru evoluția sarcinii în primele săptămâni.",
  "Ecografie 12 săptămâni: dublu test":
    "Evaluare complexă de prim trimestru, cu rol important în stratificarea riscului și aprecierea dezvoltării fetale timpurii.",
  "Ecografie 16-20 săptămâni: triplu test":
    "Consultație de etapă pentru integrarea datelor clinice și ecografice în evoluția sarcinii.",
  "Ecografie trimestrul 2: 18-22 săptămâni morfologie":
    "Morfologie fetală detaliată în intervalul cheie pentru evaluarea anatomică a sarcinii.",
  "Ecografie trimestrul 2: monitorizare morfologică":
    "Control țintit atunci când este nevoie de reevaluarea unei observații anterioare sau de urmărire suplimentară.",
  "Ecografie trimestrul 3: pentru anomalii de sarcină":
    "Evaluare orientată spre situațiile care necesită interpretare atentă în trimestrul al treilea.",
  "Ecografie trimestrul 3: monitorizare fetală, bilanț termen":
    "Control dedicat stării fetale și parametrilor importanți la finalul sarcinii.",
  "Ecografie monitorizare col uterin și ajustare medicație tocolitică":
    "Urmărire clinică și ecografică atunci când sarcina necesită supraveghere atentă a colului uterin.",
  "Taxa de urgență – prezentare fără programare":
    "Se aplică solicitărilor urgente fără programare prealabilă, în funcție de disponibilitate.",
};

const serviceCategoryCopy: Record<ServiceCategoryKey, { title: string; intro: string }> = {
  ginecologie: {
    title: "Ginecologie",
    intro:
      "Consultațiile și investigațiile ginecologice sunt organizate pentru claritate, diagnostic corect și o decizie medicală bine argumentată, de la evaluarea clinică uzuală până la examinări specializate.",
  },
  obstetrica: {
    title: "Obstetrică și medicină materno-fetală",
    intro:
      "Ecografiile obstetricale urmăresc etapele esențiale ale sarcinii și răspund nevoii de monitorizare atentă atunci când contextul clinic cere mai multă precizie.",
  },
};

const normalizePhoneDigits = (value: string) => value.replace(/\D/g, "");

const formatPhoneForIntl = (value: string) => {
  const digits = normalizePhoneDigits(value);
  if (digits.startsWith("40")) return digits;
  if (digits.startsWith("0")) return `4${digits}`;
  return digits;
};

export const siteData = rawSiteData;
export const bookingUrl = "https://ginecho.ro/contact/";
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dominic-iliescu.ro";

export const navigation: NavigationItem[] = [
  { href: "/", label: "Acasă" },
  { href: "/despre", label: "Despre" },
  { href: "/servicii", label: "Servicii" },
  { href: "/activitate-academica", label: "Activitate academică" },
  { href: "/contact", label: "Contact" },
];

export const primaryPhone = siteData.contact.phones[0];
export const secondaryPhone = siteData.contact.phones[1];
export const primaryPhoneHref = `tel:+${formatPhoneForIntl(primaryPhone)}`;
export const secondaryPhoneHref = `tel:+${formatPhoneForIntl(secondaryPhone)}`;
export const whatsappHref = `https://wa.me/${formatPhoneForIntl(primaryPhone)}?text=${encodeURIComponent(
  "Bună ziua. Doresc o programare la Prof. Univ. Dr. Dominic Iliescu."
)}`;

export const trustIndicators = [
  "Profesor universitar la UMF Craiova",
  "Șef al Clinicii II Obstetrică-Ginecologie",
  "Coordonator de doctorat",
  "Expertiză în medicină materno-fetală și ecografie avansată",
];

export const authorityHighlights = [
  {
    title: "Autoritate clinică și universitară",
    body: "Activitatea medicală este susținută de practică spitalicească, formare universitară și implicare directă în standardele profesionale din obstetrică-ginecologie.",
  },
  {
    title: "Diagnostic atent și actualizat",
    body: "Experiența în ecografie obstetricală și ginecologică, medicină materno-fetală, histeroscopie și patologia colului uterin completează o abordare bazată pe dovezi.",
  },
  {
    title: "Vizibilitate științifică reală",
    body: "Publicațiile, capitolele de carte, proiectele de cercetare și activitatea editorială confirmă o implicare academică susținută, națională și internațională.",
  },
];

export const profileNarrative = [
  "Prof. Univ. Dr. Dominic Iliescu este medic primar obstetrică-ginecologie în Craiova, cu o activitate construită la intersecția dintre practica medicală, cercetare și educația universitară. Expertiza sa acoperă îngrijirea obstetricală și ginecologică curentă, dar și situațiile care solicită o perspectivă mai aprofundată: medicină materno-fetală, ecografie avansată, patologia colului uterin, histeroscopie și evaluarea infertilității.",
  "Pentru pacientă, această combinație înseamnă mai mult decât prestigiu academic. Înseamnă capacitatea de a explica limpede, de a integra corect datele clinice și imagistice și de a susține decizii medicale bine fundamentate, adaptate contextului individual.",
  "Activitatea universitară, coordonarea doctorală și participarea constantă la proiecte și publicații științifice completează un profil profesional orientat spre rigoare, claritate și respect față de fiecare caz.",
];

export const services: ServiceCategory[] = (Object.keys(siteData.services) as ServiceCategoryKey[]).map(
  (categoryKey) => ({
    key: categoryKey,
    title: serviceCategoryCopy[categoryKey].title,
    intro: serviceCategoryCopy[categoryKey].intro,
    services: siteData.services[categoryKey].map((service) => ({
      name: service.name,
      price: service.price_lei,
      description:
        serviceDescriptions[service.name] ||
        "Evaluare medicală realizată cu atenție clinică și orientare clară asupra pașilor următori.",
    })),
  })
);

export const featuredServices = [
  "Consultație clinică ginecologică",
  "Videocolposcopie",
  "Consiliere infertilitate",
  "Ecografie 12 săptămâni: dublu test",
  "Ecografie trimestrul 2: 18-22 săptămâni morfologie",
  "Ecografie trimestrul 3: monitorizare fetală, bilanț termen",
].map((serviceName) =>
  services.flatMap((category) => category.services).find((service) => service.name === serviceName)
);

export const featuredPricing = [
  "Consultație clinică ginecologică",
  "Ecografie ginecologică",
  "Ecografie 12 săptămâni: dublu test",
  "Ecografie trimestrul 2: 18-22 săptămâni morfologie",
].map((serviceName) =>
  services.flatMap((category) => category.services).find((service) => service.name === serviceName)
);

export const contactIntro =
  "Programările se pot face telefonic, online sau prin WhatsApp. Solicitările transmise online sunt urmate de confirmare, în funcție de disponibilitate.";

export const contactLocations: (Location & { mapsHref: string })[] = siteData.contact.locations.map((location) => ({
  ...location,
  mapsHref: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.maps_query)}`,
}));

export const faqItems = [
  {
    question: "Cum se face programarea?",
    answer:
      "Programarea se poate iniția telefonic, prin WhatsApp sau prin formularul de contact. Confirmarea finală este stabilită ulterior, în funcție de disponibilitate.",
  },
  {
    question: "Pentru ce tipuri de evaluări se poate solicita consultație?",
    answer:
      "Sunt disponibile consultații ginecologice, evaluări ecografice ginecologice și obstetricale, monitorizare de sarcină, videocolposcopie și consiliere în infertilitate.",
  },
  {
    question: "Unde au loc consultațiile?",
    answer:
      "Consultațiile se desfășoară în cadrul punctelor GinEcho din Craiova, iar adresa exactă poate fi aleasă în funcție de programare și disponibilitate.",
  },
];

export const academicSections = [
  {
    title: "Poziție academică și formare",
    body:
      "Parcursul profesional include titlul de doctor în medicină, abilitare, master în managementul instituțiilor de sănătate și formare postdoctorală orientată spre diagnosticul prenatal și ecografia în obstetrică-ginecologie.",
    items: [
      "Profesor universitar la Universitatea de Medicină și Farmacie din Craiova, din 2023",
      "Coordonator de doctorat în cadrul Școlii Doctorale UMF Craiova, din 2017",
      "Habilitare cu tema «Early Prenatal Diagnosis»",
      "Formare și certificări în medicina fetală, ecografie avansată, colposcopie, histeroscopie și chirurgie minim invazivă",
    ],
  },
  {
    title: "Activitate universitară și formare medicală",
    body:
      "Activitatea didactică include cursuri pentru studenți, rezidenți și programe de competență, precum și coordonarea cercetării doctorale și a lucrărilor academice.",
    items: [
      "Cursuri de obstetrică-ginecologie pentru Facultatea de Medicină și programe în limba engleză",
      "Director sau colaborator în cursuri de competență pentru colposcopie și ecografie în obstetrică-ginecologie",
      "6 doctoranzi finalizați și 8 doctoranzi în coordonare, conform CV-ului din aprilie 2025",
      "Coordonare constantă a lucrărilor prezentate de studenți la conferințe naționale și internaționale",
    ],
  },
  {
    title: "Direcții de cercetare și proiecte",
    body:
      "Direcțiile de cercetare urmăresc probleme cu impact direct în practica medicală: anomalii fetale, inteligență artificială în ecografie, infertilitate, endometrioză, histeroscopie și patologia colului uterin.",
    items: [
      "Proiecte privind diagnosticul prenatal precoce și anomaliile fetale",
      "Studii dedicate interpretării ecocardiografiei fetale și morfologiei fetale cu instrumente AI",
      "Cercetare în infertilitate, histerosonosalpingografie, endometrioză și medicină materno-fetală",
      "Implicare în studii multicentrice internaționale și proiecte naționale finanțate",
    ],
  },
  {
    title: "Societăți profesionale și comitete",
    body:
      "Apartenența la societăți și organisme de specialitate reflectă o implicare constantă în dezvoltarea standardelor profesionale și în reprezentarea domeniului.",
    items: [
      "Membru al Comisiei Ministerului Sănătății pentru Obstetrică-Ginecologie",
      "Membru al Biroului Executiv al Societății Române de Obstetrică și Ginecologie",
      "Președinte al Comisiei Teritoriale de Specialitate Obstetrică-Ginecologie, Craiova",
      "Membru în ISUOG, SMFM, AAGL, FMF, FIGO affiliate member, SRUOG și SRUMB",
    ],
  },
  {
    title: "Activitate editorială și peer review",
    body:
      "CV-ul confirmă implicare editorială în publicații de specialitate și activitate de reviewer pentru reviste indexate internațional, cu interes special pentru imagistică, medicină fetală și diagnostic prenatal.",
    items: [
      "Membru editorial în reviste de obstetrică-ginecologie și imagistică medicală",
      "Reviewer pentru reviste indexate internațional, inclusiv JCM, Prenatal Diagnosis și Fetal Diagnosis and Therapy",
      "Traduceri și coordonare editorială pentru texte și recomandări de specialitate",
      "Contribuții la ghiduri ISUOG și la ghiduri naționale de bună practică",
    ],
  },
];

export const academicStats = [
  { value: "22+", label: "ani de practică în obstetrică-ginecologie" },
  { value: "16+", label: "ani în educația medicală universitară" },
  { value: "48", label: "articole ISI ca autor principal" },
  { value: "493", label: "citări ISI menționate în CV" },
];

export const publicationSignals = [
  "Cărți și volume coordonate publicate în țară și în edituri internaționale",
  "Capitole de carte în volume Springer, InTechOpen și lucrări coordonate național",
  "Contribuții editoriale și traduceri pentru texte de referință în obstetrică și ginecologie",
  "Ghiduri ISUOG și ghiduri naționale de bună practică",
];

export const societyTags = [
  "ISUOG",
  "SMFM",
  "AAGL",
  "FMF",
  "FIGO affiliate member",
  "WFUMB",
  "EFSUMB",
  "SOGR",
  "SRUOG",
  "SRUMB",
  "Societatea Română de Endometrioză",
];

export const committeeHighlights = [
  "Comisia Ministerului Sănătății pentru Obstetrică-Ginecologie",
  "Biroul Executiv al Societății Române de Obstetrică și Ginecologie",
  "Comisia Teritorială de Specialitate Obstetrică-Ginecologie, Craiova",
  "Consiliul Facultății de Medicină și Departamentul Mamă și Copil",
];

export const contactActions = [
  { label: "Sună acum", href: primaryPhoneHref, helper: primaryPhone },
  { label: "WhatsApp", href: whatsappHref, helper: "Mesaj direct pentru inițierea programării" },
  { label: "Programează-te", href: bookingUrl, helper: "Programare prin pagina de contact GinEcho" },
];

export function formatPrice(price: number) {
  return `${price.toLocaleString("ro-RO")} lei`;
}

export function getAbsoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export function createBreadcrumbItems(pathname: string, currentLabel: string) {
  const base = [{ name: "Acasă", item: getAbsoluteUrl("/") }];
  if (pathname === "/") return base;
  return [...base, { name: currentLabel, item: getAbsoluteUrl(pathname) }];
}
