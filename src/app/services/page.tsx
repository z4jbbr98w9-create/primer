import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { services } from "@/lib/data/services";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Услуги",
  description:
    "Полный спектр стоматологии в Уфе: Flash-отбеливание, имплантация, протезирование, терапия, ортодонтия, профгигиена и эстетическая реставрация.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Направления"
        title="Услуги"
        accent="LE DENT"
        description="От бесплатной диагностики до сложной имплантации и эстетики улыбки. Каждое направление ведут профильные специалисты по международным протоколам."
        breadcrumb={[
          { label: "Главная", href: "/" },
          { label: "Услуги", href: "/services" },
        ]}
      />

      <section className="px-6 pb-28 lg:px-10">
        <div className="mx-auto grid w-full max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.slug} delay={(i % 3) * 0.06}>
                <Link
                  href={`/services/${service.slug}`}
                  data-cursor="Подробнее"
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface/40 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-mint/30 hover:bg-surface"
                >
                  <div className="pointer-events-none absolute -right-12 -top-12 size-40 rounded-full bg-mint/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="flex items-start justify-between">
                    <span className="flex size-12 items-center justify-center rounded-2xl border border-mint/25 bg-mint/10 text-mint">
                      <Icon className="size-5" />
                    </span>
                    <span className="font-mono text-xs text-mint/60">
                      {service.index}
                    </span>
                  </div>

                  <div className="mt-6 flex items-center gap-2">
                    <h2 className="font-display text-2xl tracking-tight">
                      {service.title}
                    </h2>
                    {service.featured && (
                      <span className="rounded-full border border-mint/30 bg-mint/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-mint">
                        Хит
                      </span>
                    )}
                  </div>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                    <span>
                      <span className="block text-xs text-muted-foreground">
                        от
                      </span>
                      <span className="font-display text-lg">
                        {service.priceFrom}
                      </span>
                    </span>
                    <span className="flex size-10 items-center justify-center rounded-full border border-border text-foreground/60 transition-all duration-500 group-hover:border-mint group-hover:bg-mint group-hover:text-primary-foreground">
                      <ArrowUpRight className="size-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
