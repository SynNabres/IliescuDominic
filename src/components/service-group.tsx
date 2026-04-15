import { ButtonLink } from "@/components/button-link";
import { formatPrice, ServiceCategory, whatsappHref } from "@/lib/content/site-content";

type ServiceGroupProps = {
  category: ServiceCategory;
};

export function ServiceGroup({ category }: ServiceGroupProps) {
  return (
    <section className="rounded-[2rem] border border-[var(--color-border)] bg-white p-6 shadow-[0_24px_60px_rgba(15,35,42,0.06)] sm:p-8">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent-strong)]">
          {category.title}
        </p>
        <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">{category.intro}</p>
      </div>

      <div className="mt-8 divide-y divide-[var(--color-border)]">
        {category.services.map((service) => (
          <div key={service.name} className="grid gap-5 py-6 lg:grid-cols-[1.5fr_0.55fr_0.55fr] lg:items-center">
            <div>
              <h3 className="text-lg font-semibold text-[var(--color-ink)]">{service.name}</h3>
              <p className="mt-2 max-w-3xl text-sm leading-7 text-[var(--color-muted)]">{service.description}</p>
            </div>
            <p className="text-lg font-semibold text-[var(--color-accent-strong)]">{formatPrice(service.price)}</p>
            <div className="flex flex-wrap justify-start gap-3 lg:justify-end">
              <ButtonLink href={whatsappHref} variant="secondary" className="px-4 py-2.5 text-xs">
                WhatsApp
              </ButtonLink>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
