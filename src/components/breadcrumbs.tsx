import Link from "next/link";

import { Container } from "@/components/container";

type BreadcrumbItem = {
  href: string;
  label: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <Container>
      <nav aria-label="Breadcrumb" className="pt-8">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-[var(--color-muted)]">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={item.href} className="flex items-center gap-2">
                {isLast ? (
                  <span aria-current="page" className="font-medium text-[var(--color-ink)]">
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} className="transition hover:text-[var(--color-accent-strong)]">
                    {item.label}
                  </Link>
                )}
                {!isLast ? <span aria-hidden="true">/</span> : null}
              </li>
            );
          })}
        </ol>
      </nav>
    </Container>
  );
}
