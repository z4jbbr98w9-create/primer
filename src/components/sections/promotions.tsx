"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { promotions } from "@/lib/data/promotions";
import { SectionHeading } from "@/components/site/section-heading";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function Promotions() {
  return (
    <section className="relative px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeading
          eyebrow="Акции"
          title="Выгодные условия"
          accent="для пациентов"
          description="Делаем премиальную стоматологию доступнее — от бесплатной диагностики до бонусов на первое лечение."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4"
        >
          {promotions.map((promo) => {
            const Icon = promo.icon;
            return (
              <motion.div
                key={promo.title}
                variants={fadeUp}
                className={cn(
                  "group relative flex flex-col gap-5 overflow-hidden rounded-3xl border p-7 transition-all duration-500 hover:-translate-y-1",
                  promo.featured
                    ? "border-mint/30 bg-mint/[0.07]"
                    : "border-border bg-surface/40 hover:border-mint/30 hover:bg-surface",
                )}
              >
                <div className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-mint/15 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="flex items-center justify-between">
                  <span className="flex size-12 items-center justify-center rounded-2xl border border-mint/25 bg-mint/10 text-mint">
                    <Icon className="size-5" />
                  </span>
                  <span className="rounded-full border border-mint/30 bg-graphite/40 px-3 py-1 font-display text-sm text-mint">
                    {promo.badge}
                  </span>
                </div>
                <h3 className="font-display text-xl tracking-tight">
                  {promo.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {promo.description}
                </p>
                <Link
                  href="/contacts"
                  className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-mint"
                >
                  Записаться
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
