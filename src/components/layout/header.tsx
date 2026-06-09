"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

import { navLinks } from "@/lib/data/nav";
import { clinic } from "@/lib/data/clinic";
import { Magnetic } from "@/components/motion/magnetic";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
      >
        <div
          className={cn(
            "flex w-full max-w-7xl items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500 sm:px-6",
            scrolled
              ? "glass shadow-[0_8px_40px_-12px_rgba(0,0,0,0.5)]"
              : "border border-transparent bg-transparent",
          )}
        >
          <Link
            href="/"
            className="group flex items-center gap-2.5"
            aria-label="LE DENT — на главную"
          >
            <span className="relative flex size-8 items-center justify-center">
              <span className="absolute inset-0 rounded-full bg-mint/15" />
              <span className="size-2.5 rounded-full bg-mint shadow-[0_0_14px_2px] shadow-mint/50 transition-transform duration-500 group-hover:scale-125" />
            </span>
            <span className="font-display text-lg font-semibold tracking-tight">
              LE DENT
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm transition-colors duration-300",
                    active
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-secondary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Magnetic className="hidden sm:block">
              <Link
                href={clinic.phone.href}
                data-cursor="Позвонить"
                className="group flex items-center gap-2 rounded-full bg-mint px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-shadow duration-300 hover:shadow-[0_0_30px_-4px] hover:shadow-mint/60"
              >
                <Phone className="size-4" />
                <span className="hidden xl:inline">{clinic.phone.display}</span>
                <span className="xl:hidden">Записаться</span>
              </Link>
            </Magnetic>

            <button
              onClick={() => setOpen(true)}
              className="flex size-10 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
              aria-label="Открыть меню"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && <MobileMenu onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[60] flex flex-col bg-graphite/95 backdrop-blur-2xl lg:hidden"
    >
      <div className="flex items-center justify-between px-6 pt-7">
        <span className="font-display text-lg font-semibold">LE DENT</span>
        <button
          onClick={onClose}
          className="flex size-10 items-center justify-center rounded-full border border-border"
          aria-label="Закрыть меню"
        >
          <X className="size-5" />
        </button>
      </div>

      <nav className="flex flex-1 flex-col justify-center gap-2 px-6">
        {navLinks.map((link, i) => (
          <motion.div
            key={link.href}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href={link.href}
              onClick={onClose}
              className="block border-b border-border py-5 font-display text-4xl tracking-tight transition-colors hover:text-mint"
            >
              {link.label}
            </Link>
          </motion.div>
        ))}
      </nav>

      <div className="space-y-3 px-6 pb-10">
        <Link
          href={clinic.phone.href}
          className="flex items-center justify-center gap-2 rounded-full bg-mint py-4 font-semibold text-primary-foreground"
        >
          <Phone className="size-4" />
          {clinic.phone.display}
        </Link>
        <p className="text-center text-sm text-muted-foreground">
          {clinic.hours.display}
        </p>
      </div>
    </motion.div>
  );
}
