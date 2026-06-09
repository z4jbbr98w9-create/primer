"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Loader2, Check } from "lucide-react";

import { services } from "@/lib/data/services";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Укажите имя"),
  phone: z
    .string()
    .min(10, "Укажите корректный телефон")
    .regex(/[\d\s()+-]+/, "Только цифры и символы телефона"),
  service: z.string().min(1, "Выберите услугу"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export function AppointmentForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", phone: "", service: "", message: "" },
  });

  const onSubmit = async (data: FormValues) => {
    // Simulated submission — wire to a real endpoint in production.
    await new Promise((r) => setTimeout(r, 1100));
    toast.success("Заявка отправлена", {
      description: `${data.name}, мы перезвоним вам в ближайшее время.`,
    });
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
      noValidate
    >
      <Field label="Ваше имя" error={errors.name?.message}>
        <input
          {...register("name")}
          placeholder="Как к вам обращаться"
          className={inputCls(!!errors.name)}
        />
      </Field>

      <Field label="Телефон" error={errors.phone?.message}>
        <input
          {...register("phone")}
          type="tel"
          inputMode="tel"
          placeholder="+7 (___) ___-__-__"
          className={inputCls(!!errors.phone)}
        />
      </Field>

      <Field label="Услуга" error={errors.service?.message}>
        <select {...register("service")} className={inputCls(!!errors.service)}>
          <option value="">Выберите направление</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Комментарий" hint="необязательно">
        <textarea
          {...register("message")}
          rows={3}
          placeholder="Опишите ситуацию или удобное время"
          className={cn(inputCls(false), "resize-none")}
        />
      </Field>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileTap={{ scale: 0.98 }}
        className="group flex w-full items-center justify-center gap-2 rounded-full bg-mint py-4 font-semibold text-primary-foreground transition-shadow duration-300 hover:shadow-[0_0_36px_-6px] hover:shadow-mint/60 disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="size-4 animate-spin" /> Отправляем…
          </>
        ) : isSubmitSuccessful ? (
          <>
            <Check className="size-4" /> Отправлено
          </>
        ) : (
          "Записаться на приём"
        )}
      </motion.button>

      <p className="text-center text-xs text-muted-foreground">
        Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.
      </p>
    </form>
  );
}

function Field({
  label,
  hint,
  error,
  children,
}: {
  label: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center justify-between text-sm">
        <span className="font-medium text-foreground/90">{label}</span>
        {hint && <span className="text-xs text-muted-foreground">{hint}</span>}
      </span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

function inputCls(hasError: boolean) {
  return cn(
    "w-full rounded-2xl border bg-graphite/60 px-5 py-3.5 text-foreground outline-none transition-colors duration-300 placeholder:text-muted-foreground/60",
    "focus:border-mint/50 focus:ring-2 focus:ring-mint/15",
    hasError ? "border-destructive/60" : "border-border",
  );
}
