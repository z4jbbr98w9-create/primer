import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Eyebrow } from "@/components/site/section-heading";
import { TextReveal } from "@/components/motion/text-reveal";
import { Reveal } from "@/components/motion/reveal";

export function PageHero({
  eyebrow,
  title,
  accent,
  description,
  breadcrumb,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
  breadcrumb?: { label: string; href: string }[];
}) {
  return (
    <section className="relative overflow-hidden px-6 pb-12 pt-36 lg:px-10 lg:pb-16 lg:pt-44">
      <div className="pointer-events-none absolute -top-24 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-mint/10 blur-[130px]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.15] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="mx-auto w-full max-w-7xl">
        {breadcrumb && (
          <Reveal className="mb-6 flex items-center gap-1.5 text-sm text-muted-foreground">
            {breadcrumb.map((b, i) => (
              <span key={b.href} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="size-3.5" />}
                <Link href={b.href} className="transition-colors hover:text-mint">
                  {b.label}
                </Link>
              </span>
            ))}
          </Reveal>
        )}

        <Eyebrow>{eyebrow}</Eyebrow>

        <h1 className="mt-5 max-w-4xl font-display text-fluid-display tracking-tight text-balance">
          <TextReveal text={title} by="word" />
          {accent && (
            <>
              {" "}
              <span className="text-gradient-mint italic">
                <TextReveal text={accent} by="word" />
              </span>
            </>
          )}
        </h1>

        {description && (
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
