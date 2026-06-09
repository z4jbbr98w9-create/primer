import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Quote } from "lucide-react";

import { clinic, advantages } from "@/lib/data/clinic";
import { PageHero } from "@/components/site/page-hero";
import { Stats } from "@/components/sections/stats";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";

export const metadata: Metadata = {
  title: "О клинике",
  description:
    "LE DENT — прогрессивная стоматология в Уфе. Международные стандарты, немецкие технологии и бережный подход к каждому пациенту.",
};

const values = [
  {
    title: "Технологичность",
    text: "Инвестируем в оборудование экспертного класса и обучение врачей. Flash-отбеливание — лишь одна из технологий, недоступных в других клиниках города.",
  },
  {
    title: "Честность",
    text: "Прозрачный план лечения и фиксированные цены без навязанных услуг. Вы всегда понимаете, за что платите и зачем.",
  },
  {
    title: "Забота",
    text: "Безболезненное лечение, внимание к тревожным пациентам и сопровождение после визита. Стоматология может быть комфортной.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="О клинике"
        title="Прогрессивная стоматология"
        accent="в сердце Уфы"
        description={clinic.description}
        breadcrumb={[
          { label: "Главная", href: "/" },
          { label: "О клинике", href: "/about" },
        ]}
      />

      {/* Manifesto */}
      <section className="px-6 py-16 lg:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-surface/60 to-graphite p-8 sm:p-14">
              <Quote className="size-10 text-mint/40" />
              <p className="mt-6 max-w-4xl font-display text-2xl leading-snug tracking-tight text-balance sm:text-3xl lg:text-4xl">
                <TextReveal
                  text="Мы создали клинику, в которую не страшно идти — и из которой выходишь с улыбкой, которой хочется делиться."
                  by="word"
                />
              </p>
              <p className="mt-8 text-sm text-muted-foreground">
                — Команда LE DENT
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <Stats />

      {/* Values */}
      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="lg:sticky lg:top-28 lg:h-fit">
              <span className="inline-flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.22em] text-mint">
                <span className="size-1.5 rounded-full bg-mint" /> Ценности
              </span>
              <h2 className="mt-5 font-display text-fluid-section tracking-tight">
                <TextReveal text="Принципы," by="word" />
                <span className="block text-gradient-mint italic">
                  <TextReveal text="на которых стоим" by="word" />
                </span>
              </h2>
            </div>

            <div className="space-y-px overflow-hidden rounded-3xl border border-border">
              {values.map((v, i) => (
                <Reveal key={v.title}>
                  <div className="flex flex-col gap-3 bg-surface/40 p-8 transition-colors hover:bg-surface sm:flex-row sm:gap-8">
                    <span className="font-display text-4xl text-mint/50">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl tracking-tight">
                        {v.title}
                      </h3>
                      <p className="mt-2 leading-relaxed text-muted-foreground">
                        {v.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages strip */}
      <section className="px-6 pb-24 lg:px-10 lg:pb-32">
        <div className="mx-auto grid w-full max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((a, i) => (
            <Reveal key={a.title} delay={(i % 4) * 0.05}>
              <div className="h-full rounded-3xl border border-border bg-surface/30 p-7">
                <span className="font-mono text-xs text-mint/60">0{i + 1}</span>
                <h3 className="mt-4 font-display text-xl tracking-tight">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {a.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-28 lg:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-8 rounded-[2rem] border border-mint/20 bg-mint/[0.06] p-8 sm:p-12 lg:flex-row lg:items-center">
              <div>
                <h2 className="font-display text-fluid-section tracking-tight">
                  Готовы познакомиться?
                </h2>
                <p className="mt-3 max-w-md text-muted-foreground">
                  Приходите на бесплатную консультацию — покажем клинику и
                  составим план без обязательств.
                </p>
              </div>
              <Link
                href="/contacts"
                data-cursor="Запись"
                className="group flex shrink-0 items-center gap-2 rounded-full bg-mint px-8 py-4 font-semibold text-primary-foreground transition-shadow duration-300 hover:shadow-[0_0_36px_-6px] hover:shadow-mint/60"
              >
                Записаться на приём
                <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
