import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { priceCategories } from "@/lib/data/prices";
import { faq } from "@/lib/data/promotions";
import { clinic } from "@/lib/data/clinic";
import { PageHero } from "@/components/site/page-hero";
import { Promotions } from "@/components/sections/promotions";
import { Accordion } from "@/components/site/accordion";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Цены",
  description:
    "Цены на стоматологические услуги LE DENT в Уфе: терапия, имплантация, протезирование, Flash-отбеливание, ортодонтия. Прозрачный прайс, первичная консультация бесплатно.",
};

export default function PricesPage() {
  return (
    <>
      <PageHero
        eyebrow="Прайс-лист"
        title="Прозрачные"
        accent="цены"
        description="Фиксированная стоимость без скрытых платежей. Точную сумму вы узнаёте на бесплатной консультации — до начала лечения."
        breadcrumb={[
          { label: "Главная", href: "/" },
          { label: "Цены", href: "/prices" },
        ]}
      />

      <section className="px-6 pb-12 lg:px-10">
        <div className="mx-auto grid w-full max-w-7xl gap-5 lg:grid-cols-2">
          {priceCategories.map((category, i) => (
            <Reveal key={category.slug} delay={(i % 2) * 0.06}>
              <div className="h-full rounded-3xl border border-border bg-surface/40 p-7 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-mint/60">
                    0{i + 1}
                  </span>
                  <h2 className="font-display text-2xl tracking-tight">
                    {category.title}
                  </h2>
                </div>
                <ul className="mt-6 divide-y divide-border">
                  {category.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-baseline justify-between gap-4 py-3.5"
                    >
                      <span className="text-foreground/90">
                        {item.name}
                        {item.note && (
                          <span className="mt-0.5 block text-xs text-mint">
                            {item.note}
                          </span>
                        )}
                      </span>
                      <span className="shrink-0 whitespace-nowrap font-display text-lg text-mint">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-muted-foreground">
            Цены носят справочный характер и не являются публичной офертой.
            Итоговую стоимость определяет врач после осмотра на бесплатной
            консультации.
          </p>
        </Reveal>
      </section>

      <Promotions />

      {/* FAQ */}
      <section className="px-6 pb-28 lg:px-10">
        <div className="mx-auto w-full max-w-4xl">
          <SectionHeading
            eyebrow="Вопросы и ответы"
            title="Частые"
            accent="вопросы"
            align="center"
            className="mx-auto items-center"
          />
          <div className="mt-12">
            <Accordion items={faq} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-28 lg:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-8 rounded-[2rem] border border-mint/20 bg-mint/[0.06] p-8 sm:p-12 lg:flex-row lg:items-center">
              <div>
                <h2 className="font-display text-fluid-section tracking-tight">
                  Остались вопросы по цене?
                </h2>
                <p className="mt-3 max-w-md text-muted-foreground">
                  Позвоните нам — рассчитаем стоимость вашего лечения и подберём
                  удобное время визита.
                </p>
              </div>
              <Link
                href={clinic.phone.href}
                data-cursor="Звонок"
                className="group flex shrink-0 items-center gap-2 rounded-full bg-mint px-8 py-4 font-semibold text-primary-foreground transition-shadow duration-300 hover:shadow-[0_0_36px_-6px] hover:shadow-mint/60"
              >
                {clinic.phone.display}
                <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
