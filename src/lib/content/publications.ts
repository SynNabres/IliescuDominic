import type { PublicationGroup } from "@/lib/content/site-content";

export const publicationGroups: PublicationGroup[] = [
  {
    id: "books",
    title: "Cărți și volume coordonate",
    description:
      "Titlurile de referință și volumele coordonate pun în evidență activitatea editorială și direcțiile majore de expertiză.",
    entries: [
      {
        year: 2024,
        title: "Inovation in Obstetrics and Gynecology",
        source: "Editura Medichub Media, București",
        link: "https://www.medichub.ro/upload/files/obstetrica_ginecologie_2024_viata_medicala_2058.pdf",
      },
      {
        year: 2022,
        title: "Pregnancy with Artificial Intelligence. A 9,5 months journey from preconception to birth",
        source: "Springer Nature, Intelligent Systems Reference Library",
        link: "https://link.springer.com/book/10.1007/978-3-031-18154-2",
      },
      { year: 2022, title: "Obstetrica", source: "Editura Medicală Universitară Craiova" },
      { year: 2022, title: "Ginecologia", source: "Editura Medicală Universitară Craiova" },
      { year: 2016, title: "Ultrasound in Obstetrics. Atlas", source: "Editura Medicală Universitară Craiova" },
      { year: 2016, title: "Ultrasound in Gynecology", source: "Editura Medicală Universitară Craiova" },
      { year: 2016, title: "Essential in Colposcopy", source: "Editura Medicală Universitară Craiova" },
    ],
  },
  {
    id: "international-chapters",
    title: "Capitole de carte internaționale",
    description:
      "Selecție din capitolele publicate în volume internaționale, în special în zona de inteligență artificială, ecografie și medicină fetală.",
    entries: [
      {
        year: 2024,
        title: "From Ultrasound Image Classification to Ultrasound Video Classification Approaches",
        source: "Advances in Intelligent Healthcare Delivery and Management, Springer",
        link: "https://doi.org/10.1007/978-3-031-65430-5_9",
      },
      {
        year: 2024,
        title: "How Can Intelligent Decision Support Systems Be Applied in Obstetrics?",
        source: "Decision Making and Decision Support in the Information Era, Springer",
        link: "https://link.springer.com/chapter/10.1007/978-3-031-62158-1_9",
      },
      {
        year: 2024,
        title: "Artificial Intelligence in Obstetrics",
        source: "Advances in Smart Healthcare Paradigms and Applications, Springer",
        link: "https://link.springer.com/chapter/10.1007/978-3-031-37306-0_7",
      },
      {
        year: 2023,
        title: "Simulation and learning curve of the traditional and sonographic pelvimetry",
        source: "Practical Guide to Simulation in Delivery Room Emergencies, Springer",
      },
      {
        year: 2023,
        title: "Probabilistic Framework Based on Deep Learning for Differentiating Ultrasound Movie View Planes",
        source: "Machine Learning and Knowledge Extraction, Springer",
        link: "https://doi.org/10.1007/978-3-031-40837-3",
      },
      {
        year: 2021,
        title: "Deep Learning for the Detection of Frames of Interest in Fetal Heart Assessment from First Trimester Ultrasound",
        source: "Advances in Computational Intelligence, Springer",
      },
      {
        year: 2018,
        title: "Congenital Abnormalities of the Fetal Face and related chapters in Congenital Anomalies - From the Embryo to the Neonate",
        source: "InTechOpen",
      },
    ],
  },
  {
    id: "national-contributions",
    title: "Capitole și contribuții naționale",
    description:
      "Contribuții editoriale și capitole publicate în volume universitare și lucrări de referință din țară.",
    entries: [
      {
        year: 2024,
        title: "Influence of COVID pandemics on family and women’s health",
        source: "Natality and Family Health at the beginning of XXIst Century",
      },
      {
        year: 2020,
        title: "Ultrasound in Obstetrics and Gynecology",
        source: "General sonography, Editura Medicală Universitară Craiova",
      },
      {
        year: 2020,
        title: "Management of HSIL lesions",
        source: "Diagnosis and management of cervical intraepithelial neoplasia",
      },
      { year: 2016, title: "Nursing in Obstetrics and Gynecology", source: "Editura Medicală Universitară Craiova" },
      {
        year: 2015,
        title: "Ultrasound evaluation in diabetic pregnancies",
        source: "Pregnancy and Diabetes. New approaches for diagnosis and monitoring",
      },
      { year: 2009, title: "Cervical pathology", source: "Monografie, Editura Medicală Universitară Craiova" },
    ],
  },
  {
    id: "articles",
    title: "Articole științifice",
    description:
      "Selecție de articole și lucrări citate în CV, orientate spre medicină fetală, imagistică și diagnostic prenatal.",
    entries: [
      {
        year: 2024,
        title: "Prenatal phenotyping: A community effort to enhance the Human Phenotype Ontology",
        source: "American Journal of Medical Genetics Part C: Seminars in Medical Genetics",
        note: "Lucrare distinsă cu Wiley Top Cited Article 2022-2023 Prize.",
      },
      {
        year: 2022,
        title: "Application of digital pathology and artificial intelligence to placental diagnostics",
        source: "Journal of Obstetrics and Gynecology Research",
      },
      {
        year: 2021,
        title: "Second trimester discordance and Doppler characteristics in monochorionic twins",
        source: "The Journal of Maternal-Fetal & Neonatal Medicine",
      },
      {
        year: 2020,
        title: "A fetus of 8q22.2q24.3 duplication and 13q33.2q34 deletion derived from a maternal balanced translocation",
        source: "Journal of Obstetrics and Gynecology Research",
      },
      {
        year: 2020,
        title: "What is the role of fetal ultrasonography and maternal serum CA-125 in predicting early pregnancy loss in recurrent miscarriage?",
        source: "Journal of Perinatal Medicine",
      },
      { year: 2017, title: "The three-vessels and trachea view in the first trimester of pregnancy", source: "Prenatal Diagnosis" },
      { year: 2016, title: "Automated measurement of the angle of progression in labor: a feasibility and reliability study", source: "Fetal Diagnosis and Therapy" },
      { year: 2016, title: "Fetal Brain Anomalies Detection during the First Trimester: Expanding the Scope of Antenatal Sonography", source: "The Journal of Maternal-Fetal & Neonatal Medicine" },
    ],
  },
  {
    id: "guidelines",
    title: "Ghiduri și recomandări",
    description:
      "Activitatea de traducere, revizie și adaptare editorială face parte din contribuția profesională orientată spre standarde clare și accesibile.",
    entries: [
      { year: 2019, title: "ISUOG Education Committee recommendations for basic training in obstetric and gynecological ultrasound", source: "Traducere și revizie în limba română" },
      { year: 2018, title: "ISUOG Practice Guidelines: use of Doppler ultrasonography in obstetrics", source: "Traducere în limba română" },
      { year: 2018, title: "Practice guidelines for performance of the routine mid-trimester fetal ultrasound scan", source: "Traducere în limba română" },
      { year: 2018, title: "Practice Guidelines: role of ultrasound in twin pregnancy", source: "Traducere în limba română" },
      { year: 2018, title: "Practice Guidelines: invasive procedure for prenatal diagnosis", source: "Traducere în limba română" },
      { year: 2017, title: "Ghiduri naționale de bună practică în obstetrică și ginecologie", source: "Monitorizarea sarcinii, RCIU, screening ecografic fetal, naștere și ecografie ginecologică" },
    ],
  },
  {
    id: "abstracts",
    title: "Abstracte și prezentări la congrese",
    description:
      "Pagina rămâne pregătită pentru extindere; prima versiune evidențiază prezentări și premii menționate explicit în CV.",
    entries: [
      { year: 2025, title: "Best poster: Evaluation of ultrasonographic and morphopathologic findings in spina bifida", source: "Congres SRUOG și Conferința Națională a Societății Române de HPV" },
      { year: 2023, title: "Best poster: Recurrent isolated fetal pericardial effusion", source: "Congresul Societății Române de Ultrasonografie în Obstetrică și Ginecologie" },
      { year: 2023, title: "Best poster: Early-onset fetal growth restriction", source: "Congresul Național de Medicină Fetală și Neonatală, București" },
      { year: 2020, title: "Prenatal ultrasound diagnosis of hemivertebrae in fetus", source: "Craiova International Medical Students’ Conference" },
      { year: 2018, title: "The antenatal diagnosis of amniotic band syndrome", source: "1st International Perinatal TOTAL Health Congress, Sinaia" },
      { year: 2017, title: "MRI at station 0 in a small series: how well performs the ultrasound estimations?", source: "27th World Congress on Ultrasound in Obstetrics and Gynecology, Viena" },
    ],
  },
];
