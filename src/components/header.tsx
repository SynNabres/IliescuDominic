"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { bookingUrl, navigation } from "@/lib/content/site-content";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-[rgba(247,251,251,0.85)] backdrop-blur-xl">
      <Container className="flex min-h-20 items-center justify-between gap-4">
        <Link href="/" className="flex min-w-0 flex-col">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-strong)]">
            Prof. Univ. Dr.
          </span>
          <span className="font-display text-2xl leading-none text-[var(--color-ink)] sm:text-[2rem]">
            Dominic Iliescu
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigație principală">
          {navigation.map((item) => {
            const active = pathname === item.href;

            return (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition ${
                  active ? "text-[var(--color-accent-strong)]" : "text-[var(--color-muted)] hover:text-[var(--color-ink)]"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href={bookingUrl}>Programează-te</ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[var(--color-ink)] lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label="Deschide meniul"
          onClick={() => setMenuOpen((value) => !value)}
        >
          <div className="flex flex-col gap-1.5">
            <span className={`h-0.5 w-5 bg-current transition ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 bg-current transition ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 bg-current transition ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </Container>

      {menuOpen ? (
        <div id="mobile-nav" className="border-t border-[var(--color-border)] bg-white lg:hidden">
          <Container className="flex flex-col gap-2 py-4">
            {navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    active
                      ? "bg-[var(--color-surface-strong)] text-[var(--color-accent-strong)]"
                      : "text-[var(--color-ink)] hover:bg-[var(--color-surface)]"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              );
            })}
            <ButtonLink href={bookingUrl} className="mt-2">
              Programează-te
            </ButtonLink>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
