"use client";

import { useState } from "react";
import { MapPin, Play } from "lucide-react";

import { clinic } from "@/lib/data/clinic";

const mapSrc = `https://yandex.ru/map-widget/v1/?mode=search&text=${encodeURIComponent(
  "Уфа, улица Ферина, 31",
)}&z=16`;

/**
 * Stylised dark map placeholder that loads the real Yandex map on demand —
 * keeps the premium dark aesthetic until the user opts in.
 */
export function MapEmbed() {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-border">
        <iframe
          src={mapSrc}
          title={`Карта — ${clinic.address.full}`}
          className="size-full"
          loading="lazy"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => setLoaded(true)}
      data-cursor="Карта"
      className="group relative block aspect-[16/10] w-full overflow-hidden rounded-3xl border border-border text-left"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,var(--surface),var(--graphite))]" />
      <div className="absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className="relative flex size-5 items-center justify-center">
          <span className="absolute size-12 animate-pulse-ring rounded-full bg-mint/40" />
          <span className="size-4 rounded-full bg-mint shadow-[0_0_20px_4px] shadow-mint/50" />
        </span>
      </div>

      <span className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-border bg-graphite/80 px-4 py-2 text-sm backdrop-blur">
        <MapPin className="size-4 text-mint" />
        {clinic.address.full}
      </span>

      <span className="absolute bottom-5 right-5 flex items-center gap-2 rounded-full bg-mint px-4 py-2 text-sm font-medium text-primary-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <Play className="size-3.5 fill-current" />
        Показать карту
      </span>
    </button>
  );
}
