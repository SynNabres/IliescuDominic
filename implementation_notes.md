# Implementation Notes

## Stack
Preferred:
- Next.js App Router
- TypeScript
- reusable components
- static or hybrid rendering where appropriate

## Suggested component set
- Header
- MobileStickyCTA
- Hero
- TrustBadgeRow
- SectionHeading
- ServiceGroup
- PriceRow
- AuthorityCard
- Timeline / milestone block
- AcademicTagGrid
- AccordionPublicationGroup
- ContactCard
- Footer

## Performance
- optimize images
- lazy load non-critical media
- keep above-the-fold fast
- avoid heavy animation libraries unless necessary

## Accessibility
- semantic landmarks
- visible focus states
- keyboard-usable navigation
- sufficient contrast
- labeled form inputs
- accordion accessibility attributes

## SEO
- route-level metadata
- canonical tags
- sitemap
- robots.txt
- JSON-LD schemas
- strong internal linking between Acasă, Despre, Activitate academică, Publicații, Contact, Servicii

## Structured data
Implement:
- Person
- Physician
- MedicalBusiness or LocalBusiness
- WebSite
- BreadcrumbList

## Suggested content handling
Use structured constants or CMS-ready objects for:
- services
- prices
- contact
- authority highlights
- publication categories
- committee memberships
- society memberships

## Important build detail
The Publications page should support future expansion without redesign.
Build it as data-driven accordions rather than hardcoded paragraphs.
