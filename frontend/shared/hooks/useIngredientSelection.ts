import { useSet } from "react-use";

interface ReturnProps {
  selectedIngredients: Set<number>;
  addIngredient: (ingredientId: number) => void;
}

/**
 * Хук для управления выбором ингредиентов.
 * @returns объект с состоянием и методами для выбора ингредиентов
 */

const useIngredientSelection = (): ReturnProps => {
  const [selectedIngredients, { toggle: addIngredient }] = useSet(
    new Set<number>([])
  );

  return {
    selectedIngredients,
    addIngredient,
  };
};

export default useIngredientSelection;
