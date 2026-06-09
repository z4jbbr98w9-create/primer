"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, HeartHandshake, Accessibility } from "lucide-react";

import { advantages } from "@/lib/data/clinic";
import { SectionHeading } from "@/components/site/section-heading";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const icons = [Award, ShieldCheck, HeartHandshake, Accessibility];

export function Advantages() {
  return (
    <section className="relative px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeading
          eyebrow="Почему LE DENT"
          title="Стоматология, в которой"
          accent="хочется остаться"
          description="Мы соединили немецкие технологии, международные протоколы и человеческое отношение — чтобы лечение зубов перестало быть стрессом."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {advantages.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.article
                key={item.title}
                variants={fadeUp}
                className="group relative flex flex-col gap-5 overflow-hidden rounded-3xl border border-border bg-surface/40 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-mint/30 hover:bg-surface"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-mint/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <span className="flex size-12 items-center justify-center rounded-2xl border border-mint/25 bg-mint/10 text-mint">
                  <Icon className="size-5" />
                </span>
                <h3 className="font-display text-xl tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
                <span className="mt-auto font-mono text-xs text-mint/60">
                  0{i + 1}
                </span>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
