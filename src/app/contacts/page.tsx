import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation, Star } from "lucide-react";

import { clinic } from "@/lib/data/clinic";
import { PageHero } from "@/components/site/page-hero";
import { AppointmentForm } from "@/components/sections/appointment-form";
import { MapEmbed } from "@/components/site/map-embed";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Контакты",
  description: `Стоматология LE DENT в Уфе: ${clinic.address.full}. Запись по телефону ${clinic.phone.display}, ежедневно 10:00–20:00.`,
};

export default function ContactsPage() {
  return (
    <>
      <PageHero
        eyebrow="Контакты"
        title="Запишитесь"
        accent="на приём"
        description="Позвоните, напишите в WhatsApp или оставьте заявку — перезвоним в течение дня и подберём удобное время."
        breadcrumb={[
          { label: "Главная", href: "/" },
          { label: "Контакты", href: "/contacts" },
        ]}
      />

      <section className="px-6 pb-28 lg:px-10">
        <div className="mx-auto grid w-full max-w-7xl gap-6 lg:grid-cols-[1fr_1.1fr]">
          {/* Info */}
          <div className="space-y-5">
            <Reveal>
              <div className="grid gap-px overflow-hidden rounded-3xl border border-border sm:grid-cols-2">
                <InfoCard icon={Phone} label="Телефон" href={clinic.phone.href}>
                  {clinic.phone.display}
                </InfoCard>
                <InfoCard
                  icon={MessageCircle}
                  label="WhatsApp"
                  href={clinic.phone.whatsapp}
                >
                  Написать в мессенджер
                </InfoCard>
                <InfoCard icon={Mail} label="Email" href={`mailto:${clinic.email}`}>
                  {clinic.email}
                </InfoCard>
                <InfoCard icon={Clock} label="Часы работы">
                  {clinic.hours.display}
                </InfoCard>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-3xl border border-border bg-surface/40 p-7">
                <div className="flex items-start gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-mint/25 bg-mint/10 text-mint">
                    <MapPin className="size-5" />
                  </span>
                  <div>
                    <p className="font-display text-xl tracking-tight">
                      {clinic.address.full}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {clinic.address.details}
                    </p>
                  </div>
                </div>
                <Link
                  href={clinic.map.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="2ГИС"
                  className="group mt-6 flex items-center justify-center gap-2 rounded-full border border-border py-3.5 text-sm font-medium transition-colors hover:border-mint/40 hover:text-mint"
                >
                  <Navigation className="size-4" />
                  Открыть в 2ГИС
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="flex items-center gap-4 rounded-3xl border border-mint/20 bg-mint/[0.06] p-7">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-mint/15 text-mint">
                  <Star className="size-5 fill-mint" />
                </span>
                <div>
                  <p className="font-display text-2xl tracking-tight">
                    {clinic.rating.value.toFixed(1)} / 5.0
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {clinic.rating.reviews} отзыв(а) на {clinic.rating.source}
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Map */}
            <Reveal delay={0.16}>
              <MapEmbed />
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.1}>
            <div className="rounded-[2rem] border border-border bg-surface/50 p-7 sm:p-10 lg:sticky lg:top-28">
              <h2 className="font-display text-2xl tracking-tight sm:text-3xl">
                Оставьте заявку
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Первичная консультация — бесплатно.
              </p>
              <div className="mt-8">
                <AppointmentForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function InfoCard({
  icon: Icon,
  label,
  href,
  children,
}: {
  icon: React.ElementType;
  label: string;
  href?: string;
  children: React.ReactNode;
}) {
  const inner = (
    <div className="flex h-full flex-col gap-3 bg-surface/40 p-7 transition-colors duration-300 hover:bg-surface">
      <span className="flex size-10 items-center justify-center rounded-xl border border-mint/25 bg-mint/10 text-mint">
        <Icon className="size-4.5" />
      </span>
      <span className="text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      <span className="font-medium">{children}</span>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
      {inner}
    </a>
  ) : (
    inner
  );
}
