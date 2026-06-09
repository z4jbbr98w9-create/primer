import { Hero } from "@/components/sections/hero";
import { Advantages } from "@/components/sections/advantages";
import { Stats } from "@/components/sections/stats";
import { ServicesShowcase } from "@/components/sections/services-showcase";
import { BeforeAfter } from "@/components/sections/before-after";
import { Process } from "@/components/sections/process";
import { Promotions } from "@/components/sections/promotions";
import { Reviews } from "@/components/sections/reviews";
import { TeamPreview } from "@/components/sections/team-preview";
import { Marquee } from "@/components/site/marquee";

const tickerItems = [
  "Flash-отбеливание",
  "Имплантация",
  "Эстетика улыбки",
  "Профгигиена",
  "Виниры",
  "Лечение под микроскопом",
  "Немецкие технологии",
];

export default function Home() {
  return (
    <>
      <Hero />

      <div className="border-y border-border py-8">
        <Marquee items={tickerItems} />
      </div>

      <Advantages />
      <Stats />
      <ServicesShowcase />
      <BeforeAfter />
      <Process />
      <Promotions />
      <Reviews />
      <TeamPreview />
    </>
  );
}
