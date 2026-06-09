import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ArrowUpRight, Star } from "lucide-react";

import { clinic } from "@/lib/data/clinic";
import { navLinks } from "@/lib/data/nav";
import { services } from "@/lib/data/services";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-surface/30">
      <div className="pointer-events-none absolute -top-40 left-1/2 size-[34rem] -translate-x-1/2 rounded-full bg-mint/10 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-24 pb-10 lg:px-10">
        {/* CTA */}
        <div className="flex flex-col items-start justify-between gap-10 pb-20 lg:flex-row lg:items-end">
          <h2 className="max-w-2xl font-display text-fluid-display tracking-tight text-balance">
            <TextReveal text="Запишитесь на" by="word" />{" "}
            <span className="text-gradient-mint italic">
              <TextReveal text="бесплатную консультацию" by="word" />
            </span>
          </h2>

          <Link
            href={clinic.phone.href}
            data-cursor="Звонок"
            className="group flex shrink-0 items-center gap-3 rounded-full bg-mint px-8 py-5 text-lg font-semibold text-primary-foreground transition-shadow duration-300 hover:shadow-[0_0_40px_-6px] hover:shadow-mint/60"
          >
            {clinic.phone.display}
            <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="hairline" />

        {/* Columns */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 py-16 lg:grid-cols-12">
          <div className="col-span-2 lg:col-span-4">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="size-2.5 rounded-full bg-mint shadow-[0_0_14px_2px] shadow-mint/50" />
              <span className="font-display text-xl font-semibold">LE DENT</span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {clinic.description}
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-2">
              <Star className="size-4 fill-mint text-mint" />
              <span className="text-sm font-medium">
                {clinic.rating.value.toFixed(1)} · {clinic.rating.source}
              </span>
              <span className="text-sm text-muted-foreground">
                {clinic.rating.reviews} отзыв(а)
              </span>
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Навигация
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/80 transition-colors hover:text-mint"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Услуги
            </h3>
            <ul className="mt-5 space-y-3">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-foreground/80 transition-colors hover:text-mint"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-3">
            <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Контакты
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <ContactRow icon={MapPin}>
                {clinic.address.full}
                <span className="block text-muted-foreground">
                  {clinic.address.details}
                </span>
              </ContactRow>
              <ContactRow icon={Phone} href={clinic.phone.href}>
                {clinic.phone.display}
              </ContactRow>
              <ContactRow icon={Mail} href={`mailto:${clinic.email}`}>
                {clinic.email}
              </ContactRow>
              <ContactRow icon={Clock}>{clinic.hours.display}</ContactRow>
            </ul>
          </div>
        </div>

        <div className="hairline" />

        <Reveal className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} LE DENT · Стоматология в Уфе. Все права
            защищены.
          </p>
          <p>
            Лицензия на медицинскую деятельность. Имеются противопоказания,
            необходима консультация специалиста.
          </p>
        </Reveal>
      </div>
    </footer>
  );
}

function ContactRow({
  icon: Icon,
  href,
  children,
}: {
  icon: React.ElementType;
  href?: string;
  children: React.ReactNode;
}) {
  const content = (
    <span className="flex items-start gap-3 text-foreground/80 transition-colors hover:text-mint">
      <Icon className="mt-0.5 size-4 shrink-0 text-mint" />
      <span className="leading-snug">{children}</span>
    </span>
  );
  return <li>{href ? <Link href={href}>{content}</Link> : content}</li>;
}
