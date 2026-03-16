import type {
  IngredientType,
  PizzaSize,
  PizzaType,
  ProductVariantType,
} from "../types";

interface CalcPizzaPriceProps {
  productVariants: ProductVariantType[];
  ingredients: IngredientType[];
  selectedIngredients: Set<number>;
  pizzaType: PizzaType;
  pizzaSize: PizzaSize;
}

/**
 * Вычисляет общую стоимость пиццы на основе выбранных ингредиентов, типа и размера.
 *
 * @param productVariants - варианты продуктов
 * @param ingredients - ингредиенты
 * @param selectedIngredients - выбранные ингредиенты
 * @param pizzaType - тип пиццы
 * @param pizzaSize - размер пиццы
 * @returns объект с общей стоимостью пиццы
 */

const calcPizzaPrice = ({
  productVariants,
  ingredients,
  selectedIngredients,
  pizzaType,
  pizzaSize,
}: CalcPizzaPriceProps) => {
  const pizzaPrice =
    productVariants.find(
      (item) => item.pizzaType === pizzaType && item.size === pizzaSize
    )?.price || 0;

  const ingredientsPrice = ingredients
    .filter((ingredient) => selectedIngredients.has(ingredient.id))
    .reduce((acc, ingredient) => acc + ingredient.price, 0);

  const totalPrice = pizzaPrice + ingredientsPrice;

  return { totalPrice };
};

export default calcPizzaPrice;
