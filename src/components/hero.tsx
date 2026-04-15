import Image from "next/image";

import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { bookingUrl, primaryPhoneHref, trustIndicators, whatsappHref } from "@/lib/content/site-content";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(42,167,167,0.22),_transparent_32%),linear-gradient(180deg,_#f8fcfc_0%,_#eef7f6_100%)]">
      <div className="absolute inset-y-0 right-0 hidden w-[48%] lg:block">
        <Image
          src="/images/doctor/dominic-iliescu-ginecolog-craiova-1024x683-2.jpg"
          alt="Prof. Univ. Dr. Dominic Iliescu în timpul unei consultații ecografice."
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(248,252,252,0.98)_0%,_rgba(248,252,252,0.85)_22%,_rgba(248,252,252,0.08)_60%,_rgba(248,252,252,0.15)_100%)]" />
      </div>

      <Container className="relative flex min-h-[calc(100svh-5rem)] items-center py-12 sm:py-16">
        <div className="grid w-full gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="max-w-3xl self-center animate-fade-up">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-[var(--color-accent-strong)]">
              Craiova · Obstetrică-ginecologie
            </p>
            <h1 className="font-display text-5xl leading-[0.92] tracking-[-0.05em] text-[var(--color-ink)] sm:text-6xl lg:text-7xl">
              Prof. Univ. Dr.
              <span className="mt-3 block">Dominic Iliescu</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted)] sm:text-xl">
              Îngrijire medicală riguroasă, clară și modernă, pentru femei care caută un specialist cu autoritate reală în obstetrică și ginecologie, susținută de experiență clinică, activitate academică și implicare științifică constantă.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={bookingUrl}>Programează-te</ButtonLink>
              <ButtonLink href={whatsappHref} variant="secondary">
                WhatsApp
              </ButtonLink>
              <ButtonLink href={primaryPhoneHref} variant="ghost">
                Sună acum
              </ButtonLink>
            </div>

            <ul className="mt-10 grid gap-3 text-sm text-[var(--color-ink)] sm:grid-cols-2">
              {trustIndicators.map((item) => (
                <li key={item} className="rounded-2xl border border-white/70 bg-white/72 px-4 py-3 shadow-[0_18px_32px_rgba(15,35,42,0.06)] backdrop-blur">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative min-h-[22rem] overflow-hidden rounded-[2rem] border border-white/80 bg-white/60 shadow-[0_25px_70px_rgba(15,35,42,0.12)] lg:hidden">
            <Image
              src="/images/doctor/dominic-iliescu-ginecolog-craiova-1024x683-2.jpg"
              alt="Prof. Univ. Dr. Dominic Iliescu în timpul unei consultații ecografice."
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
