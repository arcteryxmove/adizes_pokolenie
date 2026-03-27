import type { CSSProperties } from "react";

export type TagTone =
  | "growth"
  | "warn"
  | "prime"
  | "caution"
  | "danger"
  | "crit"
  | "death"
  | "end";

export type Stage = {
  id: number;
  name: string;
  en: string;
  spiral: string;
  color: string;
  tag: string;
  tagTone: TagTone;
  structure: string;
  strengths: string;
  risks: string;
  collins: string;
  action: string;
  cx: number;
  cy: number;
  r: number;
};

export const STAGES: Stage[] = [
  {
    id: 1,
    name: "Ухаживание",
    en: "Courtship",
    spiral: "Фиолетовый / Синий",
    color: "#378ADD",
    tag: "Рост",
    tagTone: "growth",
    structure: "Нет структуры. Всё держится на идее основателя.",
    strengths: "Энергия, мечта, идея",
    risks: "Нет продукта, нет денег",
    collins: "Pre-Level 1",
    action: "Найти людей Уровня 4–5 по Коллинзу",
    cx: 55,
    cy: 228,
    r: 9,
  },
  {
    id: 2,
    name: "Младенчество",
    en: "Infancy",
    spiral: "Красный / Синий",
    color: "#E24B4A",
    tag: "Рост",
    tagTone: "growth",
    structure: "Простая / линейная. Основатель решает всё.",
    strengths: "Гибкость, скорость",
    risks: "Смерть от кассового разрыва",
    collins: "Уровень 1–2",
    action: "Нанять A-тип (операционный менеджер). Контроль кассы.",
    cx: 175,
    cy: 200,
    r: 9,
  },
  {
    id: 3,
    name: "Go-Go",
    en: "Go-Go",
    spiral: "Красный / Оранжевый",
    color: "#D85A30",
    tag: "Рост",
    tagTone: "growth",
    structure: "Функциональная (стихийная). Люди — по доверию.",
    strengths: "Продажи, экспансия, энергия",
    risks: "Распыление, «мышеловка основателя»",
    collins: "Уровень 3",
    action: "Делегировать. Нанять COO. Зафиксировать 3–5 приоритетов.",
    cx: 265,
    cy: 165,
    r: 9,
  },
  {
    id: 4,
    name: "Юность",
    en: "Adolescence",
    spiral: "Оранжевый / Зелёный",
    color: "#D4537E",
    tag: "Переход",
    tagTone: "warn",
    structure: "Переход к дивизиональной. Конфликт старожилов и менеджеров.",
    strengths: "Попытка систематизировать",
    risks: "Война основатель vs менеджмент. Кризис культуры.",
    collins: "Уровень 4 — нужен лидер, не менеджер",
    action: "CEO → Уровень 5. Внедрить OKR. Совет директоров.",
    cx: 355,
    cy: 118,
    r: 9,
  },
  {
    id: 5,
    name: "Расцвет ★",
    en: "Prime",
    spiral: "Зелёный / Жёлтый",
    color: "#639922",
    tag: "★ ПИКОВАЯ ТОЧКА",
    tagTone: "prime",
    structure: "Матричная / дивизиональная. PAEI сбалансирован.",
    strengths: "Рост + прибыль + культура + клиенты",
    risks: "Самоуспокоенность — начало падения",
    collins: "Лидер Уровня 5. «Сначала кто, потом что». Концепция ёжика.",
    action: "Удерживать: обновление, люди, предпринимательский дух.",
    cx: 500,
    cy: 55,
    r: 16,
  },
  {
    id: 6,
    name: "Стабильность",
    en: "Stable",
    spiral: "Синий / Оранжевый",
    color: "#BA7517",
    tag: "⚠ Осторожно",
    tagTone: "caution",
    structure: "Функциональная жёсткая. Процессы > люди. Бюджеты > инновации.",
    strengths: "Предсказуемость, рентабельность",
    risks: "Потеря предпринимательства, стагнация R&D",
    collins: "1-я стадия упадка: самодовольство",
    action: "Создать внутренние венчуры. Вернуть предпринимателей в C-suite.",
    cx: 615,
    cy: 118,
    r: 9,
  },
  {
    id: 7,
    name: "Аристократия",
    en: "Aristocracy",
    spiral: "Синий (жёсткий)",
    color: "#185FA5",
    tag: "⚠ Опасно",
    tagTone: "danger",
    structure: "Иерархическая. Власть у финансистов и юристов.",
    strengths: "Много денег (пока), стабильный бренд",
    risks: "Никто не хочет быть виноватым. M&A вместо органики.",
    collins: "2-я стадия упадка: самонадеянность",
    action: "СРОЧНО: смена CEO, реструктуризация на SBU. Иначе — точка невозврата.",
    cx: 700,
    cy: 152,
    r: 9,
  },
  {
    id: 8,
    name: "Ранняя бюрократия",
    en: "Early Bureaucracy",
    spiral: "Синий (патологический)",
    color: "#5F5E5A",
    tag: "🔴 Критично",
    tagTone: "crit",
    structure: "Жёсткая бюрократическая. Политика вместо стратегии.",
    strengths: "Формально — ещё жива",
    risks: "Внутренние конфликты, клиент забыт",
    collins: "3-я стадия: отрицание рисков",
    action: "Последний шанс: внешний CEO + радикальная смена структуры.",
    cx: 785,
    cy: 188,
    r: 9,
  },
  {
    id: 9,
    name: "Бюрократия",
    en: "Bureaucracy",
    spiral: "Красный / Синий (дисфункц.)",
    color: "#E24B4A",
    tag: "💀 Агония",
    tagTone: "death",
    structure: "Выжить только за счёт монополии / субсидий.",
    strengths: "—",
    risks: "Абсолютная неэффективность",
    collins: "4-я стадия: поиск спасителя",
    action: "Банкротство / продажа / реструктуризация.",
    cx: 865,
    cy: 212,
    r: 9,
  },
  {
    id: 10,
    name: "Смерть 💀",
    en: "Death",
    spiral: "—",
    color: "#A32D2D",
    tag: "💀 Конец",
    tagTone: "end",
    structure: "Отсутствует.",
    strengths: "—",
    risks: "Ликвидация",
    collins: "5-я стадия: капитуляция",
    action: "Не допустить. Точка невозврата — Аристократия.",
    cx: 935,
    cy: 228,
    r: 14,
  },
];

export type CollinsLevel = {
  n: number;
  title: string;
  bg: string;
  fg: string;
  desc: string;
  l5?: boolean;
};

export const LEVELS: CollinsLevel[] = [
  {
    n: 1,
    title: "Высококвалифицированный специалист",
    bg: "#E6F1FB",
    fg: "#0C447C",
    desc: "Вносит вклад знаниями, навыками, работоспособностью и дисциплиной.",
  },
  {
    n: 2,
    title: "Ценный член команды",
    bg: "#B5D4F4",
    fg: "#0C447C",
    desc: "Помогает достигать целей группы, эффективно работает с коллегами.",
  },
  {
    n: 3,
    title: "Компетентный менеджер",
    bg: "#FAC775",
    fg: "#854F0B",
    desc: "Организует людей и ресурсы для достижения заранее намеченных целей.",
  },
  {
    n: 4,
    title: "Эффективный лидер",
    bg: "#C0DD97",
    fg: "#3B6D11",
    desc: "Катализирует приверженность и стремление к чёткому видению. Стимулирует высокие стандарты.",
  },
  {
    n: 5,
    title: "Руководитель Уровня 5 ★",
    bg: "#639922",
    fg: "#ffffff",
    desc: "Строит непреходящее величие через парадоксальное сочетание личной скромности и несгибаемой воли. Думает о компании, а не о себе.",
    l5: true,
  },
];

export type OrgRow = {
  stage: string;
  current: string;
  do: string;
  target: string;
  accent: string;
  prime?: boolean;
};

export const ORG_ROWS: OrgRow[] = [
  {
    stage: "Ухаживание / Младенчество",
    current: "Нет / простая линейная",
    do: "Добавить A-тип (операционный менеджер)",
    target: "Линейно-функциональная",
    accent: "#378ADD",
  },
  {
    stage: "Go-Go",
    current: "Стихийная функциональная",
    do: "Делегировать, нанять COO, фиксировать приоритеты",
    target: "Функциональная с чёткими ролями",
    accent: "#D85A30",
  },
  {
    stage: "Юность",
    current: "Конфликтная переходная",
    do: "CEO → Уровень 5. OKR. Совет директоров.",
    target: "Дивизиональная / матричная",
    accent: "#D4537E",
  },
  {
    stage: "Расцвет ★",
    current: "Матричная / дивизиональная",
    do: "Удерживать PAEI-баланс, инвестировать в людей",
    target: "Та же + внутренние венчуры",
    accent: "#639922",
    prime: true,
  },
  {
    stage: "Стабильность",
    current: "Функциональная жёсткая",
    do: "Вернуть предпринимателей в C-suite",
    target: "SBU + венчурные лаборатории",
    accent: "#BA7517",
  },
  {
    stage: "Аристократия",
    current: "Иерархическая",
    do: "Срочная смена CEO, реструктуризация",
    target: "SBU или продажа единиц",
    accent: "#185FA5",
  },
  {
    stage: "Бюрократия / Смерть",
    current: "Патологическая",
    do: "M&A / банкротство / ликвидация",
    target: "Нет органического пути",
    accent: "#A32D2D",
  },
];

export const NAV_LINKS = [
  { href: "#section-1", label: "Кривая жизненного цикла" },
  { href: "#section-2", label: "Стадии + Спираль" },
  { href: "#section-3", label: "Коллинз: 5 уровней" },
  { href: "#section-4", label: "Пик и упадок" },
  { href: "#section-5", label: "Оргструктура роста" },
  { href: "#section-6", label: "Итоги" },
] as const;

export const SECTION_IDS = [
  "section-1",
  "section-2",
  "section-3",
  "section-4",
  "section-5",
  "section-6",
] as const;

export type OutcomeBlock = {
  num: 2 | 3 | 4 | 5;
  title: string;
  /** Короткие абзацы — отображаются по порядку */
  paragraphs: string[];
  accent: string;
};

export const OUTCOME_BLOCKS: OutcomeBlock[] = [
  {
    num: 2,
    title: "Уровни по Спиральной динамике",
    paragraphs: [
      "Компании проходят через цвета: фиолетовый и красный — хаос и власть одного человека, синий — правила и порядок, оранжевый — результат и конкуренция, зелёный — команда и ценности, жёлтый — системное мышление. Большинство компаний застревают на красном или синем.",
    ],
    accent: "#378ADD",
  },
  {
    num: 3,
    title: "Структура и цвет по каждой стадии",
    paragraphs: [
      "Ухаживание и Младенчество — нет структуры, фиолетовый/красный.",
      "Go-Go — стихийная функциональная, красный/оранжевый.",
      "Юность — переходная к матричной, оранжевый/зелёный.",
      "Расцвет — матричная сбалансированная, зелёный/жёлтый.",
      "Стабильность — жёсткая функциональная, синий/оранжевый.",
      "Аристократия — иерархическая, синий.",
      "Бюрократия и Смерть — патологическая или никакой, красный дисфункциональный.",
    ],
    accent: "#D85A30",
  },
  {
    num: 4,
    title: "Где пик, где умирает",
    paragraphs: [
      "Пик — стадия Расцвет. Там одновременно есть рост, прибыль, культура и клиенты. Умирает компания на стадии Смерть, но точка невозврата — это Аристократия. После неё спасти компанию органически практически невозможно, только внешнее вмешательство или продажа. Коллинз это подтверждает своими пятью стадиями упадка — они один в один накладываются на нисходящую часть кривой Адизеса.",
    ],
    accent: "#639922",
  },
  {
    num: 5,
    title: "Какая структура ведёт компанию вверх",
    paragraphs: [
      "Та, которая опережает текущую стадию на полшага. Универсального ответа нет — но целевая структура для роста это матрица или дивизиональная с балансом PAEI: есть тот кто делает, тот кто организует, тот кто придумывает и тот кто объединяет людей. Плюс то, о чём говорит Коллинз: сначала нужные люди, потом стратегия. Без людей Уровня 5 никакая структура не поможет.",
    ],
    accent: "#185FA5",
  },
];

const growth: CSSProperties = {
  color: "var(--text)",
  border: "1px solid rgba(99, 153, 34, 0.35)",
  background: "color-mix(in srgb, var(--surface) 80%, #639922)",
};

export function getTagPillStyle(tone: TagTone): CSSProperties {
  const map: Record<TagTone, CSSProperties> = {
    growth,
    warn: {
      color: "var(--text)",
      border: "1px solid rgba(212, 83, 126, 0.35)",
      background: "color-mix(in srgb, var(--surface) 82%, #D4537E)",
    },
    prime: {
      color: "var(--text)",
      border: "1px solid rgba(99, 153, 34, 0.5)",
      background: "color-mix(in srgb, var(--surface) 75%, #639922)",
    },
    caution: {
      color: "var(--text)",
      border: "1px solid rgba(186, 117, 23, 0.4)",
      background: "color-mix(in srgb, var(--surface) 85%, #BA7517)",
    },
    danger: {
      color: "var(--text)",
      border: "1px solid rgba(24, 95, 165, 0.35)",
      background: "color-mix(in srgb, var(--surface) 88%, #185FA5)",
    },
    crit: {
      color: "var(--text)",
      border: "1px solid rgba(95, 94, 90, 0.4)",
      background: "color-mix(in srgb, var(--surface) 88%, #5F5E5A)",
    },
    death: {
      color: "var(--text)",
      border: "1px solid rgba(226, 75, 74, 0.4)",
      background: "color-mix(in srgb, var(--surface) 85%, #E24B4A)",
    },
    end: {
      color: "var(--text)",
      border: "1px solid rgba(163, 45, 45, 0.45)",
      background: "color-mix(in srgb, var(--surface) 85%, #A32D2D)",
    },
  };
  return map[tone] ?? growth;
}
