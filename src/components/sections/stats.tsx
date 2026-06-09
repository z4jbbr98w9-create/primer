"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

import { stats } from "@/lib/data/clinic";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Stats() {
  return (
    <section className="relative px-6 py-20 lg:px-10">
      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border lg:grid-cols-4"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={fadeUp}
            className="group relative flex flex-col gap-2 bg-graphite p-7 transition-colors duration-500 hover:bg-surface sm:p-9"
          >
            <span className="font-display text-4xl tracking-tight text-mint sm:text-5xl lg:text-6xl">
              {"prefix" in stat && stat.prefix ? stat.prefix : ""}
              <CountUp
                end={stat.value}
                decimals={"decimals" in stat ? stat.decimals : 0}
                duration={2.2}
                enableScrollSpy
                scrollSpyOnce
              />
              {"suffix" in stat && stat.suffix ? stat.suffix : ""}
            </span>
            <span className="text-sm font-medium text-foreground">
              {stat.label}
            </span>
            <span className="text-sm text-muted-foreground">{stat.sub}</span>
            <span className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-mint transition-transform duration-500 group-hover:scale-x-100" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
