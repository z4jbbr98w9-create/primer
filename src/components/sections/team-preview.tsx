"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { team } from "@/lib/data/team";
import { SectionHeading } from "@/components/site/section-heading";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function TeamPreview() {
  return (
    <section className="relative px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Команда"
            title="Врачи, которым"
            accent="доверяют улыбку"
          />
          <Link
            href="/team"
            data-cursor="Вся команда"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-mint/40 hover:text-mint"
          >
            Вся команда
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {team.slice(0, 3).map((doctor) => (
            <motion.article
              key={doctor.name}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-3xl border border-border bg-surface/40 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-mint/30"
            >
              <div className="flex aspect-square items-center justify-center rounded-2xl bg-gradient-to-br from-surface-2 to-graphite">
                <span className="font-display text-6xl text-mint/80 transition-transform duration-500 group-hover:scale-110">
                  {doctor.initials}
                </span>
              </div>
              <div className="mt-6">
                <span className="text-xs font-medium uppercase tracking-wider text-mint">
                  {doctor.experience} опыта
                </span>
                <h3 className="mt-2 font-display text-2xl tracking-tight">
                  {doctor.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {doctor.role}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
