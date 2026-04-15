type AcademicSectionProps = {
  title: string;
  body: string;
  items: string[];
};

export function AcademicSection({ title, body, items }: AcademicSectionProps) {
  return (
    <section className="rounded-[2rem] border border-[var(--color-border)] bg-white p-6 shadow-[0_20px_55px_rgba(15,35,42,0.05)] sm:p-8">
      <h3 className="font-display text-3xl leading-none tracking-[-0.03em] text-[var(--color-ink)]">{title}</h3>
      <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">{body}</p>
      <ul className="mt-6 grid gap-3">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-4 text-sm leading-7 text-[var(--color-ink)]"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
