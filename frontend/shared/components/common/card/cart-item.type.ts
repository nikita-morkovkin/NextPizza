import type { IngredientType, PizzaSize, PizzaType } from "@/shared/types";

export interface CartItemType {
  id: string;
  imageUrl: string;
  name: string;
  price: number;
  ingredients: IngredientType[];
  pizzaSize?: PizzaSize;
  pizzaType?: PizzaType;
  quantity: number;
  details: string;
}
