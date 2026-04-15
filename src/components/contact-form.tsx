"use client";

import { FormEvent, useState } from "react";

import { ButtonLink } from "@/components/button-link";
import { bookingUrl, siteData } from "@/lib/content/site-content";

type FormState = {
  name: string;
  phone: string;
  email: string;
  message: string;
  consent: boolean;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  message: "",
  consent: false,
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      setError("Te rugăm să completezi numele, telefonul și mesajul.");
      return;
    }

    if (!form.consent) {
      setError("Este necesar acordul pentru prelucrarea datelor transmise prin formular.");
      return;
    }

    const subject = `Solicitare programare - ${form.name}`;
    const body = [
      `Nume: ${form.name}`,
      `Telefon: ${form.phone}`,
      form.email ? `Email: ${form.email}` : null,
      "",
      "Mesaj:",
      form.message,
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:${siteData.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSuccess(
      "Solicitarea este pregătită pentru trimitere prin email. Dacă nu se deschide aplicația de email, poți continua telefonic sau prin pagina de programare."
    );
  }

  return (
    <div className="rounded-[2rem] border border-[var(--color-border)] bg-white p-6 shadow-[0_20px_55px_rgba(15,35,42,0.05)] sm:p-8">
      <div className="max-w-2xl">
        <h2 className="font-display text-4xl leading-none tracking-[-0.03em] text-[var(--color-ink)]">
          Trimite o solicitare de contact
        </h2>
        <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
          Mesajele trimise online sunt urmate de confirmare. Pentru situațiile în care dorești o reacție mai rapidă, apelul telefonic și WhatsApp rămân cele mai directe opțiuni.
        </p>
      </div>

      <form className="mt-8 grid gap-5" onSubmit={handleSubmit} noValidate>
        <div className="grid gap-5 md:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium text-[var(--color-ink)]">
            Nume și prenume
            <input
              type="text"
              value={form.name}
              onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
              className="h-12 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 text-[var(--color-ink)] outline-none transition focus:border-[var(--color-accent)]"
            />
          </label>

          <label className="grid gap-2 text-sm font-medium text-[var(--color-ink)]">
            Telefon
            <input
              type="tel"
              value={form.phone}
              onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
              className="h-12 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 text-[var(--color-ink)] outline-none transition focus:border-[var(--color-accent)]"
            />
          </label>
        </div>

        <label className="grid gap-2 text-sm font-medium text-[var(--color-ink)]">
          Email
          <input
            type="email"
            value={form.email}
            onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
            className="h-12 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 text-[var(--color-ink)] outline-none transition focus:border-[var(--color-accent)]"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-[var(--color-ink)]">
          Mesaj
          <textarea
            rows={5}
            value={form.message}
            onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
            className="rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-[var(--color-ink)] outline-none transition focus:border-[var(--color-accent)]"
          />
        </label>

        <label className="flex items-start gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 text-sm leading-7 text-[var(--color-muted)]">
          <input
            type="checkbox"
            checked={form.consent}
            onChange={(event) => setForm((current) => ({ ...current, consent: event.target.checked }))}
            className="mt-1 h-4 w-4 rounded border-[var(--color-border)] text-[var(--color-accent)]"
          />
          Sunt de acord ca datele transmise prin formular să fie folosite exclusiv pentru contactarea mea în legătură cu această solicitare.
        </label>

        {error ? <p className="text-sm font-medium text-rose-700">{error}</p> : null}
        {success ? <p className="text-sm font-medium text-[var(--color-accent-strong)]">{success}</p> : null}

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-accent-strong)]"
          >
            Trimite solicitarea
          </button>
          <ButtonLink href={bookingUrl} variant="secondary">
            Programare directă
          </ButtonLink>
        </div>
      </form>
    </div>
  );
}
