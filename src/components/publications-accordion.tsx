import { PublicationGroup } from "@/lib/content/site-content";

type PublicationsAccordionProps = {
  groups: PublicationGroup[];
};

export function PublicationsAccordion({ groups }: PublicationsAccordionProps) {
  return (
    <div className="space-y-4">
      {groups.map((group, index) => (
        <details
          key={group.id}
          className="group rounded-[2rem] border border-[var(--color-border)] bg-white p-6 shadow-[0_20px_55px_rgba(15,35,42,0.05)]"
          open={index === 0}
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-xl font-semibold text-[var(--color-ink)]">{group.title}</h3>
                <span className="inline-flex rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">
                  {group.entries.length} articole
                </span>
              </div>
              <p className="mt-2 max-w-3xl text-sm leading-7 text-[var(--color-muted)]">{group.description}</p>
            </div>
            <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-accent-strong)] transition group-open:rotate-45">
              +
            </span>
          </summary>
          <div className="mt-6 divide-y divide-[var(--color-border)]">
            {group.entries.map((entry) => (
              <article key={`${group.id}-${entry.year}-${entry.title}`} className="grid gap-3 py-5 sm:grid-cols-[5rem_1fr]">
                <div className="pt-1">
                  <span className="inline-flex rounded-full bg-[var(--color-surface-strong)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">
                    {entry.year}
                  </span>
                </div>
                <div>
                  <h4 className="text-base font-semibold leading-7 text-[var(--color-ink)]">{entry.title}</h4>
                  {entry.subtype ? (
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">{entry.subtype}</p>
                  ) : null}
                  {entry.source ? <p className="mt-1 text-sm leading-7 text-[var(--color-muted)]">{entry.source}</p> : null}
                  {entry.authorsNote ? <p className="mt-1 text-sm leading-7 text-[var(--color-muted)]">{entry.authorsNote}</p> : null}
                  {entry.note ? <p className="mt-1 text-sm leading-7 text-[var(--color-muted)]">{entry.note}</p> : null}
                  {entry.link || entry.doi ? (
                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                      {entry.link ? (
                        <a
                          href={entry.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex text-sm font-semibold text-[var(--color-accent-strong)] transition hover:text-[var(--color-accent)]"
                        >
                          Deschide sursa
                        </a>
                      ) : null}
                      {entry.doi && entry.doi !== entry.link ? (
                        <a
                          href={entry.doi}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex text-sm font-semibold text-[var(--color-accent-strong)] transition hover:text-[var(--color-accent)]"
                        >
                          DOI
                        </a>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </details>
      ))}
    </div>
  );
}
