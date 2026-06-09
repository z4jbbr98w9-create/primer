"use client";

import { useRef, useState, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MoveHorizontal, Sparkles, ArrowUpRight } from "lucide-react";

import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/motion/reveal";

/** A row of stylised "teeth" that takes a shade colour. */
function Smile({ shade }: { shade: string }) {
  return (
    <div className="flex h-full w-full items-end justify-center gap-1.5 px-6 pb-10 sm:gap-2.5 sm:px-12">
      {Array.from({ length: 10 }).map((_, i) => {
        const center = Math.abs(i - 4.5);
        const h = 70 - center * 4;
        return (
          <div
            key={i}
            className="rounded-b-md rounded-t-xl transition-colors duration-300"
            style={{
              height: `${h}%`,
              width: `${8 - center * 0.4}%`,
              background: `linear-gradient(180deg, ${shade} 0%, color-mix(in srgb, ${shade} 78%, #000) 100%)`,
              boxShadow: "inset 0 6px 12px rgba(255,255,255,0.45)",
            }}
          />
        );
      })}
    </div>
  );
}

export function BeforeAfter() {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(4, Math.min(96, p)));
  }, []);

  return (
    <section className="relative px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Flash-отбеливание"
            title="До 8 тонов светлее"
            accent="за один визит"
            description="Немецкая технология Flash бережно осветляет эмаль без перегрева и чувствительности. Потяните за ползунок, чтобы увидеть разницу."
          />
          <Reveal delay={0.15} className="mt-8 flex flex-wrap gap-3">
            {["Без боли", "Безопасно для эмали", "Результат сразу"].map((t) => (
              <span
                key={t}
                className="flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-2 text-sm"
              >
                <Sparkles className="size-3.5 text-mint" />
                {t}
              </span>
            ))}
          </Reveal>
          <Reveal delay={0.25}>
            <Link
              href="/services/flash-whitening"
              data-cursor="Подробнее"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-mint px-7 py-3.5 font-semibold text-primary-foreground transition-shadow duration-300 hover:shadow-[0_0_36px_-6px] hover:shadow-mint/60"
            >
              Узнать об отбеливании
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div
            ref={ref}
            className="relative aspect-[4/3] w-full cursor-ew-resize select-none overflow-hidden rounded-[2rem] border border-border bg-gradient-to-b from-surface to-graphite"
            onPointerDown={(e) => {
              dragging.current = true;
              (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
              update(e.clientX);
            }}
            onPointerMove={(e) => dragging.current && update(e.clientX)}
            onPointerUp={() => (dragging.current = false)}
          >
            {/* After (bright) — base layer */}
            <div className="absolute inset-0">
              <div className="absolute left-5 top-5 z-10 rounded-full border border-mint/30 bg-mint/15 px-3 py-1 text-xs font-medium text-mint">
                После · BL1
              </div>
              <Smile shade="#FAFBF6" />
            </div>

            {/* Before (dim) — clipped layer */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${pos}%` }}
            >
              <div
                className="absolute inset-0"
                style={{ width: ref.current?.offsetWidth ?? "100%" }}
              >
                <div className="absolute right-5 top-5 z-10 rounded-full border border-border bg-graphite/80 px-3 py-1 text-xs font-medium text-muted-foreground">
                  До · A3
                </div>
                <Smile shade="#D8C9A0" />
              </div>
            </div>

            {/* Handle */}
            <div
              className="absolute inset-y-0 z-20 flex w-0 items-center justify-center"
              style={{ left: `${pos}%` }}
            >
              <div className="absolute inset-y-0 w-px bg-mint/80 shadow-[0_0_18px_2px] shadow-mint/40" />
              <motion.div
                whileTap={{ scale: 0.92 }}
                className="glass flex size-12 items-center justify-center rounded-full border-mint/40 text-mint"
              >
                <MoveHorizontal className="size-5" />
              </motion.div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
