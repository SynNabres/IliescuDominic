import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  const styles = {
    primary:
      "bg-[var(--color-accent)] text-white shadow-[0_18px_45px_rgba(16,124,126,0.2)] hover:bg-[var(--color-accent-strong)]",
    secondary:
      "border border-[var(--color-border-strong)] bg-white/85 text-[var(--color-ink)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent-strong)]",
    ghost:
      "text-[var(--color-accent-strong)] hover:bg-[var(--color-surface-strong)]",
  }[variant];

  const shared =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-[0.01em] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-white";

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={`${shared} ${styles} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={`${shared} ${styles} ${className}`}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}
