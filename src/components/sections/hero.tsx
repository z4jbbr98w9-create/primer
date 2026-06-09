"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star, ArrowDown, Sparkles, MapPin } from "lucide-react";

import { clinic } from "@/lib/data/clinic";
import { Magnetic } from "@/components/motion/magnetic";
import { wordContainer, wordChild, fadeUp, easeOutExpo } from "@/lib/motion";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "32%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-6 pt-28 pb-16 lg:px-10"
    >
      {/* Ambient glows */}
      <motion.div
        style={{ scale }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-1/3 size-[42rem] -translate-x-1/2 rounded-full bg-mint/15 blur-[140px]" />
        <div className="absolute right-[8%] top-[12%] size-[22rem] rounded-full bg-mint-deep/15 blur-[120px]" />
        <div className="absolute bottom-0 left-[5%] size-[26rem] rounded-full bg-mint/10 blur-[130px]" />
      </motion.div>

      {/* Grid lines */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.18] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="mx-auto flex w-full max-w-7xl flex-col items-center text-center"
      >
        {/* Rating badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.3 }}
          className="glass flex items-center gap-2.5 rounded-full px-4 py-2"
        >
          <span className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-3.5 fill-mint text-mint" />
            ))}
          </span>
          <span className="text-sm font-medium">
            {clinic.rating.value.toFixed(1)} на {clinic.rating.source}
          </span>
          <span className="hidden text-sm text-muted-foreground sm:inline">
            · {clinic.rating.reviews} отзыв(а)
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={wordContainer}
          initial="hidden"
          animate="visible"
          transition={{ delayChildren: 0.45, staggerChildren: 0.08 }}
          className="mt-8 font-display text-fluid-hero font-medium tracking-tight text-balance"
        >
          {"Ваши зубы уже".split(" ").map((w, i) => (
            <span key={i} className="relative inline-block overflow-hidden pb-[0.12em]">
              <motion.span variants={wordChild} className="inline-block">
                {w}
              </motion.span>
              {i < 2 ? " " : ""}
            </span>
          ))}
          <span className="block">
            <span className="relative inline-block overflow-hidden pb-[0.12em]">
              <motion.span variants={wordChild} className="inline-block italic text-gradient-mint">
                не&nbsp;будут&nbsp;прежними
              </motion.span>
            </span>
          </span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
          className="mt-7 max-w-xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Премиальная стоматология в Уфе. Эстетика, имплантация и единственное в
          городе Flash-отбеливание по немецкой технологии.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.15 }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Magnetic>
            <Link
              href="/contacts"
              data-cursor="Запись"
              className="group flex items-center gap-2.5 rounded-full bg-mint px-8 py-4 font-semibold text-primary-foreground transition-shadow duration-300 hover:shadow-[0_0_40px_-6px] hover:shadow-mint/60"
            >
              <Sparkles className="size-4" />
              Записаться на приём
            </Link>
          </Magnetic>
          <Magnetic strength={0.25}>
            <Link
              href="/services/flash-whitening"
              className="flex items-center gap-2 rounded-full border border-border bg-secondary/30 px-8 py-4 font-medium text-foreground backdrop-blur transition-colors duration-300 hover:border-mint/40 hover:text-mint"
            >
              Flash-отбеливание
            </Link>
          </Magnetic>
        </motion.div>

        {/* Floating chips */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.3 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-3 text-sm"
        >
          <Chip icon={MapPin}>{clinic.address.full}</Chip>
          <Chip>{clinic.hours.display}</Chip>
          <Chip icon={Sparkles} accent>
            Единственные в Уфе · Flash
          </Chip>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Листайте</span>
        <motion.span
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="size-4 text-mint" />
        </motion.span>
      </motion.div>
    </section>
  );
}

function Chip({
  icon: Icon,
  children,
  accent,
}: {
  icon?: React.ElementType;
  children: React.ReactNode;
  accent?: boolean;
}) {
  return (
    <span
      className={`glass flex items-center gap-2 rounded-full px-4 py-2 ${
        accent ? "text-mint" : "text-foreground/80"
      }`}
    >
      {Icon && <Icon className="size-3.5" />}
      {children}
    </span>
  );
}
