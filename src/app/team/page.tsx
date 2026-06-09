import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Stethoscope } from "lucide-react";

import { team } from "@/lib/data/team";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Команда",
  description:
    "Врачи стоматологии LE DENT в Уфе: терапевты, имплантологи, ортопеды, ортодонты и гигиенисты с опытом от 8 до 14 лет.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Команда"
        title="Специалисты"
        accent="LE DENT"
        description="Профильные врачи с многолетним опытом и постоянным обучением. Каждый ведёт своё направление — от эстетики до сложной имплантации."
        breadcrumb={[
          { label: "Главная", href: "/" },
          { label: "Команда", href: "/team" },
        ]}
      />

      <section className="px-6 pb-28 lg:px-10">
        <div className="mx-auto grid w-full max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((doctor, i) => (
            <Reveal key={doctor.name} delay={(i % 3) * 0.06}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface/40 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-mint/30">
                <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-surface-2 to-graphite">
                  <span className="font-display text-7xl text-mint/80 transition-transform duration-700 group-hover:scale-110">
                    {doctor.initials}
                  </span>
                  <span className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-border bg-graphite/70 px-3 py-1 text-xs backdrop-blur">
                    <Stethoscope className="size-3.5 text-mint" />
                    {doctor.experience} опыта
                  </span>
                </div>

                <div className="mt-6 flex flex-1 flex-col">
                  <h2 className="font-display text-2xl tracking-tight">
                    {doctor.name}
                  </h2>
                  <p className="mt-1 text-sm text-mint">{doctor.role}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {doctor.focus}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}

          {/* Join card */}
          <Reveal delay={0.12}>
            <Link
              href="/contacts"
              className="group flex h-full min-h-[20rem] flex-col justify-between rounded-3xl border border-mint/20 bg-mint/[0.06] p-7 transition-colors hover:bg-mint/[0.1]"
            >
              <span className="font-mono text-xs uppercase tracking-wider text-mint">
                Карьера
              </span>
              <div>
                <h2 className="font-display text-2xl tracking-tight text-balance">
                  Хотите в команду LE DENT?
                </h2>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-mint">
                  Связаться с нами
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
