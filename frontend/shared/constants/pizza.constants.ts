export const pizzaMapSize = {
  20: "Маленькая",
  30: "Средняя",
  40: "Большая",
} as const;

export const pizzaMapType = {
  1: "Традиционное",
  2: "Тонкое",
} as const;

export const pizzaSizes = Object.entries(pizzaMapSize).map(([value, name]) => ({
  name,
  value,
}));

export const pizzaTypes = Object.entries(pizzaMapType).map(([value, name]) => ({
  name,
  value,
}));
