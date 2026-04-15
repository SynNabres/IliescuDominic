import { Container } from "@/components/container";
import {
  bookingUrl,
  contactLocations,
  navigation,
  primaryPhone,
  primaryPhoneHref,
  siteData,
  whatsappHref,
} from "@/lib/content/site-content";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-ink)] text-white">
      <Container className="grid gap-10 py-14 lg:grid-cols-[1.2fr_0.8fr_1fr]">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent-soft)]">
            Prof. Univ. Dr.
          </p>
          <h2 className="font-display text-4xl leading-none">Dominic Iliescu</h2>
          <p className="max-w-xl text-sm leading-7 text-white/72">
            Obstetrică-ginecologie, medicină materno-fetală și ecografie avansată, cu accent pe claritate medicală, evaluare atentă și trasee de programare ușor de accesat.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <a href={primaryPhoneHref} className="rounded-full border border-white/20 px-4 py-2 transition hover:border-white/50">
              {primaryPhone}
            </a>
            <a href={whatsappHref} className="rounded-full border border-white/20 px-4 py-2 transition hover:border-white/50">
              WhatsApp
            </a>
            <a href={bookingUrl} target="_blank" rel="noreferrer" className="rounded-full border border-white/20 px-4 py-2 transition hover:border-white/50">
              Programează-te
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">Navigație</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/72">
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href="/publicatii" className="transition hover:text-white">
                Publicații
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">Locații și contact</h3>
          <div className="mt-4 space-y-5 text-sm text-white/72">
            <p>{siteData.contact.email}</p>
            <p>{siteData.contact.hours}</p>
            {contactLocations.map((location) => (
              <div key={location.label} className="space-y-1">
                <p className="font-medium text-white">{location.label}</p>
                <p>{location.address}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <Container className="border-t border-white/10 py-5 text-xs leading-6 text-white/56">
        Informațiile au caracter informativ și nu înlocuiesc consultația medicală. Programările sunt confirmate ulterior, în funcție de disponibilitate.
      </Container>
    </footer>
  );
}
