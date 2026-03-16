import { pizzaMapType } from "../constants/pizza.constants";
import type { IngredientType, PizzaSize, PizzaType } from "../types";

const getCartItemsDetails = (
  pizzaType: PizzaType,
  pizzaSize: PizzaSize,
  ingredients: IngredientType[]
) => {
  const details = [];

  if (pizzaSize) {
    const typeName = pizzaMapType[pizzaType];
    details.push(`${typeName} ${pizzaSize} см`);
  }

  if (ingredients) {
    details.push(...ingredients.map((ingredient) => ingredient.name));
  }

  return details.join(", ");
};

export default getCartItemsDetails;
