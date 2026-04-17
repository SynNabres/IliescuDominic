type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-3xl ${alignment} ${className}`.trim()}>
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent-strong)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-4xl leading-none tracking-[-0.03em] text-[var(--color-ink)] sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-[var(--color-muted)] sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
