import { pizzaMapType } from "../constants/pizza.constants";
import type { PizzaSize, PizzaType } from "../types";

export const getPizzaTextDetails = (
  pizzaSize: PizzaSize,
  pizzaType: PizzaType
) => {
  const textDetails = `${pizzaSize} см, ${pizzaMapType[
    pizzaType
  ].toLowerCase()} тесто`;

  return textDetails;
};
