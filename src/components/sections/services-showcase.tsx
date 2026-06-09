"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { services } from "@/lib/data/services";
import { SectionHeading } from "@/components/site/section-heading";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function ServicesShowcase() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="relative px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Направления"
            title="Полный спектр"
            accent="стоматологии"
          />
          <Link
            href="/services"
            data-cursor="Все услуги"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-mint/40 hover:text-mint"
          >
            Все услуги
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <motion.ul
          variants={staggerContainer(0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          onMouseLeave={() => setHovered(null)}
          className="mt-12 border-t border-border"
        >
          {services.map((service) => {
            const Icon = service.icon;
            const isActive = hovered === service.slug;
            return (
              <motion.li key={service.slug} variants={fadeUp}>
                <Link
                  href={`/services/${service.slug}`}
                  data-cursor="Подробнее"
                  onMouseEnter={() => setHovered(service.slug)}
                  className="group relative grid grid-cols-[auto_1fr_auto] items-center gap-5 border-b border-border py-6 transition-colors sm:gap-8 sm:py-8"
                >
                  {/* hover fill */}
                  <motion.span
                    className="pointer-events-none absolute inset-x-[-1.5rem] inset-y-0 -z-10 rounded-2xl bg-surface"
                    initial={false}
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  <span className="flex items-center gap-4 sm:gap-6">
                    <span className="font-mono text-xs text-mint/70">
                      {service.index}
                    </span>
                    <span
                      className={`flex size-11 items-center justify-center rounded-xl border transition-all duration-500 ${
                        isActive
                          ? "border-mint/40 bg-mint/15 text-mint"
                          : "border-border bg-secondary/40 text-foreground/70"
                      }`}
                    >
                      <Icon className="size-5" />
                    </span>
                  </span>

                  <span className="min-w-0">
                    <span className="flex flex-wrap items-center gap-3">
                      <span className="font-display text-2xl tracking-tight transition-transform duration-500 group-hover:translate-x-1 sm:text-3xl">
                        {service.title}
                      </span>
                      {service.featured && (
                        <span className="rounded-full border border-mint/30 bg-mint/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-mint">
                          Хит
                        </span>
                      )}
                    </span>
                    <span className="mt-1 block truncate text-sm text-muted-foreground">
                      {service.short}
                    </span>
                  </span>

                  <span className="flex items-center gap-5 sm:gap-8">
                    <span className="hidden text-right sm:block">
                      <span className="block text-xs text-muted-foreground">
                        от
                      </span>
                      <span className="font-display text-lg text-foreground">
                        {service.priceFrom}
                      </span>
                    </span>
                    <span
                      className={`flex size-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                        isActive
                          ? "border-mint bg-mint text-primary-foreground"
                          : "border-border text-foreground/60"
                      }`}
                    >
                      <ArrowUpRight className="size-4" />
                    </span>
                  </span>
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
