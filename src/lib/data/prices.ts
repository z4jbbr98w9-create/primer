export type PriceItem = {
  name: string;
  price: string;
  note?: string;
};

export type PriceCategory = {
  slug: string;
  title: string;
  items: PriceItem[];
};

export const priceCategories: PriceCategory[] = [
  {
    slug: "diagnostics",
    title: "Диагностика и консультация",
    items: [
      { name: "Первичная консультация", price: "Бесплатно" },
      { name: "Консультация с планом лечения", price: "от 500 ₽" },
      { name: "Прицельный рентген-снимок", price: "от 400 ₽" },
      { name: "Панорамный снимок (ОПТГ)", price: "от 1 200 ₽" },
    ],
  },
  {
    slug: "therapy",
    title: "Терапия",
    items: [
      { name: "Лечение кариеса", price: "от 2 500 ₽" },
      { name: "Лечение пульпита (1 канал)", price: "от 4 500 ₽" },
      { name: "Лечение периодонтита", price: "от 5 500 ₽" },
      { name: "Художественная реставрация", price: "от 4 500 ₽" },
      { name: "Реминерализирующая терапия", price: "от 1 500 ₽" },
    ],
  },
  {
    slug: "hygiene",
    title: "Гигиена и отбеливание",
    items: [
      { name: "Профгигиена (ультразвук + Air Flow)", price: "от 3 900 ₽" },
      {
        name: "Flash-отбеливание",
        price: "от 9 900 ₽",
        note: "немецкая технология · единственные в Уфе",
      },
      { name: "Фторирование эмали", price: "от 900 ₽" },
    ],
  },
  {
    slug: "prosthetics",
    title: "Протезирование",
    items: [
      { name: "Коронка из диоксида циркония", price: "от 18 000 ₽" },
      { name: "Винир E.max", price: "от 22 000 ₽" },
      { name: "Коронка металлокерамика", price: "от 12 000 ₽" },
      { name: "Съёмный протез", price: "от 24 000 ₽" },
    ],
  },
  {
    slug: "implantation",
    title: "Имплантация и хирургия",
    items: [
      { name: "Имплант (установка)", price: "от 29 000 ₽" },
      { name: "Удаление зуба", price: "от 1 800 ₽" },
      { name: "Сложное удаление", price: "от 4 500 ₽" },
      { name: "Костная пластика", price: "от 12 000 ₽" },
    ],
  },
  {
    slug: "orthodontics",
    title: "Ортодонтия",
    items: [
      { name: "Металлические брекеты (1 челюсть)", price: "от 35 000 ₽" },
      { name: "Керамические брекеты (1 челюсть)", price: "от 45 000 ₽" },
      { name: "Элайнеры (курс)", price: "по плану лечения" },
    ],
  },
];
