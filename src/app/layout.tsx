import type { Metadata, Viewport } from "next";
import { Manrope, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { Cursor } from "@/components/layout/cursor";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { clinic } from "@/lib/data/clinic";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
  display: "swap",
  style: ["normal", "italic"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ledent.ru"),
  title: {
    default: `${clinic.name} — премиальная стоматология в Уфе`,
    template: `%s · ${clinic.name}`,
  },
  description:
    "LE DENT — стоматология премиум-класса в Уфе. Эстетическая реставрация, имплантация, единственное в городе Flash-отбеливание по немецкой технологии. Рейтинг 5.0 на 2ГИС.",
  keywords: [
    "стоматология Уфа",
    "Flash отбеливание",
    "имплантация зубов Уфа",
    "LE DENT",
    "Ле Дент",
    "стоматология Инорс",
  ],
  authors: [{ name: clinic.name }],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    title: `${clinic.name} — премиальная стоматология в Уфе`,
    description:
      "Эстетическая стоматология, имплантация и Flash-отбеливание по немецкой технологии. Рейтинг 5.0.",
    siteName: clinic.name,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0B0F0E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${playfair.variable} ${jetbrains.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="grain min-h-full bg-background text-foreground">
        <SmoothScroll>
          <Cursor />
          <Header />
          <main className="relative flex flex-col">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
