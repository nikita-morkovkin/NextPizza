import { pizzaMapSize, pizzaMapType } from "../constants/pizza.constants";

export type PizzaSize = keyof typeof pizzaMapSize;
export type PizzaType = keyof typeof pizzaMapType;
