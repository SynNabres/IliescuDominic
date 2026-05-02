import type { PublicationEntry, PublicationGroup } from "@/lib/content/site-content";

const sortEntries = (entries: PublicationEntry[]) =>
  [...entries].sort((left, right) => {
    if (right.year !== left.year) return right.year - left.year;
    return left.title.localeCompare(right.title);
  });

export const publicationGroups: PublicationGroup[] = [
  {
    id: "prizes-distinctions",
    title: "Premii/distincții/medalii",
    description:
      "Distincțiile reunesc premii internaționale și naționale pentru lucrări, prezentări, postere și contribuții editoriale menționate explicit în CV.",
    entries: sortEntries([
      {
        year: 2025,
        title: "Premiul Academiei Române „Daniel Danielopolu”",
        source: "Academia Română, 2025.",
        subtype: "Distincție națională",
        authorsNote: "Dominic-Gabriel Iliescu, Smaranda Belciug.",
      },
      {
        year: 2025,
        title: "Best poster award",
        source:
          "6th National Congress of the East-European Society of Endometriosis and Infertility and 9th National Conference of Romanian HPV Society.",
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
    title: "PrezentÄƒri Ã®n calitate de invitat Ã®n plenul unor manifestÄƒri ÅŸtiinÅ£ifice sau cursuri internaÈ›ionale È™i naÈ›ionale",
    description:
      "SelecÈ›ie curatoriatÄƒ a prelegerilor invitate (internaÈ›ionale È™i naÈ›ionale), organizatÄƒ cronologic, pe baza listei furnizate pentru pagina de PublicaÈ›ii.",
    entries: sortEntries([
      {
        year: 2024,
        title: "Urinary pH as borderline in the effectiveness of the treatment of urinary tract infections",
        source: "5th International SREG Congress of Aesthetic Gynecology & Regenerative Medicine, 27 octombrie 2024, BucureÈ™ti.",
        subtype: "Invited plenary",
      },
      {
        year: 2023,
        title: "Up-To-Date in the Management of Urinary Tract Infections",
        source: "4th SREG International Conference, Romanian Society of Aesthetic Gynecology, 15-17 septembrie 2023, Bucharest (Moderator).",
        subtype: "Invited plenary",
      },
      {
        year: 2023,
        title: "Obstetric and gynecologic malpractice claims, incidence and causes",
        source: "Hellenic-Romanian Society of Surgery Conference, ediÈ›ia a 3-a, 15-17 iunie 2023, Craiova.",
        subtype: "Invited plenary",
      },
      {
        year: 2022,
        title: "Ultrasound evaluation of maternal trauma at birth",
        source: "The XVIII Congress of Romanian Society of Urogynecology, internaÈ›ional, Malta, 18-21 noiembrie 2022.",
        subtype: "Invited plenary",
      },
      {
        year: 2022,
        title: "First trimester fetal heart interpretation by artificial intelligence",
        source: "The 18th World Federation for Medicine and Biology Congress + SRUMB Annual Conference + EUROSON 2022, TimiÈ™oara, 25-28 mai 2022.",
        subtype: "Invited plenary",
      },
      {
        year: 2022,
        title: "First trimester fetal heart anomalies: detection and histovirtuoscopy confirmation",
        source: "3D/4D VISUS Course, Atena, 24-25 septembrie 2022.",
        subtype: "Invited plenary",
      },
      {
        year: 2022,
        title: "Hysterosonosalpingography â€“ better than expected",
        source: "3D/4D VISUS Course, Atena, 24-25 septembrie 2022.",
        subtype: "Invited plenary",
      },
      {
        year: 2021,
        title: "First trimester CNS tips & tricks and surprises",
        source:
          "Fetal CNS evaluation and Fetal Neurology (University of Athens + IAPM + HSUMB), 25 septembrie 2021.",
        subtype: "Invited plenary",
      },
      {
        year: 2021,
        title: "Portal venous system anomalies: a new prognostic factor in cases of agenesis of ductus venosus?",
        source: "37th Congress of The Fetus as a Patient Society / 1st Congress of Young Scientists of IAPM, 23-25 aprilie 2021, online.",
        subtype: "Invited plenary",
      },
      {
        year: 2021,
        title:
          "Virtual autopsy and confirmation of normal fetal heart anatomy in the first trimester using three-dimensional (3D) reconstruction of histological sections",
        source: "37th Congress of The Fetus as a Patient Society / 1st Congress of Young Scientists of IAPM, 23-25 aprilie 2021, online.",
        subtype: "Invited plenary",
      },
      {
        year: 2020,
        title: "Workshop: How do we manage anomalies of the corpus callosum",
        source: "ISUOG Virtual World Congress, 16-18 octombrie 2020.",
        subtype: "Workshop invitat",
        link: "https://www.isuog.org/events/past-events/world-congress-2021/general-information-2021/meet-the-sponsors/philips.html",
      },
      {
        year: 2020,
        title: "Management of peritoneal carcinomatosis",
        source: "5th Panhellenic Congress of General Surgery, 25-27 septembrie 2020, Ptolemaida, Grecia.",
        subtype: "Invited plenary",
      },
      {
        year: 2019,
        title: "Transperineal ultrasound characterization of station 0",
        source: "First ISLANDS Meeting (International Study Group in Labor and Delivery Sonography), Parma, 18 ianuarie 2019.",
        subtype: "Invited plenary",
      },
      {
        year: 2019,
        title: "Future as an objective past. Correlations of the sonopartogram with classic clinical partogram",
        source: "First ISLANDS Meeting (International Study Group in Labor and Delivery Sonography), Parma, 18 ianuarie 2019.",
        subtype: "Invited plenary",
      },
      {
        year: 2019,
        title: "Fetal venous system. Simplicity is the ultimate sophistication",
        source: "The 9th Romanian Ian Donald Course + Al XIII-lea Congres NaÈ›ional de MedicinÄƒ PerinatalÄƒ, 26-28 septembrie 2019, Cluj-Napoca.",
        subtype: "Invited plenary",
      },
      {
        year: 2018,
        title: "Transperineal intrapartum ultrasound. What is the aim?",
        source: "International Society of Pelviperineology (ISPP) Congress, 4-6 octombrie 2018, BucureÈ™ti.",
        subtype: "Invited plenary",
      },
      {
        year: 2018,
        title: "Definitive diagnosis of major CNS abnormalities: more than a challenge",
        source: "Fetus as a Patient, 18-19 mai 2018, BucureÈ™ti.",
        subtype: "Invited plenary",
      },
      {
        year: 2018,
        title: "Our experience in multidisciplinary approach of patients with congenital malformations and rare diseases. Better counseling and better outcome.",
        source: "1st Congress Perinatal TOTAL Health, 26-30 iunie 2018, Sinaia.",
        subtype: "Invited plenary",
      },
      {
        year: 2017,
        title: "Intrapartum Ultrasound. Twenty Years After. Ecografia Ã®n travaliu, â€ždupÄƒ douÄƒzeci de aniâ€",
        source: "The 8th Romanian Ian Donald Course + Al XII-lea Congres NaÈ›ional de MedicinÄƒ PerinatalÄƒ, 27-28 septembrie 2017, Cluj-Napoca.",
        subtype: "Invited plenary",
      },
      {
        year: 2017,
        title: "Progesteronul primului trimestru sau primul trimestru al progesteronului? Mit, marketing medical, beneficii reale.",
        source:
          "International Conference â€žNew Perspectives in Obstetrics and Gynecologyâ€, 11-13 mai 2017, IaÈ™i.",
        subtype: "Invited plenary",
      },
      {
        year: 2015,
        title: "CNS abnormalities at 11-14 weeks",
        source: "EUROSON / EFSUMB + HSUMB Congress, 6-8 noiembrie 2015.",
        subtype: "Invited plenary",
      },
      {
        year: 2015,
        title: "Controversies on early diagnosis of fetal brain anomalies",
        source: "The 4th International Fetal Neurology Conference, 26-27 martie 2015, BucureÈ™ti.",
        subtype: "Invited plenary",
      },
      {
        year: 2015,
        title: "The sonopartogram â€“ Friend or foe for the clinical exam?",
        source: "The 3rd Congress of the Romanian Society of Ultrasound in Obstetrics and Gynecology, 27-28 martie 2015, BucureÈ™ti.",
        subtype: "Invited plenary",
      },
      {
        year: 2015,
        title: "Anatomia fetalÄƒ la 11-14 sÄƒptÄƒmÃ¢ni",
        source: "ConferinÈ›a Screening-ul de prim trimestru (FMF + Medicina fetalÄƒ), 16-17 mai 2015, TimiÈ™oara.",
        subtype: "Invited plenary",
      },
      {
        year: 2015,
        title: "Anomalii fetale Ã®n primul trimestru - depistabile / cÃ¢nd È™i ce anume?",
        source: "ConferinÈ›a Screening-ul de prim trimestru (FMF + Medicina fetalÄƒ), 16-17 mai 2015, TimiÈ™oara.",
        subtype: "Invited plenary",
      },
      {
        year: 2014,
        title: "Controversies of early anomaly scan. General considerations and multicentric experience",
        source: "Inter-University School of Medical Ultrasound / The 6th Romanian Ian Donald Course, 22-23 octombrie 2014, Cluj-Napoca.",
        subtype: "Invited plenary",
      },
      {
        year: 2013,
        title: "Transperineal ultrasound. The next step in the delivery room",
        source: "Ian Donald School of Ultrasound, Greek Branch, 5th Advanced Course, decembrie 2013, Atena.",
        subtype: "Invited plenary",
      },
      {
        year: 2013,
        title: "First trimester anomaly scan",
        source: "Ian Donald School of Ultrasound, Greek Branch, 5th Advanced Course, decembrie 2013, Atena.",
        subtype: "Invited plenary",
      },
      {
        year: 2012,
        title: "Early Detection Of Fetal Cardiovascular Anomalies",
        source: "Target Meetingâ€™s 2nd World Cardiovascular, Diabetes, and Obesity Online Conference, 11-14 septembrie 2012.",
        subtype: "Invited plenary",
        link: "http://www.targetmeeting.com",
      },
      {
        year: 2011,
        title: "Intrapartum ultrasonography",
        source: "Ian Donald School, Greek Branch, 5th Advanced Course of Ultrasound in Obstetrics and Gynecology, 10-11 decembrie 2011, Atena.",
        subtype: "Invited plenary",
      },
      {
        year: 2024,
        title: "Lector È™i prezidiu la manifestÄƒri/cursuri naÈ›ionale (listÄƒ extinsÄƒ)",
        source:
          "Include temele furnizate pentru 2024 (HPV, SRUOG, Samsung hands-on, TabÄƒra de varÄƒ, medicinÄƒ fetalÄƒ, IA Ã®n diagnostic prenatal, histeroscopie, genomicÄƒ, medicinÄƒ comunitarÄƒ, TACSYD, morfologie microscopicÄƒ, conferinÈ›e regionale È™i naÈ›ionale).",
        subtype: "ColecÈ›ie naÈ›ionalÄƒ",
      },
      {
        year: 2023,
        title: "Lector È™i prezidiu la manifestÄƒri/cursuri naÈ›ionale (listÄƒ extinsÄƒ)",
        source:
          "Include temele furnizate pentru 2023 (SRUOG, forumuri naÈ›ionale, workshopuri Samsung, cursuri È™i webinare, prezentÄƒri de cazuri È™i sesiuni de training).",
        subtype: "ColecÈ›ie naÈ›ionalÄƒ",
      },
      {
        year: 2022,
        title: "Lector È™i prezidiu la manifestÄƒri/cursuri naÈ›ionale (listÄƒ extinsÄƒ)",
        source:
          "Include temele furnizate pentru 2022 (congrese SOG/SRUOG, forumuri, conferinÈ›e de medicinÄƒ de familie, cursuri precongres È™i activitate de prezidiu/comitete).",
        subtype: "ColecÈ›ie naÈ›ionalÄƒ",
      },
      {
        year: 2021,
        title: "Lector È™i prezidiu la manifestÄƒri/cursuri naÈ›ionale (listÄƒ extinsÄƒ)",
        source:
          "Include temele furnizate pentru 2021 (HPV, endometriozÄƒ, SRUOG, ANMCS, vaccinarea Ã®n sarcinÄƒ, perinatologie, morfologie microscopicÄƒ).",
        subtype: "ColecÈ›ie naÈ›ionalÄƒ",
      },
      {
        year: 2022,
        title: "Simpozioane È™i webinarii (selecÈ›ie din lista furnizatÄƒ)",
        source:
          "Seria include webinarii È™i simpozioane interdisciplinare 2016-2022 privind microbiota, HMB, fibrom uterin, contracepÈ›ie, vaccinare Ã®n sarcinÄƒ, anemie feriprivÄƒ, infecÈ›ii vaginale È™i screening cervical.",
        subtype: "Simpozioane/webinarii",
      },
    ]),
  },
  {
    id: "books",
    title: "CÄƒrÈ›i È™i volume coordonate",
    description:
      "Volumele coordonate È™i lucrÄƒrile editoriale majore contureazÄƒ direcÈ›iile centrale de expertizÄƒ clinicÄƒ, universitarÄƒ È™i È™tiinÈ›ificÄƒ.",
    entries: sortEntries([
      {
        year: 2024,
        title: "Inovation in Obstetrics and Gynecology",
        source: "Editura Medichub Media, BucureÈ™ti.",
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
        source: "Editura MedicalÄƒ UniversitarÄƒ Craiova.",
        note: "ISBN 978-973-106-351-5.",
      },
      {
        year: 2022,
        title: "Ginecologia",
        source: "Editura MedicalÄƒ UniversitarÄƒ Craiova.",
        note: "ISBN 978-973-106-366-9.",
      },
      {
        year: 2016,
        title: "Ultrasound in Obstetrics. Atlas",
        source: "Editura MedicalÄƒ UniversitarÄƒ Craiova.",
        note: "ISBN 978-973-106-278-5.",
      },
      {
        year: 2016,
        title: "Ultrasound in Gynecology",
        source: "Editura MedicalÄƒ UniversitarÄƒ Craiova.",
        note: "ISBN 978-973-106-279-2.",
      },
      {
        year: 2016,
        title: "Essential in Colposcopy",
        source: "Editura MedicalÄƒ UniversitarÄƒ Craiova.",
        note: "ISBN 978-973-106-277-8.",
      },
    ]),
  },
  {
    id: "international-chapters",
    title: "Capitole internaÈ›ionale",
    description:
      "Capitolele publicate Ã®n volume internaÈ›ionale reunesc contribuÈ›ii din ecografie, medicinÄƒ fetalÄƒ, inteligenÈ›Äƒ artificialÄƒ È™i obstetricÄƒ modernÄƒ.",
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
        note: "ContribuÈ›ii multiple Ã®n acelaÈ™i volum.",
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
    title: "Capitole È™i contribuÈ›ii naÈ›ionale",
    description:
      "ContribuÈ›iile naÈ›ionale reunesc capitole universitare, manuale È™i monografii care susÈ›in activitatea didacticÄƒ È™i practica de specialitate.",
    entries: sortEntries([
      {
        year: 2024,
        title: "Influence of COVID pandemics on family and womenâ€™s health",
        source: "Natality and Family Health at the Beginning of XXIst Century, Romanian Academy, Editura Magic Print.",
      },
      {
        year: 2020,
        title: "Ultrasound in Obstetrics and Gynecology",
        source: "General sonography, Editura MedicalÄƒ UniversitarÄƒ Craiova.",
      },
      {
        year: 2020,
        title: "Management of HSIL lesions",
        source: "Diagnosis and management of cervical intraepithelial neoplasia, Editura UniversitarÄƒ â€žIuliu HaÈ›ieganuâ€ Cluj-Napoca.",
      },
      {
        year: 2020,
        title: "Ultrasound evaluation of the cervix; Low genital tract infections",
        source: "Textbook of low genital tract conditions, Editura UniversitarÄƒ â€žCarol Davilaâ€, BucureÈ™ti.",
        note: "ContribuÈ›ii grupate Ã®n acelaÈ™i volum.",
      },
      {
        year: 2020,
        title: "Ultrasound investigation of endometrium",
        source: "Modern investigation of the endometrial pathology, Editura UniversitarÄƒ â€žCarol Davilaâ€, BucureÈ™ti.",
      },
      {
        year: 2016,
        title: "Nursing in Obstetrics and Gynecology",
        source: "Editura MedicalÄƒ UniversitarÄƒ Craiova.",
      },
      {
        year: 2016,
        title: "Ovarian cancer; Mammary cancer; Pelvic static disorders; Urinary incontinence; Postoperative management in gynecologic pathology",
        source: "Manual of Gynecology & Nursing, Vol. II, Editura MedicalÄƒ UniversitarÄƒ Craiova.",
        note: "Capitole grupate Ã®n acelaÈ™i volum.",
      },
      {
        year: 2015,
        title: "Ultrasound evaluation in pregnancy in Diabetes pregnancies",
        source: "Pregnancy and Diabetes. New approaches for diagnosis and monitoring, Editura UniversitarÄƒ â€žCarol Davilaâ€, BucureÈ™ti.",
      },
      {
        year: 2010,
        title:
          "Paraclinic investigations in Gynecology; Benign pathology in vulval and vaginal dysplasia; Dystrophic and tumoral ovarian pathology; Dystrophic and tumoral breast pathology",
        source: "Gynecology & Nursing, Vol. I, Editura MedicalÄƒ UniversitarÄƒ Craiova.",
        note: "Capitole grupate Ã®n acelaÈ™i volum.",
      },
      {
        year: 2009,
        title: "Cervical pathology",
        source: "Monografie, Editura MedicalÄƒ UniversitarÄƒ Craiova.",
      },
      {
        year: 2009,
        title: "Symptomatology and clinical diagnosis in cervical conditions; Management of cervical conditions",
        source: "Pathology of the uterine cervix, manual for the post university course, Editura MedicalÄƒ UniversitarÄƒ Craiova.",
      },
      {
        year: 2007,
        title: "Gynecology",
        source: "Editura MedicalÄƒ UniversitarÄƒ Craiova.",
        note: "Coautor / colaborator.",
      },
      {
        year: 2007,
        title: "Obstetrics",
        source: "Editura MedicalÄƒ UniversitarÄƒ Craiova.",
        note: "Coautor / colaborator.",
      },
      {
        year: 2005,
        title: "Gynecology",
        source: "Editura MedicalÄƒ UniversitarÄƒ Craiova.",
        note: "ISBN 973-7757-23-8.",
      },
      {
        year: 2005,
        title: "Obstetrics",
        source: "Editura MedicalÄƒ UniversitarÄƒ Craiova.",
        note: "ISBN 973-7757-06-8.",
      },
    ]),
  },
  {
    id: "translations",
    title: "Traduceri È™i coordonare editorialÄƒ",
    description:
      "Coordonarea ediÈ›iilor romÃ¢neÈ™ti È™i traducerile editoriale completeazÄƒ activitatea academicÄƒ prin transfer de standarde È™i conÈ›inut de referinÈ›Äƒ.",
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
        source: "Callenâ€™s Ultrasonography in Obstetrics and Gynecology, 6th ed., ediÈ›ia romÃ¢neascÄƒ, Editura Hipocrate.",
      },
      {
        year: 2016,
        title: "Obstetrical haemorrhage",
        source: "Williams Obstetrics, ediÈ›ia romÃ¢neascÄƒ, Editura Hipocrate.",
        note: "ISBN 9789738837270.",
      },
    ]),
  },
  {
    id: "isuog-guidelines",
    title: "Ghiduri ISUOG È™i recomandÄƒri",
    description:
      "Traducerile È™i reviziile ISUOG susÈ›in accesul la recomandÄƒri internaÈ›ionale importante pentru practica zilnicÄƒ Ã®n ecografie È™i medicinÄƒ fetalÄƒ.",
    entries: sortEntries([
      {
        year: 2019,
        title: "ISUOG Education Committee recommendations for basic training in obstetric and gynecological ultrasound",
        source: "Traducere È™i revizie Ã®n limba romÃ¢nÄƒ.",
        note: "Editor / reviewer: Dr. Iliescu Dominic Gabriel.",
      },
      {
        year: 2018,
        title: "Practice Guidelines: invasive procedure for prenatal diagnosis",
        source: "Traducere Ã®n limba romÃ¢nÄƒ.",
      },
      {
        year: 2018,
        title: "Practice Guidelines: role of ultrasound in twin pregnancy",
        source: "Traducere Ã®n limba romÃ¢nÄƒ.",
      },
      {
        year: 2018,
        title: "Practice guidelines for performance of the routine mid-trimester fetal ultrasound scan",
        source: "Traducere Ã®n limba romÃ¢nÄƒ.",
      },
      {
        year: 2018,
        title: "ISUOG Practice Guidelines: use of Doppler ultrasonography in obstetrics",
        source: "Traducere Ã®n limba romÃ¢nÄƒ.",
      },
      {
        year: 2017,
        title: "Sonographic examination of the fetal central nervous system for performing the â€œbasic examinationâ€ and the â€œfetal neurosonogramâ€",
        source: "Traducere Ã®n limba romÃ¢nÄƒ.",
      },
      {
        year: 2016,
        title: "ISUOG Interim Guidance on ultrasound for Zika virus infection in pregnancy: information for healthcare professionals",
        source: "Traducere Ã®n limba romÃ¢nÄƒ.",
      },
    ]),
  },
  {
    id: "national-guidelines",
    title: "Ghiduri naÈ›ionale de bunÄƒ practicÄƒ",
    description:
      "Ghidurile naÈ›ionale sunt prezentate individual, pentru a pÄƒstra claritatea tematicÄƒ È™i a reflecta corect contribuÈ›iile editoriale distincte.",
    entries: sortEntries([
      { year: 2017, title: "Pregnancy monitoring", source: "Ghid naÈ›ional de bunÄƒ practicÄƒ Ã®n obstetricÄƒ È™i ginecologie." },
      { year: 2017, title: "Pregnancy booklet", source: "Ghid naÈ›ional de bunÄƒ practicÄƒ Ã®n obstetricÄƒ È™i ginecologie." },
      { year: 2017, title: "Pelvic Inflammatory Disease", source: "Ghid naÈ›ional de bunÄƒ practicÄƒ Ã®n obstetricÄƒ È™i ginecologie." },
      {
        year: 2017,
        title: "Diagnosis and Management of Intrauterine Growth Restriction",
        source: "Ghid naÈ›ional de bunÄƒ practicÄƒ Ã®n obstetricÄƒ È™i ginecologie.",
      },
      {
        year: 2017,
        title: "Ultrasonographic screening for fetal anomalies in the 1st trimester",
        source: "Ghid naÈ›ional de bunÄƒ practicÄƒ Ã®n obstetricÄƒ È™i ginecologie.",
      },
      {
        year: 2017,
        title: "Ultrasonographic screening for fetal anomalies in the 2nd trimester",
        source: "Ghid naÈ›ional de bunÄƒ practicÄƒ Ã®n obstetricÄƒ È™i ginecologie.",
      },
      {
        year: 2017,
        title: "Ultrasonographic screening for fetal anomalies in the 3rd trimester",
        source: "Ghid naÈ›ional de bunÄƒ practicÄƒ Ã®n obstetricÄƒ È™i ginecologie.",
      },
      {
        year: 2017,
        title: "Implementation of Non-invasive Prenatal Testing during the standard screening for chromosomal abnormalities",
        source: "Ghid naÈ›ional de bunÄƒ practicÄƒ Ã®n obstetricÄƒ È™i ginecologie.",
      },
      { year: 2017, title: "Birth in cephalic presentation", source: "Ghid naÈ›ional de bunÄƒ practicÄƒ Ã®n obstetricÄƒ È™i ginecologie." },
      { year: 2017, title: "Birth in pelvic presentation", source: "Ghid naÈ›ional de bunÄƒ practicÄƒ Ã®n obstetricÄƒ È™i ginecologie." },
      { year: 2017, title: "Gynecological ultrasound examination", source: "Ghid naÈ›ional de bunÄƒ practicÄƒ Ã®n obstetricÄƒ È™i ginecologie." },
      { year: 2017, title: "Placental abruption", source: "Ghid naÈ›ional de bunÄƒ practicÄƒ Ã®n obstetricÄƒ È™i ginecologie." },
    ]),
  },
  {
    id: "abstracts",
    title: "Abstracte È™i prezentÄƒri la congrese",
    description:
      "Lista reuneÈ™te rezumate, postere premiate È™i comunicÄƒri la congrese sau cursuri naÈ›ionale È™i internaÈ›ionale",
    entries: sortEntries([
      {
        year: 2024,
        title: "Urinary pH as borderline in the effectiveness of the treatment of urinary tract infections",
        source: "5th International SREG Congress of Aesthetic Gynecology & Regenerative Medicine, BucureÈ™ti.",
        subtype: "Prezentare",
      },
      {
        year: 2024,
        title: "Evaluation of Ultrasonographic and morphopatologic findings in spina bifida",
        source: "Al 12-lea Congres SRUOG È™i a 9-a ConferinÈ›Äƒ NaÈ›ionalÄƒ a SocietÄƒÈ›ii RomÃ¢ne de HPV.",
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
        source: "National Congress of Fetal and Neonatal Medicine, BucureÈ™ti.",
        subtype: "Poster premiat",
        note: "Best poster award.",
      },
      {
        year: 2022,
        title: "Ultrasound evaluation of maternal trauma at birth",
        source: "The 18th World Federation for Ultrasound in Medicine and Biology Congress / EUROSON 2022, TimiÈ™oara.",
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
        title: "Hysterosonosalpingography â€“ better than expected",
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
        source: "Craiova International Medical Studentsâ€™ Conference.",
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
        source: "The 9th Romanian Ian Donald Course / Al XIII-lea Congres NaÈ›ional de MedicinÄƒ PerinatalÄƒ, Cluj-Napoca.",
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
        source: "International Society of Pelviperineology Congress, BucureÈ™ti.",
        subtype: "Prezentare",
      },
      {
        year: 2018,
        title: "Definitive diagnosis of major CNS abnormalities: more than a challenge",
        source: "Fetus as a Patient, BucureÈ™ti.",
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
        source: "17th Congress of Romanian Society of Obstetrics and Gynecology, IaÈ™i.",
        subtype: "Premiu",
        note: "Locul III.",
      },
      {
        year: 2017,
        title: "MRI at station 0 in a small series: how well performs the ultrasound estimations?",
        source: "27th World Congress on Ultrasound in Obstetrics and Gynecology, Viena.",
        subtype: "Prezentare premiatÄƒ",
        note: "Best short oral presentation.",
      },
      {
        year: 2017,
        title: "Intrapartum Ultrasound. Twenty Years After. Ecografia in travaliu, â€ždupÄƒ douÄƒzeci de aniâ€",
        source: "The 8th Romanian Ian Donald Course / Al XII-lea Congres NaÈ›ional de MedicinÄƒ PerinatalÄƒ, Cluj-Napoca.",
        subtype: "Prezentare",
      },
      {
        year: 2017,
        title: "Progesteronul primului trimestru sau primul trimestru al progesteronului? Mit, marketing medical, beneficii reale.",
        source: "International Conference New Perspectives in Obstetrics and Gynecology, IaÈ™i.",
        subtype: "Prezentare",
      },
      {
        year: 2016,
        title: "Quantitative Fluorescence PCR in the prenatal diagnosis of fetal aneuploidies â€“ experience from Regional Centre of Medical Genetics Dolj",
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
        source: "The 4th International Fetal Neurology Conference, BucureÈ™ti.",
        subtype: "Prezentare",
      },
      {
        year: 2015,
        title: "The sonopartogram â€“ Friend or foe for the clinical exam?",
        source: "The 3rd Congress of the Romanian Society of Ultrasound in Obstetrics and Gynecology, BucureÈ™ti.",
        subtype: "Prezentare",
      },
      {
        year: 2015,
        title: "Anatomia fetalÄƒ la 11-14 sÄƒptÄƒmÃ¢ni",
        source: "ConferinÈ›a Screening-ul de prim trimestru, Fetal Medicine Foundation È™i Medicina fetalÄƒ, TimiÈ™oara.",
        subtype: "Prezentare",
      },
      {
        year: 2015,
        title: "Anomalii fetale Ã®n primul trimestru - depistabile / cÃ¢nd È™i ce anume?",
        source: "ConferinÈ›a Screening-ul de prim trimestru, Fetal Medicine Foundation È™i Medicina fetalÄƒ, TimiÈ™oara.",
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
        source: "Target Meetingâ€™s 2nd World Cardiovascular, Diabetes, and Obesity Online Conference.",
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
