"use client";

import { motion } from "framer-motion";
import { CalendarCheck, Search, ClipboardList, Smile } from "lucide-react";

import { SectionHeading } from "@/components/site/section-heading";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const steps = [
  {
    icon: CalendarCheck,
    title: "Запись",
    text: "Звоните или оставляете заявку — подберём удобное время в день обращения.",
  },
  {
    icon: Search,
    title: "Диагностика",
    text: "Бесплатная консультация, осмотр и цифровой снимок для точного диагноза.",
  },
  {
    icon: ClipboardList,
    title: "План лечения",
    text: "Прозрачный план с понятными сроками и фиксированной стоимостью.",
  },
  {
    icon: Smile,
    title: "Результат",
    text: "Аккуратное лечение без боли и забота о результате после визита.",
  },
];

export function Process() {
  return (
    <section className="relative overflow-hidden px-6 py-24 lg:px-10 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-mint/5 blur-[140px]" />
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeading
          eyebrow="Как мы работаем"
          title="Четыре шага"
          accent="к здоровой улыбке"
          align="center"
          className="mx-auto items-center"
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                variants={fadeUp}
                className="relative flex flex-col gap-5 rounded-3xl border border-border bg-surface/30 p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="flex size-12 items-center justify-center rounded-2xl border border-mint/25 bg-mint/10 text-mint">
                    <Icon className="size-5" />
                  </span>
                  <span className="font-display text-5xl text-border">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-display text-xl tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
