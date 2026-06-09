import { cn } from "@/lib/utils";

export function Marquee({
  items,
  reverse,
  className,
}: {
  items: string[];
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("mask-fade-x flex overflow-hidden", className)}>
      <div
        className={cn(
          "flex shrink-0 items-center gap-10 pr-10",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
        )}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-10 font-display text-2xl tracking-tight text-foreground/70 sm:text-3xl"
          >
            {item}
            <span className="size-1.5 rounded-full bg-mint/70" />
          </span>
        ))}
      </div>
    </div>
  );
}
