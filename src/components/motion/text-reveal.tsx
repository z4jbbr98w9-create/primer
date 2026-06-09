"use client";

import { motion } from "framer-motion";
import { wordContainer, wordChild, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

type TextRevealProps = {
  text: string;
  className?: string;
  /** Split on words (default) or characters for tighter kinetic effect */
  by?: "word" | "line";
  delay?: number;
};

/**
 * Masked, word-by-word reveal. Each word slides up from behind an
 * overflow-hidden mask — the editorial kinetic signature of the site.
 */
export function TextReveal({
  text,
  className,
  by = "word",
  delay = 0,
}: TextRevealProps) {
  const segments = by === "line" ? text.split("\n") : text.split(" ");

  return (
    <motion.span
      className={cn("inline", className)}
      variants={wordContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delayChildren: delay }}
      aria-label={text}
    >
      {segments.map((segment, i) => (
        <span
          key={i}
          className={cn(
            "relative overflow-hidden",
            by === "line" ? "block" : "inline-block",
          )}
          aria-hidden
        >
          <motion.span variants={wordChild} className="inline-block">
            {segment}
          </motion.span>
          {by === "word" && i < segments.length - 1 ? " " : null}
        </span>
      ))}
    </motion.span>
  );
}
