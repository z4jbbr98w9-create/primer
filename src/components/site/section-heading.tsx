import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Reveal>
      <span
        className={cn(
          "inline-flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.22em] text-mint",
          className,
        )}
      >
        <span className="size-1.5 rounded-full bg-mint shadow-[0_0_10px_1px] shadow-mint/60" />
        {children}
      </span>
    </Reveal>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="max-w-3xl font-display text-fluid-section tracking-tight text-balance">
        <TextReveal text={title} by="word" />
        {accent && (
          <>
            {" "}
            <span className="text-gradient-mint italic">
              <TextReveal text={accent} by="word" />
            </span>
          </>
        )}
      </h2>
      {description && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg",
              align === "center" && "mx-auto",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
