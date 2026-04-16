import type { PublicationEntry, PublicationGroup } from "@/lib/content/site-content";

const sortEntries = (entries: PublicationEntry[]) =>
  [...entries].sort((left, right) => {
    if (right.year !== left.year) return right.year - left.year;
    return left.title.localeCompare(right.title);
  });

export const publicationGroups: PublicationGroup[] = [
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
  {
    id: "articles",
    title: "Articole științifice",
    description:
      "Secțiunea reunește articolele publicate pe teme precum diagnosticul prenatal, medicina fetală, cazurile clinice, imagistica, genetica și aplicațiile inteligenței artificiale.",
    entries: sortEntries([
      {
        year: 2023,
        title: "Real-world study of Cerviron vaginal ovules in the treatment of cervical lesions of different etiology",
        source: "Biomedical Reports.",
      },
      {
        year: 2022,
        title: "Intelligent Prenatal Ultrasound for Diagnosing Fetal Lip and Palate During the Second Trimester",
        source: "BMC Medical Informatics and Decision Making.",
      },
      {
        year: 2022,
        title: "New focuses for fetal nervous system during 11th-14th gestational week",
        source: "The Journal of Maternal-Fetal & Neonatal Medicine.",
      },
      {
        year: 2022,
        title: "Maximal reduction of STIC acquisition time for volumetric assessment of the fetal heart - benefits and limitations of semiautomatic fetal intelligent navigation echocardiography (FINE) static mode",
        source: "Journal of Clinical Medicine.",
      },
      {
        year: 2022,
        title: "Organ-specific learning curves of sonographers performing first-trimester anatomical screening and impact of score-based evaluation on ultrasound image quality",
        source: "PLOS ONE.",
      },
      {
        year: 2022,
        title: "Automatic Ovarian Tumors Recognition System based on Ensemble Convolutional Neural Network with Ultrasound Imaging",
        source: "BMC Medical Informatics and Decision Making.",
      },
      {
        year: 2022,
        title: "Outcomes in fetuses with ductus venosus systemic shunts: a case series",
        source: "Fetal Diagnosis and Therapy.",
      },
      {
        year: 2022,
        title: "Perinatal and neonatal outcomes in fetal growth restriction and small for gestational age",
        source: "Journal of Clinical Medicine.",
      },
      {
        year: 2022,
        title: "Effect of Vitamin D Supplementation on the Fetal Growth Rate in Pregnancy Complicated with Fetal Growth Restriction",
        source: "Children.",
      },
      {
        year: 2022,
        title: "Rs868058 in the homeobox gene HLX contributes to early-onset fetal growth restriction",
        source: "Biology.",
      },
      {
        year: 2022,
        title: "Application of digital pathology and artificial intelligence to placental diagnostics",
        source: "Journal of Obstetrics and Gynecology Research.",
      },
      {
        year: 2021,
        title: "Correlation between severity of fetal growth restriction and oxidative stress at birth in severe small-for-gestational age infants",
        source: "International Journal of Environmental Research and Public Health.",
      },
      {
        year: 2021,
        title: "Significance of ethnicity-specific normative models of quadruple test as a screening test for Down syndrome",
        source: "Medicina.",
      },
      {
        year: 2021,
        title: "Maternal outcome of selective feticide due to fetal anomaly in late trimester: a retrospective 10 years’ experience in Taiwan",
        source: "Scientific Reports.",
      },
      {
        year: 2021,
        title: "Second trimester discordance and Doppler characteristics in monochorionic twins",
        source: "The Journal of Maternal-Fetal & Neonatal Medicine.",
      },
      {
        year: 2021,
        title: "A prenatally diagnosed umbilical cord disruption sequence: Case report",
        source: "Journal of Obstetrics and Gynecology Research.",
      },
      {
        year: 2020,
        title: "Five Year Experience In Management Of Mesenteric Cysts In Pediatric Population",
        source: "World Journal of Pediatric Surgery.",
      },
      {
        year: 2020,
        title: "Ovarian Solid Pseudopapillary Tumor Resembling Benign Hemorrhagic Cyst on Rapid Frozen Section",
        source: "Case Reports in Obstetrics and Gynecology.",
      },
      {
        year: 2020,
        title: "A rare case of rhabdomyosarcoma of cervix : fertility preservation options in young fertile girl",
        source: "Asian Research Journal of Gynaecology and Obstetrics.",
      },
      {
        year: 2020,
        title: "First trimester screening for fetal structural abnormalities; psychological outcomes, knowledge and preference of pregnant women",
        source: "Ultrasound in Obstetrics and Gynecology.",
      },
      {
        year: 2020,
        title: "First-trimester screening and early diagnosis of rhombencephalosynapsis: the limits of intracranial translucency and a plea for a thorough assessment of the aqueduct of Sylvius",
        source: "Ultrasound in Obstetrics and Gynecology.",
      },
      {
        year: 2020,
        title: "Outcome of Pregnancy in Singleton Fetuses with Increased Nuchal Translucency and Normal Karyotype; A Historical Cohort Study",
        source: "Clinical and Experimental Obstetrics and Gynecology.",
      },
      {
        year: 2020,
        title: "What is the role of fetal ultrasonography and maternal serum CA-125 in predicting early pregnancy loss in recurrent miscarriage?",
        source: "Journal of Perinatal Medicine.",
      },
      {
        year: 2020,
        title: "A fetus of 8q22.2q24.3 duplication and 13q33.2q34 deletion derived from a maternal balanced translocation",
        source: "Journal of Obstetrics and Gynecology Research.",
      },
      {
        year: 2020,
        title: "Uncommon ectopic pregnancies (Clinical Scenarios, Implications of Management and Overview)",
        source: "Journal of Obstetrics and Gynecology Research.",
      },
      {
        year: 2020,
        title: "Mixed germ cell tumor of endometrium: a case report and literature review",
        source: "Open Medicine.",
      },
      {
        year: 2019,
        title: "Intrauterine haematomas in the first trimester and pregnancy complications",
        source: "Ultrasound in Obstetrics and Gynecology.",
      },
      {
        year: 2019,
        title: "Congenital jugular vein phlebectasia or aneurysma: a rare entity in prenatal diagnosis",
        source: "Journal of Obstetrics and Gynecology Research.",
      },
      {
        year: 2018,
        title: "Prevalence of fetal structural anomalies diagnosed during the first, second and third trimester by ultrasonography",
        source: "The Journal of the Turkish German Gynecological Association.",
      },
      {
        year: 2018,
        title: "Healthcare Workers Knowledge and Attitude towards Prevention of Obstetric Fistula",
        source: "International Journal of Research and Reports in Gynecology.",
      },
      {
        year: 2018,
        title: "Uterine Didelphys pregnancy management",
        source: "Journal of Advances in Medicine and Medical Research.",
      },
      {
        year: 2017,
        title: "The role of sonographic markers of ovarian morphology versus hirsutism indices in the prediction of serum total testosterone in hirsute women",
        source: "American Research Journal of Gynaecology.",
      },
      {
        year: 2017,
        title: "Leiomyoma of the Vagina",
        source: "American Research Journal of Gynaecology.",
      },
      {
        year: 2017,
        title: "Changing of Doppler renal flow parameter in pregnancy compared with general population",
        source: "American Research Journal of Gynaecology.",
      },
      {
        year: 2017,
        title: "Twisted pedunculated subserosal uterine leiomyoma, a rare disease",
        source: "International Research Journal of Public and Environmental Health.",
      },
      {
        year: 2017,
        title: "Management of a rare complication of abdominal aortic repair: aorto-enteric fistula",
        source: "Annals of Cardiology and Cardiovascular Medicine.",
      },
      {
        year: 2017,
        title: "Atherosclerosis: caused by mutated old blood cells",
        source: "Annals of Cardiology and Cardiovascular Medicine.",
      },
      {
        year: 2017,
        title: "Cor Triatriatum Sinister-A rare finding in older adult",
        source: "Annals of Cardiology and Cardiovascular Medicine.",
      },
      {
        year: 2017,
        title: "Mechanical Failure of an Angio-Seal Requiring Surgical Extraction",
        source: "Annals of Cardiology and Cardiovascular Medicine.",
      },
      {
        year: 2017,
        title: "Tuboovarian abcess secondary to right pyonephrosis- case report",
        source: "Obstetrica Ginecologia.",
      },
      {
        year: 2017,
        title: "INFLUENZA DURING PREGNANCY An ignored association. Pleading for vaccination",
        source: "Obstetrica Ginecologia.",
      },
      {
        year: 2017,
        title: "The three-vessels and trachea view (3VTV) in the first trimester of pregnancy: an additional tool in screening for major congenital heart defects (CHD) in an unselected population",
        source: "Prenatal Diagnosis.",
      },
      {
        year: 2017,
        title: "Limitations of second trimester screening for congenital heart disease based on four-chamber and three-vessel views",
        source: "Journal of Obstetrics and Gynecology Research.",
      },
      {
        year: 2017,
        title: "Absent ductus venosus with a rare complication, partial liver defect: A case report",
        source: "Journal of Obstetrics and Gynecology Research.",
      },
      {
        year: 2017,
        title: "Prenatal diagnosis of premature chromatid separation / mosaic variegated aneuploidy (PCS/MVA) syndrome",
        source: "Journal of Obstetrics and Gynecology Research.",
      },
      {
        year: 2017,
        title: "Clinical results after the implementation of cell free foetal dna detection in maternal plasma",
        source: "Journal of Obstetrics and Gynecology Research.",
      },
      {
        year: 2017,
        title: "Ultrasonographic Findings of Congenital High Airway Obstruction Syndrome (CHAOS)",
        source: "Current Medical Imaging Reviews.",
      },
      {
        year: 2017,
        title: "Hydrocephaly, schizencephaly, spondylocostal dysplasia, and hypoparathyroidism in an infant of a diabetic mother",
        source: "Acta Endocrinologica.",
      },
      {
        year: 2016,
        title: "Automated measurement of the angle of progression in labor: a feasibility and reliability study",
        source: "Fetal Diagnosis and Therapy.",
      },
      {
        year: 2016,
        title: "Fetal Brain Anomalies Detection during the First Trimester: Expanding the Scope of Antenatal Sonography",
        source: "The Journal of Maternal-Fetal & Neonatal Medicine.",
      },
      {
        year: 2016,
        title: "Deep endometriosis infiltrating the bowel: a continuing debate about the best management",
        source: "Obstetrica Ginecologia.",
      },
      {
        year: 2016,
        title: "Variations of placental migration in patients with early third trimester malposition",
        source: "Journal of Obstetrics and Gynecology Research.",
      },
      {
        year: 2016,
        title: "Virtual hysteroscopy: a new non invasive approach for the assessment of uterine cavity",
        source: "Medical Ultrasonography.",
      },
      {
        year: 2016,
        title: "Factors Associated with Maternal Mortality in Midlands Province",
        source: "Obstetrics and Gynaecology Insights.",
      },
      {
        year: 2015,
        title: "Sonographic features of congenital infantile fibrosarcoma that appeared as a sacrococcygeal teratoma during pregnancy",
        source: "Journal of Obstetrics and Gynecology Research.",
      },
      {
        year: 2015,
        title: "The effects of gestational glucose intolerance on fetal ultrasonographic measurements in the second trimester",
        source: "Journal of Obstetrics and Gynecology Research.",
      },
      {
        year: 2015,
        title: "Spontaneously conceived heterotopic pregnancy masquerading ovarian torsion",
        source: "Journal of Obstetrics and Gynecology Research.",
      },
      {
        year: 2015,
        title: "Renal pelvic dilatation and fetal outcomes- review of cases from a tertiary care center in Karachi, Pakistan",
        source: "Journal of Obstetrics and Gynecology Research.",
        link: "http://onlinelibrary.wiley.com/doi/10.1111/jog.12979/full",
      },
      {
        year: 2015,
        title: "Congenital Encephalic Anomalies Review",
        source: "World Journal of Psychiatry.",
      },
      {
        year: 2015,
        title: "Early detection of fetal malformation, a long distance yet to cover! Present status and potential of first trimester ultrasonography in detection of fetal congenital malformation in a developing country: experience at a tertiary care centre in India",
        source: "Journal of Pregnancy.",
      },
      {
        year: 2015,
        title: "Can abnormal ductus venosus peak velocity index for veins predict failure of functional closure of the foramen ovale in the postnatal period?",
        source: "Medical Ultrasonography.",
      },
      {
        year: 2014,
        title: "Use of colposcopy for detection of squamous intraepithelial lesions",
        source: "Acta Medica Academica.",
      },
      {
        year: 2014,
        title: "Clinical application of three-dimensional VOLUME NT software in the measurement of the fetal nuchal translucency",
        source: "Journal of Obstetrics and Gynecology Research.",
      },
      {
        year: 2014,
        title: "Trends in the prenatal diagnosis of aneuploidy in Japan",
        source: "Journal of Obstetrics and Gynecology Research.",
      },
      {
        year: 2014,
        title: "An 8-year retrospective study on prenatal cytogenetic analyses: A one-center experience",
        source: "Journal of Obstetrics and Gynecology Research.",
      },
      {
        year: 2014,
        title: "A case of non-mosaic trisomy 20 in amniotic fluid cultures without anomalies in the fetus: Cytogenetic discrepancy between amniocytes and fetal blood",
        source: "Journal of Obstetrics and Gynecology Research.",
      },
      {
        year: 2014,
        title: "The outcome of pregnancies with euploid non-anomalous fetuses with short femur and humerus in the second trimester ultrasound",
        source: "Journal of Obstetrics and Gynecology Research.",
        link: "http://onlinelibrary.wiley.com/doi/10.1111/jog.12711/full",
      },
      {
        year: 2013,
        title: "Predictive Value of Transvaginal and Transperineal Ultrasonographic Cervical Length Measurement for Preterm Delivery",
        source: "Journal of Obstetrics and Gynecology Research.",
        link: "http://onlinelibrary.wiley.com/doi/10.1111/jog.12407/full",
      },
      {
        year: 2013,
        title: "Predicting Factors on Cervical Ripening and Response to Induction in Over 37 Weeks Pregnant Women",
        source: "Medical Ultrasonography.",
      },
      {
        year: 2013,
        title: "Relations between perinatal outcomes and gestational diabetes",
        source: "Gineco.ro.",
      },
      {
        year: 2013,
        title: "Emergency peripartum hysterectomy: Our experience with 189 cases",
        source: "Gineco.ro.",
      },
      {
        year: 2013,
        title: "Hormone Replacement Therapy and improvement of well-being menopausal women",
        source: "Gineco.ro.",
      },
      {
        year: 2012,
        title: "Can the \"angle of progression\" as measured in pregnant women before the onset of labor predict mode of delivery?",
        source: "Ultrasound in Obstetrics and Gynecology.",
      },
      {
        year: 2012,
        title: "Interleukin 10 gene polymorphisms and recurrent pregnancy loss in Romanian population",
        source: "Gineco.ro.",
      },
      {
        year: 2012,
        title: "Regional anesthesia or general anesthesia in a pregnant woman affected by obesity and hyperhomocysteinemia. Case raport",
        source: "Gineco.ro.",
      },
      {
        year: 2012,
        title: "Rollerball Endometrial Ablation versus Levonorgestrel Releasing Intrauterine System in the Management of Abnormal Uterine Bleeding",
        source: "Gineco.ro.",
      },
      {
        year: 2012,
        title: "Clinical applications of uterine cervical length assessment by transvaginal ultrasonography for preventing preterm birth",
        source: "Gineco.ro.",
      },
    ]),
  },
  {
    id: "abstracts",
    title: "Abstracte și prezentări la congrese",
    description:
      "Lista reunește rezumate, postere premiate și comunicări la congrese sau cursuri naționale și internaționale",
    entries: sortEntries([
      {
        year: 2024,
        title: "Urinary pH as borderline in the effectiveness of the treatment of urinary tract infections",
        source: "5th International SREG Congress of Aesthetic Gynecology & Regenerative Medicine, București.",
        subtype: "Prezentare",
      },
      {
        year: 2024,
        title: "Evaluation of Ultrasonographic and morphopatologic findings in spina bifida",
        source: "Al 12-lea Congres SRUOG și a 9-a Conferință Națională a Societății Române de HPV.",
        subtype: "Poster premiat",
        note: "Best poster.",
      },
      {
        year: 2023,
        title: "Up-To-Date in the Management of Urinary Tract Infections",
        source: "Hellenic-Romanian Society of Surgery Conference, Craiova.",
        subtype: "Prezentare",
      },
      {
        year: 2023,
        title: "Obstetric and gynecologic malpractice claims, incidence and causes",
        source: "Hellenic-Romanian Society of Surgery Conference, Craiova.",
        subtype: "Prezentare",
      },
      {
        year: 2023,
        title: "Recurrent isolated fetal pericardial effusion",
        source: "Romanian Society of Ultrasound in Obstetrics and Gynecology Congress.",
        subtype: "Poster premiat",
        note: "Best poster award.",
      },
      {
        year: 2023,
        title: "Early-onset fetal growth restriction",
        source: "National Congress of Fetal and Neonatal Medicine, București.",
        subtype: "Poster premiat",
        note: "Best poster award.",
      },
      {
        year: 2022,
        title: "Ultrasound evaluation of maternal trauma at birth",
        source: "The 18th World Federation for Ultrasound in Medicine and Biology Congress / EUROSON 2022, Timișoara.",
        subtype: "Prezentare",
      },
      {
        year: 2022,
        title: "First trimester fetal heart interpretation by artificial intelligence",
        source: "3D/4D VISUS Course, Atena.",
        subtype: "Prezentare",
      },
      {
        year: 2022,
        title: "First trimester fetal heart anomalies: detection and histovirtuoscopy confirmation",
        source: "3D/4D VISUS Course, Atena.",
        subtype: "Prezentare",
      },
      {
        year: 2022,
        title: "Hysterosonosalpingography – better than expected",
        source: "3D/4D VISUS Course, Atena.",
        subtype: "Prezentare",
      },
      {
        year: 2022,
        title: "Managementul miniminvaziv al sarcinii cicatriciale",
        source: "Summer School Obstetrics and Gynecology.",
        subtype: "Premiu caz clinic",
        note: "Locul III.",
      },
      {
        year: 2021,
        title: "First trimester CNS tips & tricks and surprises",
        source: "Fetal CNS evaluation and Fetal Neurology, University of Athens / IAPM / HSUMB.",
        subtype: "Prezentare",
      },
      {
        year: 2021,
        title: "Portal venous system anomalies: a new prognostic factor in cases of agenesis of ductus venosus?",
        source: "37th Congress of The Fetus as a Patient Society / 1st Congress of Young Scientists of the International Academy of Perinatal Medicine.",
        subtype: "Prezentare",
      },
      {
        year: 2021,
        title: "Virtual autopsy and confirmation of normal fetal heart anatomy in the first trimester using three-dimensional (3D) reconstruction of histological sections",
        source: "37th Congress of The Fetus as a Patient Society / 1st Congress of Young Scientists of the International Academy of Perinatal Medicine.",
        subtype: "Prezentare",
      },
      {
        year: 2020,
        title: "Prenatal ultrasound diagnosis of hemivertebrae in fetus",
        source: "Craiova International Medical Students’ Conference.",
        subtype: "Abstract premiat",
      },
      {
        year: 2020,
        title: "How do we manage anomalies of the corpus callosum",
        source: "ISUOG Virtual World Congress.",
        subtype: "Workshop",
      },
      {
        year: 2020,
        title: "Management of peritoneal carcinomatosis",
        source: "5th Panhellenic Congress of General Surgery, Grecia.",
        subtype: "Prezentare",
      },
      {
        year: 2019,
        title: "Transperineal ultrasound characterization of station 0",
        source: "First ISLANDS (International Study Group in Labor and Delivery Sonography) Meeting, Parma.",
        subtype: "Prezentare",
      },
      {
        year: 2019,
        title: "Future as an objective past. Correlations of the sonopartogram with classic clinical partogram",
        source: "First ISLANDS (International Study Group in Labor and Delivery Sonography) Meeting, Parma.",
        subtype: "Prezentare",
      },
      {
        year: 2019,
        title: "Fetal venous system. Simplicity is the ultimate sophistication",
        source: "The 9th Romanian Ian Donald Course / Al XIII-lea Congres Național de Medicină Perinatală, Cluj-Napoca.",
        subtype: "Prezentare",
      },
      {
        year: 2019,
        title: "Prenatal diagnosis of venous system anomalies",
        source: "The 13th National Congress of Romanian Perinatal Medicine, Cluj-Napoca.",
        subtype: "Premiu",
        note: "Locul I.",
      },
      {
        year: 2018,
        title: "Transperineal intrapartum ultrasound. What is the aim?",
        source: "International Society of Pelviperineology Congress, București.",
        subtype: "Prezentare",
      },
      {
        year: 2018,
        title: "Definitive diagnosis of major CNS abnormalities: more than a challenge",
        source: "Fetus as a Patient, București.",
        subtype: "Prezentare",
      },
      {
        year: 2018,
        title: "Our experience in multidisciplinary approach of patients with congenital malformations and rare diseases. Better counseling and better outcome.",
        source: "1st Congress Perinatal TOTAL Health, Sinaia.",
        subtype: "Prezentare",
      },
      {
        year: 2018,
        title: "The antenatal diagnosis of amniotic band syndrome",
        source: "1st International Perinatal TOTAL Health Congress, Sinaia.",
        subtype: "Poster premiat",
        note: "Locul I.",
      },
      {
        year: 2018,
        title: "The role of ultrasound in cervical cancer diagnosis and surveillance",
        source: "17th Congress of Romanian Society of Obstetrics and Gynecology, Iași.",
        subtype: "Premiu",
        note: "Locul III.",
      },
      {
        year: 2017,
        title: "MRI at station 0 in a small series: how well performs the ultrasound estimations?",
        source: "27th World Congress on Ultrasound in Obstetrics and Gynecology, Viena.",
        subtype: "Prezentare premiată",
        note: "Best short oral presentation.",
      },
      {
        year: 2017,
        title: "Intrapartum Ultrasound. Twenty Years After. Ecografia in travaliu, „după douăzeci de ani”",
        source: "The 8th Romanian Ian Donald Course / Al XII-lea Congres Național de Medicină Perinatală, Cluj-Napoca.",
        subtype: "Prezentare",
      },
      {
        year: 2017,
        title: "Progesteronul primului trimestru sau primul trimestru al progesteronului? Mit, marketing medical, beneficii reale.",
        source: "International Conference New Perspectives in Obstetrics and Gynecology, Iași.",
        subtype: "Prezentare",
      },
      {
        year: 2016,
        title: "Quantitative Fluorescence PCR in the prenatal diagnosis of fetal aneuploidies – experience from Regional Centre of Medical Genetics Dolj",
        source: "9th Conference of Genetics, Alba Iulia.",
        subtype: "Premiu",
        note: "Locul I.",
      },
      {
        year: 2015,
        title: "CNS abnormalities at 11-14 weeks",
        source: "EUROSON / EFSUMB and HSUMB Congress.",
        subtype: "Prezentare",
      },
      {
        year: 2015,
        title: "Controversies on early diagnosis of fetal brain anomalies",
        source: "The 4th International Fetal Neurology Conference, București.",
        subtype: "Prezentare",
      },
      {
        year: 2015,
        title: "The sonopartogram – Friend or foe for the clinical exam?",
        source: "The 3rd Congress of the Romanian Society of Ultrasound in Obstetrics and Gynecology, București.",
        subtype: "Prezentare",
      },
      {
        year: 2015,
        title: "Anatomia fetală la 11-14 săptămâni",
        source: "Conferința Screening-ul de prim trimestru, Fetal Medicine Foundation și Medicina fetală, Timișoara.",
        subtype: "Prezentare",
      },
      {
        year: 2015,
        title: "Anomalii fetale în primul trimestru - depistabile / când și ce anume?",
        source: "Conferința Screening-ul de prim trimestru, Fetal Medicine Foundation și Medicina fetală, Timișoara.",
        subtype: "Prezentare",
      },
      {
        year: 2014,
        title: "Controversies of early anomaly scan. General considerations and multicentric experience",
        source: "The 6th Romanian Ian Donald Course, Cluj-Napoca.",
        subtype: "Prezentare",
      },
      {
        year: 2013,
        title: "Transperineal ultrasound. The next step in the delivery room",
        source: "Ian Donald School of Ultrasound, Greek Branch, 5th Advanced Course of Ultrasound in Obstetrics and Gynecology, Atena.",
        subtype: "Prezentare",
      },
      {
        year: 2013,
        title: "First trimester anomaly scan",
        source: "Ian Donald School of Ultrasound, Greek Branch, 5th Advanced Course of Ultrasound in Obstetrics and Gynecology, Atena.",
        subtype: "Prezentare",
      },
      {
        year: 2012,
        title: "Early Detection Of Fetal Cardiovascular Anomalies",
        source: "Target Meeting’s 2nd World Cardiovascular, Diabetes, and Obesity Online Conference.",
        subtype: "Prezentare",
      },
      {
        year: 2011,
        title: "Intrapartum ultrasonography",
        source: "Ian Donald School, Greek Branch, 5th Advanced Course of Ultrasound in Obstetrics and Gynecology, Atena.",
        subtype: "Prezentare",
      },
    ]),
  },
];
