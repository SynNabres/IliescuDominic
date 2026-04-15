# agent.md

## Project identity

Build a premium standalone personal medical website for **Prof. Univ. Dr. Dominic Iliescu**, OB-GYN specialist in Craiova.

This is a **personal brand website**, not a generic clinic page and not a copy of the clinic website.
Its primary goal is to **increase appointment bookings** while strengthening trust, authority, and premium positioning.

The website must feel like the digital home of:
- a leading OB-GYN specialist in Craiova
- a physician with strong academic and scientific authority
- a specialist in maternal-fetal medicine, advanced obstetric ultrasound, gynecology, cervical pathology, hysteroscopy, infertility-related evaluation, and evidence-based women’s care

## Core build principles

### 1. Patient-facing Romanian copy only
All visible copy must be in Romanian and ready for real review.
Do not use placeholder text.
Do not use meta wording such as:
- „acest site”
- „această pagină”
- „în această secțiune”
- „adaugați aici”
- „sample content”
- „text SEO”

### 2. Premium medical aesthetic
The site should feel visually aligned with the GinEcho family:
- white / soft neutral base
- teal / turquoise / blue-green accent palette
- premium whitespace
- elegant typography
- refined cards and sections
- calm, modern, trustworthy tone

Do not make it visually identical to ginecho.ro.
Keep it in the same aesthetic family, but more personal, premium, and authority-led.

### 3. Conversion-first
The site must help users:
- book
- call
- start a WhatsApp conversation
- understand services and prices
- quickly trust the physician

Primary CTA:
- Programează-te

Secondary CTAs:
- WhatsApp
- Sună acum

On mobile, include a sticky bottom action bar with:
- Sună
- WhatsApp
- Programează-te

### 4. Authority must be visible
This website must strongly communicate:
- professor status
- academic role
- scientific activity
- publication history
- national and international society memberships
- committee and commission involvement
- institutional leadership and training activity

But it must still remain clear and readable for patients.

### 5. No exaggerated claims
Do not claim:
- guaranteed outcomes
- “cel mai bun”
- “numărul 1”
- cures or impossible certainty

Tone must remain:
- calm
- rigorous
- refined
- medically responsible
- reassuring
- human

---

## Allowed top-level pages

Build only these top-level pages:
- Acasă
- Despre
- Servicii
- Activitate academică
- Contact
- Publicații

Do not create additional top-level pages unless required internally by the framework.

Header navigation:
- Acasă
- Despre
- Servicii
- Activitate academică
- Contact
and a visible CTA button:
- Programează-te

---

## Page requirements

### Acasă
Must include:
- hero with strong name/title positioning
- short subtitle combining clinical + academic authority
- CTA buttons
- trust indicators
- featured services preview
- featured pricing preview
- authority / academic preview
- clear booking section
- final contact CTA

### Despre
Must include:
- a custom Romanian profile
- emphasis on authority in obstetrics and gynecology
- academic stature
- extensive publication history
- committee and society involvement
- modern evidence-based medical practice
- a button to Publicații

Required button:
- Vezi publicațiile

### Servicii
Use the services and prices from `site_data.json`.
Do not split them into many separate pages.
Create one elegant Services page with grouped sections, short explanations, and visible prices.

### Activitate academică
Must present authority in a curated, elegant way.
Suggested sections:
- Poziție academică și formare
- Activitate universitară
- Coordonare doctorală și formare medicală
- Direcții de cercetare și proiecte
- Societăți profesionale și comitete
- Activitate editorială și peer review
- CTA către Publicații

### Publicații
Create a dedicated page inspired by the interaction pattern of the publications page on rodicanagy.ro/publicatii.html:
- collapsible grouped categories
- elegant list structure
- readable academic design
- year + title treatment
- optional external links when available

### Contact
Must include:
- phone
- email
- WhatsApp CTA
- booking CTA
- working hours
- location blocks
- map links or embed
- short contact form
- legal consent checkbox

---

## Structured content priority

The build must use:
- `site_data.json` for services, prices, contact, and key academic facts
- `copy_deck_ro.md` for visible copy direction
- `publications_blueprint.md` for Publications page organization

---

## UX requirements

### Mobile-first
Prioritize mobile first:
- sticky CTA bar
- thumb-friendly buttons
- readable content blocks
- elegant accordions
- easy-to-scan services and prices

### Desktop
Desktop should feel spacious, premium, and deliberate, not empty.

---

## SEO requirements

Strong local and branded SEO is mandatory.

Target naturally:
- Dominic Iliescu
- Dominic Iliescu Craiova
- Dr Dominic Iliescu
- ginecolog Craiova
- obstetrică-ginecologie Craiova
- ecografie sarcină Craiova
- morfologie fetală Craiova
- videocolposcopie Craiova
- consiliere infertilitate Craiova

Requirements:
- unique metadata per page
- clean slugs
- semantic H1/H2 hierarchy
- internal links
- Romanian local SEO language
- Open Graph
- alt text
- schema

Implement schema for:
- Person
- Physician
- MedicalBusiness or LocalBusiness
- WebSite
- BreadcrumbList
- FAQPage where appropriate

---

## Technical preference

Preferred stack:
- Next.js
- modern React
- reusable components
- excellent performance
- strong mobile UX
- metadata system
- sitemap
- robots.txt
- accessible components
- image optimization

---

## Final quality bar

The result should feel:
- premium
- calm
- authoritative
- medically serious
- human
- conversion-oriented
- near-launch-ready

Do not leave:
- placeholders
- editor notes
- wireframe copy
- generic filler
- self-referential copy
