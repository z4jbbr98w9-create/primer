"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";

import { reviews } from "@/lib/data/reviews";
import { clinic } from "@/lib/data/clinic";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/motion/reveal";

export function Reviews() {
  const [emblaRef, embla] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: true,
  });
  const [selected, setSelected] = useState(0);

  const scrollPrev = useCallback(() => embla?.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla?.scrollNext(), [embla]);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelected(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    onSelect();
    return () => {
      embla.off("select", onSelect);
    };
  }, [embla]);

  return (
    <section className="relative overflow-hidden px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Отзывы пациентов"
            title="Рейтинг"
            accent="5.0 на 2ГИС"
            description={`${clinic.rating.reviews} человек доверили нам свою улыбку и оценили результат на максимум.`}
          />
          <Reveal delay={0.1} className="flex items-center gap-3">
            <CarouselButton onClick={scrollPrev} label="Назад">
              <ArrowLeft className="size-5" />
            </CarouselButton>
            <CarouselButton onClick={scrollNext} label="Вперёд">
              <ArrowRight className="size-5" />
            </CarouselButton>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-[100rem]" ref={emblaRef}>
        <div className="flex gap-5 px-6 lg:px-10">
          {reviews.map((review, i) => (
            <article
              key={i}
              className="group flex min-w-0 shrink-0 basis-[88%] flex-col rounded-3xl border border-border bg-surface/40 p-7 transition-colors duration-500 hover:border-mint/30 hover:bg-surface sm:basis-[48%] lg:basis-[31%]"
            >
              <div className="flex items-center justify-between">
                <Quote className="size-8 text-mint/40" />
                <span className="flex">
                  {Array.from({ length: review.rating }).map((_, s) => (
                    <Star key={s} className="size-4 fill-mint text-mint" />
                  ))}
                </span>
              </div>
              <p className="mt-6 flex-1 text-base leading-relaxed text-foreground/90">
                {review.text}
              </p>
              <div className="mt-8 flex items-center justify-between border-t border-border pt-5">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-full bg-mint/15 font-display text-sm text-mint">
                    {review.name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-sm font-medium">{review.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {review.date}
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-secondary/60 px-3 py-1 text-xs text-muted-foreground">
                  {review.service}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Progress dots */}
      <div className="mt-10 flex justify-center gap-2">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => embla?.scrollTo(i)}
            aria-label={`Отзыв ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === selected ? "w-8 bg-mint" : "w-1.5 bg-border"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

function CarouselButton({
  onClick,
  label,
  children,
}: {
  onClick: () => void;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="flex size-12 items-center justify-center rounded-full border border-border text-foreground/70 transition-all duration-300 hover:border-mint/40 hover:text-mint"
    >
      {children}
    </button>
  );
}
