import { bookingUrl, primaryPhoneHref, whatsappHref } from "@/lib/content/site-content";

export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[var(--color-border)] bg-white/96 p-3 shadow-[0_-18px_40px_rgba(15,35,42,0.08)] backdrop-blur md:hidden">
      <div className="grid grid-cols-3 gap-2">
        <a href={primaryPhoneHref} className="inline-flex items-center justify-center rounded-2xl border border-[var(--color-border)] px-3 py-3 text-sm font-semibold text-[var(--color-ink)]">
          Sună
        </a>
        <a href={whatsappHref} className="inline-flex items-center justify-center rounded-2xl border border-[var(--color-border)] px-3 py-3 text-sm font-semibold text-[var(--color-ink)]">
          WhatsApp
        </a>
        <a href={bookingUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-2xl bg-[var(--color-accent)] px-3 py-3 text-sm font-semibold text-white">
          Programează-te
        </a>
      </div>
    </div>
  );
}
