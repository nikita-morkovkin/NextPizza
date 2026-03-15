import { useMemo } from "react";
import { useSet } from "react-use";
import { type IngredientType } from "../types/ingredient.type";

interface UseIngredientSelectionProps {
  ingredients: IngredientType[];
}

interface ReturnProps {
  selectedIngredients: Set<number>;
  addIngredient: (ingredientId: number) => void;
  ingredientsPrice: number;
}

const useIngredientSelection = ({
  ingredients,
}: UseIngredientSelectionProps): ReturnProps => {
  const [selectedIngredients, { toggle: addIngredient }] = useSet(
    new Set<number>([])
  );

  const ingredientsPrice = useMemo(
    () =>
      ingredients
        .filter((ingredient) => selectedIngredients.has(ingredient.id))
        .reduce((acc, ingredient) => acc + ingredient.price, 0),
    [selectedIngredients, ingredients]
  );

  return {
    selectedIngredients,
    addIngredient,
    ingredientsPrice,
  };
};

export default useIngredientSelection;
