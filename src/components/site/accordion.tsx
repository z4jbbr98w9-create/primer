"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

import type { FaqItem } from "@/lib/data/promotions";
import { Reveal } from "@/components/motion/reveal";

export function Accordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border overflow-hidden rounded-3xl border border-border">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <Reveal key={item.q} as="div">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 bg-surface/40 px-6 py-6 text-left transition-colors hover:bg-surface sm:px-8"
              aria-expanded={isOpen}
            >
              <span className="font-display text-lg tracking-tight sm:text-xl">
                {item.q}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 135 : 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className={`flex size-9 shrink-0 items-center justify-center rounded-full border transition-colors ${
                  isOpen
                    ? "border-mint/40 bg-mint/15 text-mint"
                    : "border-border text-foreground/60"
                }`}
              >
                <Plus className="size-4" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden bg-surface/40"
                >
                  <p className="max-w-2xl px-6 pb-7 leading-relaxed text-muted-foreground sm:px-8">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </Reveal>
        );
      })}
    </div>
  );
}
