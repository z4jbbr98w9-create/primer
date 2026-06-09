import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check, Clock, Tag } from "lucide-react";

import { services, getService } from "@/lib/data/services";
import { clinic } from "@/lib/data/clinic";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/motion/reveal";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Услуга не найдена" };
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const Icon = service.icon;
  const related = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={`Услуга · ${service.index}`}
        title={service.title}
        description={service.description}
        breadcrumb={[
          { label: "Главная", href: "/" },
          { label: "Услуги", href: "/services" },
          { label: service.title, href: `/services/${service.slug}` },
        ]}
      />

      <section className="px-6 pb-28 lg:px-10">
        <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.6fr_1fr]">
          {/* Main */}
          <div className="space-y-12">
            <Reveal>
              <div className="flex flex-wrap gap-3">
                {service.highlights.map((h) => (
                  <span
                    key={h}
                    className="flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-2 text-sm"
                  >
                    <span className="size-1.5 rounded-full bg-mint" />
                    {h}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h2 className="font-display text-2xl tracking-tight sm:text-3xl">
                  Что входит
                </h2>
                <ul className="mt-7 space-y-px overflow-hidden rounded-2xl border border-border">
                  {service.includes.map((item, i) => (
                    <li
                      key={item}
                      className="flex items-center gap-4 bg-surface/40 px-6 py-5 transition-colors hover:bg-surface"
                    >
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-mint/15 text-mint">
                        <Check className="size-4" />
                      </span>
                      <span className="text-foreground/90">{item}</span>
                      <span className="ml-auto font-mono text-xs text-muted-foreground">
                        0{i + 1}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-3xl border border-border bg-gradient-to-br from-surface/60 to-graphite p-8 sm:p-10">
                <Icon className="size-8 text-mint" />
                <p className="mt-5 font-display text-xl leading-snug tracking-tight text-balance sm:text-2xl">
                  «{clinic.slogan.replace("\n", " ")}» — мы подберём оптимальное
                  решение именно для вашего случая на бесплатной консультации.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Sticky aside */}
          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <Reveal>
              <div className="rounded-3xl border border-border bg-surface/50 p-7">
                <span className="flex size-14 items-center justify-center rounded-2xl border border-mint/25 bg-mint/10 text-mint">
                  <Icon className="size-6" />
                </span>

                <dl className="mt-7 space-y-5">
                  <div className="flex items-center justify-between border-b border-border pb-5">
                    <dt className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Tag className="size-4" /> Стоимость
                    </dt>
                    <dd className="font-display text-2xl text-mint">
                      {service.priceFrom}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between border-b border-border pb-5">
                    <dt className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="size-4" /> Длительность
                    </dt>
                    <dd className="font-medium">{service.duration}</dd>
                  </div>
                </dl>

                <Link
                  href="/contacts"
                  data-cursor="Запись"
                  className="group mt-7 flex items-center justify-center gap-2 rounded-full bg-mint py-4 font-semibold text-primary-foreground transition-shadow duration-300 hover:shadow-[0_0_34px_-6px] hover:shadow-mint/60"
                >
                  Записаться
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <a
                  href={clinic.phone.href}
                  className="mt-3 flex items-center justify-center rounded-full border border-border py-4 font-medium transition-colors hover:border-mint/40 hover:text-mint"
                >
                  {clinic.phone.display}
                </a>
              </div>
            </Reveal>
          </aside>
        </div>

        {/* Related */}
        <div className="mx-auto mt-24 w-full max-w-7xl">
          <h2 className="font-display text-2xl tracking-tight sm:text-3xl">
            Другие услуги
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {related.map((s) => {
              const RIcon = s.icon;
              return (
                <Reveal key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group flex items-center gap-4 rounded-2xl border border-border bg-surface/40 p-5 transition-all duration-500 hover:border-mint/30 hover:bg-surface"
                  >
                    <span className="flex size-11 items-center justify-center rounded-xl border border-border bg-secondary/40 text-foreground/70 transition-colors group-hover:border-mint/40 group-hover:text-mint">
                      <RIcon className="size-5" />
                    </span>
                    <span className="font-display text-lg tracking-tight">
                      {s.title}
                    </span>
                    <ArrowUpRight className="ml-auto size-4 text-muted-foreground transition-colors group-hover:text-mint" />
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
