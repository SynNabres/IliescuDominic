import type { PublicationEntry, PublicationGroup } from "@/lib/content/site-content";
import invitedPlenaryData from "@/lib/content/prezentari-invitat-plen.json";

const sortEntries = (entries: PublicationEntry[]) =>
  [...entries].sort((left, right) => {
    if (right.year !== left.year) return right.year - left.year;
    return left.title.localeCompare(right.title);
  });

const buildInvitedPlenarySourceEntries = (): PublicationEntry[] => {
  let inferredYear = 0;

  return invitedPlenaryData.sections.flatMap((section) =>
    section.entries.flatMap((entry) => {
      const yearMatch = entry.event.match(/(?:19|20)\d{2}/);
      if (yearMatch) {
        inferredYear = Number(yearMatch[0]);
      }

      const urlsNote =
        entry.urls && entry.urls.length > 1
          ? `Link-uri: ${entry.urls.join(", ")}`
          : undefined;

      return entry.presentations.map((presentation) => ({
        year: inferredYear,
        title: presentation,
        source: entry.event,
        subtype: section.name,
        link: entry.urls?.[0],
        note: urlsNote,
      }));
    })
  );
};

export const publicationGroups: PublicationGroup[] = [
  {
    id: "prizes-distinctions",
    title: "Premii/distincții/medalii",
    description:
      "Distincțiile reunesc premii internaționale și naționale pentru lucrări, prezentări, postere și contribuții editoriale menționate explicit în CV.",
    entries: sortEntries([
      {
        year: 2025,
        title: "Best poster award",
        source: "6th National Congress of the East-European Society of Endometriosis and Infertility and 9th National Conference of Romanian HPV Society.",
        subtype: "Premiu național",
        note: "Locul I.",
      },
      {
        year: 2024,
        title: "Wiley Top Cited Article 2022-2023 Prize",
        source:
          "American Journal of Medical Genetics Part C: Seminars in Medical Genetics, pentru lucrarea «Prenatal phenotyping: A community effort to enhance the Human Phenotype Ontology».",
        subtype: "Distincție internațională",
      },
      {
        year: 2024,
        title: "Evaluation of Ultrasonographic and morphopatologic findings in spina bifida",
        source:
          "Al 12-lea Congres SRUOG și a 9-a Conferință Națională a Societății Române de HPV, 14 septembrie 2024.",
        subtype: "Premiu național",
        note: "Locul I, Best poster.",
      },
      {
        year: 2023,
        title: "Recurrent isolated fetal pericardial effusion",
        source: "Romanian Society of Ultrasound in Obstetrics and Gynecology Congress, 2023.",
        subtype: "Premiu național",
        note: "Locul I, Best poster award.",
        authorsNote: "George-Lucian Zorilă … Dominic-Gabriel Iliescu.",
      },
      {
        year: 2023,
        title: "Early-onset fetal growth restriction",
        source: "National Congress of Fetal and Neonatal Medicine, Bucharest, 11-13 May 2023.",
        subtype: "Premiu național",
        note: "Locul I, Best poster award.",
        authorsNote: "Elena-Iuliana-Anamaria Berbecaru … Dominic-Gabriel Iliescu.",
      },
      {
        year: 2022,
        title: "Mangementul miniminvaziv al sarcinii cicatriciale",
        source: "Summer School Obstetrics and Gynecology, 29 iunie - 1 iulie 2022.",
        subtype: "Premiu național",
        note: "Locul III, prezentare de caz clinic.",
        authorsNote:
          "Elena-Iuliana-Anamaria Berbecaru, Alina Iuliana Enache, George Lucian Zorila, Dominic Gabriel Iliescu.",
      },
      {
        year: 2020,
        title: "Prenatal ultrasound diagnosis of hemivertebrae in fetus",
        source: "XXIInd Edition of Craiova International Medical Students' Conference 2020.",
        subtype: "Distincție internațională",
      },
      {
        year: 2020,
        title: "Professor Gheorghe Badea Prize",
        source:
          "Romanian Society of Ultrasound in Medicine and Biology, pentru cea mai importantă realizare a anului 2020, volumul «General sonography».",
        subtype: "Premiu național",
        note: "Pentru contribuția «Ultrasound in Obstetrics and Gynecology».",
      },
      {
        year: 2019,
        title: "Medical Students Conference Bucharest",
        source: "Conferința Medical Students Conference Bucharest, 2019.",
        subtype: "Premiu național",
        note: "Locul II.",
      },
      {
        year: 2019,
        title: "Prenatal diagnosis of venous system anomalies",
        source: "The 13th National Congress of Romanian Perinatal Medicine, Cluj, 2019.",
        subtype: "Premiu național",
        note: "Locul I.",
      },
      {
        year: 2018,
        title: "The antenatal diagnosis of amniotic band syndrome",
        source: "1st International Perinatal TOTAL Health Congress, Sinaia, 27-30 iunie 2018.",
        subtype: "Premiu internațional",
        note: "Locul I, Best e-poster presentation.",
        authorsNote:
          "C. Patru, S. Tudorache, F. Tanase, R. Capitanescu, R. Dragusin, M. Florea, M. Cristian, L. Yorila, N. Cernea, Dominic Iliescu.",
      },
      {
        year: 2018,
        title: "The role of ultrasound in cervical cancer diagnosis and surveillance",
        source: "The 17th Congress of Romanian Society of Obstetrics and Gynecology, Iași, 2018.",
        subtype: "Premiu național",
        note: "Locul III.",
      },
      {
        year: 2018,
        title: "Fetal neurosonography. 1st trimester vs 2nd trimester evaluation",
        source: "SRUOG National Congress, secțiunea poster.",
        subtype: "Distincție națională",
        note: "Special Mention.",
      },
      {
        year: 2017,
        title: "MRI at station 0 in a small series: how well performs the ultrasound estimations?",
        source:
          "ISUOG World Congress, section Ultrasound in term and preterm labour, 27th World Congress on Ultrasound in Obstetrics and Gynecology, Viena, Austria, 16-19 Sep 2017.",
        subtype: "Premiu internațional",
        note: "Best short oral presentation.",
      },
      {
        year: 2016,
        title:
          "Quantitative Fluorescence PCR in the prenatal diagnosis of fetal aneuploidies – experience from Regional Centre of Medical Genetics Dolj",
        source: "9th Conference of Genetics, Alba Iulia, 22-24 Sep 2016, Romanian Council of Medical Genetics.",
        subtype: "Premiu internațional",
        note: "Locul I.",
      },
      {
        year: 2013,
        title: "An idiopathic case of macroglossia diagnosed prenatally",
        source: "15th Craiova International Medical Students’ Conference.",
        subtype: "Premiu internațional",
        note: "Locul I, best communication.",
        authorsNote:
          "Autori: Cazacu Irina Mihaela. Coordonatori: Nicolae Cernea, Stefania Tudorache, Dragusin Roxana, Iliescu Dominic.",
      },
      {
        year: 2010,
        title: "ISUOG Congress Prize",
        source:
          "6th ISUOG Outreach Course / 2nd College of Obstetricians & Gynecologists Singapore Scientific Congress, Singapore (Sentosa Island), 14-17 Apr 2010.",
        subtype: "Premiu internațional",
        note: "Best oral presentation.",
      },
      {
        year: 2001,
        title: "Davies-Ascona Prize",
        source:
          "IFMSA - International Federation of Medical Students’ Associations, pentru lucrarea «Study of the nutrition estate of rural population», 01.06.2001.",
        subtype: "Premiu național",
      },
    ]),
  },
  {
    id: "invited-plenary-presentations",
    title: invitedPlenaryData.title,
    description:
      "Selecție curatoriată a prelegerilor invitate (internaționale și naționale), organizată cronologic, pe baza listei furnizate pentru pagina de Publicații.",
    entries: buildInvitedPlenarySourceEntries(),
  },
  {
    id: "books",
    title: "Cărți și volume coordonate",
    description:
      "Volumele coordonate și lucrările editoriale majore conturează direcțiile centrale de expertiză clinică, universitară și științifică.",
    entries: sortEntries([
      {
        year: 2024,
        title: "Inovation in Obstetrics and Gynecology",
        source: "Editura Medichub Media, București.",
        link: "https://www.medichub.ro/upload/files/obstetrica_ginecologie_2024_viata_medicala_2058.pdf",
      },
      {
        year: 2022,
        title: "Pregnancy with Artificial Intelligence. A 9,5 months journey from preconception to birth",
        source: "Springer Nature, Intelligent Systems Reference Library.",
        doi: "https://doi.org/10.1007/978-3-031-18154-2",
        link: "https://link.springer.com/book/10.1007/978-3-031-18154-2",
        note: "Series ISSN 1868-4394; e-ISBN 978-3-031-18154-2.",
      },
      {
        year: 2022,
        title: "Obstetrica",
        source: "Editura Medicală Universitară Craiova.",
        note: "ISBN 978-973-106-351-5.",
      },
      {
        year: 2022,
        title: "Ginecologia",
        source: "Editura Medicală Universitară Craiova.",
        note: "ISBN 978-973-106-366-9.",
      },
      {
        year: 2016,
        title: "Ultrasound in Obstetrics. Atlas",
        source: "Editura Medicală Universitară Craiova.",
        note: "ISBN 978-973-106-278-5.",
      },
      {
        year: 2016,
        title: "Ultrasound in Gynecology",
        source: "Editura Medicală Universitară Craiova.",
        note: "ISBN 978-973-106-279-2.",
      },
      {
        year: 2016,
        title: "Essential in Colposcopy",
        source: "Editura Medicală Universitară Craiova.",
        note: "ISBN 978-973-106-277-8.",
      },
    ]),
  },
  {
    id: "international-chapters",
    title: "Capitole internaționale",
    description:
      "Capitolele publicate în volume internaționale reunesc contribuții din ecografie, medicină fetală, inteligență artificială și obstetrică modernă.",
    entries: sortEntries([
      {
        year: 2024,
        title: "From Ultrasound Image Classification to Ultrasound Video Classification Approaches",
        source: "Advances in Intelligent Healthcare Delivery and Management, Springer.",
        doi: "https://doi.org/10.1007/978-3-031-65430-5_9",
        link: "https://doi.org/10.1007/978-3-031-65430-5_9",
      },
      {
        year: 2024,
        title: "How Can Intelligent Decision Support Systems Be Applied in Obstetrics?",
        source: "Decision Making and Decision Support in the Information Era, Springer.",
        doi: "https://doi.org/10.1007/978-3-031-62158-1_9",
        link: "https://link.springer.com/chapter/10.1007/978-3-031-62158-1_9",
      },
      {
        year: 2024,
        title: "Artificial Intelligence in Obstetrics",
        source: "Advances in Smart Healthcare Paradigms and Applications, Springer.",
        doi: "https://doi.org/10.1007/978-3-031-37306-0_7",
        link: "https://link.springer.com/chapter/10.1007/978-3-031-37306-0_7",
      },
      {
        year: 2023,
        title: "Simulation and learning curve of the traditional and sonographic pelvimetry",
        source: "Practical Guide to Simulation in Delivery Room Emergencies, Springer.",
      },
      {
        year: 2023,
        title: "Probabilistic Framework Based on Deep Learning for Differentiating Ultrasound Movie View Planes",
        source: "Machine Learning and Knowledge Extraction, Springer.",
        doi: "https://doi.org/10.1007/978-3-031-40837-3",
        link: "https://doi.org/10.1007/978-3-031-40837-3",
      },
      {
        year: 2023,
        title: "Designing deep learning architectures with neuroevolution. Study case: fetal morphology scan",
        source: "Innovation in Medicine and Healthcare, KES InMed 2023, Springer.",
        doi: "https://doi.org/10.1007/978-981-99-3311-2_23",
        link: "https://doi.org/10.1007/978-981-99-3311-2_23",
      },
      {
        year: 2022,
        title: "The hepatic fetal venous system",
        source: "Embryology Update, InTechOpen.",
      },
      {
        year: 2021,
        title: "Deep Learning for the Detection of Frames of Interest in Fetal Heart Assessment from First Trimester Ultrasound",
        source: "Advances in Computational Intelligence, IWANN 2021, Springer.",
      },
      {
        year: 2020,
        title: "The Role of Intrapartum Sonography in Prolonged Labor",
        source: "Intrapartum Ultrasonography for Labor Management: Labor, Delivery and Puerperium, 2nd ed., Springer.",
      },
      {
        year: 2018,
        title:
          "Congenital Abnormalities of the Fetal Face; Congenital Abnormalities of the Fetal Heart; Abnormalities of the Placenta; Fetal Abdominal Wall Defects; Fetal Central Nervous System Abnormalities; The Antenatal Detection of Fetal Limb Anomalies",
        source: "Congenital Anomalies - From the Embryo to the Neonate, InTechOpen.",
        note: "Contribuții multiple în același volum.",
      },
      {
        year: 2017,
        title: "Prenatal diagnosis of Down syndrome",
        source: "Advances in Research on Down Syndrome, InTechOpen.",
      },
      {
        year: 2017,
        title: "Birth control and family planning using intrauterine devices (IUDs)",
        source: "Family Planning, InTechOpen.",
      },
      {
        year: 2016,
        title: "Introduction to fetal echocardiography",
        source: "Echocardiography, SM Group (USA).",
        note: "eISBN 978-1-60805-044-4.",
      },
    ]),
  },
  {
    id: "national-contributions",
    title: "Capitole și contribuții naționale",
    description:
      "Contribuțiile naționale reunesc capitole universitare, manuale și monografii care susțin activitatea didactică și practica de specialitate.",
    entries: sortEntries([
      {
        year: 2024,
        title: "Influence of COVID pandemics on family and women’s health",
        source: "Natality and Family Health at the Beginning of XXIst Century, Romanian Academy, Editura Magic Print.",
      },
      {
        year: 2020,
        title: "Ultrasound in Obstetrics and Gynecology",
        source: "General sonography, Editura Medicală Universitară Craiova.",
      },
      {
        year: 2020,
        title: "Management of HSIL lesions",
        source: "Diagnosis and management of cervical intraepithelial neoplasia, Editura Universitară „Iuliu Hațieganu” Cluj-Napoca.",
      },
      {
        year: 2020,
        title: "Ultrasound evaluation of the cervix; Low genital tract infections",
        source: "Textbook of low genital tract conditions, Editura Universitară „Carol Davila”, București.",
        note: "Contribuții grupate în același volum.",
      },
      {
        year: 2020,
        title: "Ultrasound investigation of endometrium",
        source: "Modern investigation of the endometrial pathology, Editura Universitară „Carol Davila”, București.",
      },
      {
        year: 2016,
        title: "Nursing in Obstetrics and Gynecology",
        source: "Editura Medicală Universitară Craiova.",
      },
      {
        year: 2016,
        title: "Ovarian cancer; Mammary cancer; Pelvic static disorders; Urinary incontinence; Postoperative management in gynecologic pathology",
        source: "Manual of Gynecology & Nursing, Vol. II, Editura Medicală Universitară Craiova.",
        note: "Capitole grupate în același volum.",
      },
      {
        year: 2015,
        title: "Ultrasound evaluation in pregnancy in Diabetes pregnancies",
        source: "Pregnancy and Diabetes. New approaches for diagnosis and monitoring, Editura Universitară „Carol Davila”, București.",
      },
      {
        year: 2010,
        title:
          "Paraclinic investigations in Gynecology; Benign pathology in vulval and vaginal dysplasia; Dystrophic and tumoral ovarian pathology; Dystrophic and tumoral breast pathology",
        source: "Gynecology & Nursing, Vol. I, Editura Medicală Universitară Craiova.",
        note: "Capitole grupate în același volum.",
      },
      {
        year: 2009,
        title: "Cervical pathology",
        source: "Monografie, Editura Medicală Universitară Craiova.",
      },
      {
        year: 2009,
        title: "Symptomatology and clinical diagnosis in cervical conditions; Management of cervical conditions",
        source: "Pathology of the uterine cervix, manual for the post university course, Editura Medicală Universitară Craiova.",
      },
      {
        year: 2007,
        title: "Gynecology",
        source: "Editura Medicală Universitară Craiova.",
        note: "Coautor / colaborator.",
      },
      {
        year: 2007,
        title: "Obstetrics",
        source: "Editura Medicală Universitară Craiova.",
        note: "Coautor / colaborator.",
      },
      {
        year: 2005,
        title: "Gynecology",
        source: "Editura Medicală Universitară Craiova.",
        note: "ISBN 973-7757-23-8.",
      },
      {
        year: 2005,
        title: "Obstetrics",
        source: "Editura Medicală Universitară Craiova.",
        note: "ISBN 973-7757-06-8.",
      },
    ]),
  },
  {
    id: "translations",
    title: "Traduceri și coordonare editorială",
    description:
      "Coordonarea edițiilor românești și traducerile editoriale completează activitatea academică prin transfer de standarde și conținut de referință.",
    entries: sortEntries([
      {
        year: 2019,
        title: "Colposcopy in viral and dysplastic lesions",
        source: "Colposcopy: technique and diagnostic, 4th ed., Editura Hipocrate.",
      },
      {
        year: 2018,
        title: "Placenta",
        source: "Practical Guidelines in Obstetrical and Gynecologic Sonography, 2nd ed., Editura Hipocrate.",
      },
      {
        year: 2017,
        title: "Role of Sonography in Gynecologic Interventions; Ultrasound features in fetal syndromes",
        source: "Callen’s Ultrasonography in Obstetrics and Gynecology, 6th ed., ediția românească, Editura Hipocrate.",
      },
      {
        year: 2016,
        title: "Obstetrical haemorrhage",
        source: "Williams Obstetrics, ediția românească, Editura Hipocrate.",
        note: "ISBN 9789738837270.",
      },
    ]),
  },
  {
    id: "isuog-guidelines",
    title: "Ghiduri ISUOG și recomandări",
    description:
      "Traducerile și reviziile ISUOG susțin accesul la recomandări internaționale importante pentru practica zilnică în ecografie și medicină fetală.",
    entries: sortEntries([
      {
        year: 2019,
        title: "ISUOG Education Committee recommendations for basic training in obstetric and gynecological ultrasound",
        source: "Traducere și revizie în limba română.",
        note: "Editor / reviewer: Dr. Iliescu Dominic Gabriel.",
      },
      {
        year: 2018,
        title: "Practice Guidelines: invasive procedure for prenatal diagnosis",
        source: "Traducere în limba română.",
      },
      {
        year: 2018,
        title: "Practice Guidelines: role of ultrasound in twin pregnancy",
        source: "Traducere în limba română.",
      },
      {
        year: 2018,
        title: "Practice guidelines for performance of the routine mid-trimester fetal ultrasound scan",
        source: "Traducere în limba română.",
      },
      {
        year: 2018,
        title: "ISUOG Practice Guidelines: use of Doppler ultrasonography in obstetrics",
        source: "Traducere în limba română.",
      },
      {
        year: 2017,
        title: "Sonographic examination of the fetal central nervous system for performing the “basic examination” and the “fetal neurosonogram”",
        source: "Traducere în limba română.",
      },
      {
        year: 2016,
        title: "ISUOG Interim Guidance on ultrasound for Zika virus infection in pregnancy: information for healthcare professionals",
        source: "Traducere în limba română.",
      },
    ]),
  },
  {
    id: "national-guidelines",
    title: "Ghiduri naționale de bună practică",
    description:
      "Ghidurile naționale sunt prezentate individual, pentru a păstra claritatea tematică și a reflecta corect contribuțiile editoriale distincte.",
    entries: sortEntries([
      { year: 2017, title: "Pregnancy monitoring", source: "Ghid național de bună practică în obstetrică și ginecologie." },
      { year: 2017, title: "Pregnancy booklet", source: "Ghid național de bună practică în obstetrică și ginecologie." },
      { year: 2017, title: "Pelvic Inflammatory Disease", source: "Ghid național de bună practică în obstetrică și ginecologie." },
      {
        year: 2017,
        title: "Diagnosis and Management of Intrauterine Growth Restriction",
        source: "Ghid național de bună practică în obstetrică și ginecologie.",
      },
      {
        year: 2017,
        title: "Ultrasonographic screening for fetal anomalies in the 1st trimester",
        source: "Ghid național de bună practică în obstetrică și ginecologie.",
      },
      {
        year: 2017,
        title: "Ultrasonographic screening for fetal anomalies in the 2nd trimester",
        source: "Ghid național de bună practică în obstetrică și ginecologie.",
      },
      {
        year: 2017,
        title: "Ultrasonographic screening for fetal anomalies in the 3rd trimester",
        source: "Ghid național de bună practică în obstetrică și ginecologie.",
      },
      {
        year: 2017,
        title: "Implementation of Non-invasive Prenatal Testing during the standard screening for chromosomal abnormalities",
        source: "Ghid național de bună practică în obstetrică și ginecologie.",
      },
      { year: 2017, title: "Birth in cephalic presentation", source: "Ghid național de bună practică în obstetrică și ginecologie." },
      { year: 2017, title: "Birth in pelvic presentation", source: "Ghid național de bună practică în obstetrică și ginecologie." },
      { year: 2017, title: "Gynecological ultrasound examination", source: "Ghid național de bună practică în obstetrică și ginecologie." },
      { year: 2017, title: "Placental abruption", source: "Ghid național de bună practică în obstetrică și ginecologie." },
    ]),
  },
];
