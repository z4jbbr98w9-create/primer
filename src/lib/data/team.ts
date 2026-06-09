export type Doctor = {
  name: string;
  role: string;
  experience: string;
  focus: string;
  initials: string;
};

export const team: Doctor[] = [
  {
    name: "Алина Гайнуллина",
    role: "Главный врач · стоматолог-терапевт",
    experience: "14 лет",
    focus: "Эстетическая реставрация, лечение под микроскопом",
    initials: "АГ",
  },
  {
    name: "Тимур Хасанов",
    role: "Имплантолог · хирург",
    experience: "12 лет",
    focus: "Имплантация, костная пластика, сложные удаления",
    initials: "ТХ",
  },
  {
    name: "Рената Сафина",
    role: "Стоматолог-ортопед",
    experience: "10 лет",
    focus: "Виниры, коронки, цифровое протезирование",
    initials: "РС",
  },
  {
    name: "Динар Юсупов",
    role: "Ортодонт",
    experience: "9 лет",
    focus: "Брекет-системы, элайнеры, исправление прикуса",
    initials: "ДЮ",
  },
  {
    name: "Камила Ахметова",
    role: "Гигиенист · специалист Flash",
    experience: "8 лет",
    focus: "Профгигиена, Air Flow, Flash-отбеливание",
    initials: "КА",
  },
];
