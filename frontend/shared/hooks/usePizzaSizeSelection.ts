import { useMemo, useState } from "react";
import { type Variant } from "../components/common/GroupVariants";
import { pizzaSizes } from "../constants/pizza.constants";
import type { PizzaSize, ProductVariantType } from "../types";

interface ReturnProps {
  pizzaSize: PizzaSize;
  setPizzaSize: (size: PizzaSize) => void;
  pizzaSizeOptions: Variant[];
}

/**
 * Хук для управления выбором размера пиццы.
 * @param productVariants  - варианты продуктов
 * @returns объект с состоянием и методами для выбора размера пиццы
 */

const usePizzaSizeSelection = (
  productVariants: ProductVariantType[]
): ReturnProps => {
  const [pizzaSize, setPizzaSize] = useState<PizzaSize>(20);

  // Control available sizes and types
  const availableSizes = useMemo(
    () => [...new Set(productVariants.map((item) => item.size))],
    [productVariants]
  );

  const pizzaSizeOptions = useMemo(
    () =>
      pizzaSizes.map((item) => ({
        ...item,
        disabled: !availableSizes.includes(Number(item.value) as PizzaSize),
      })),
    [availableSizes]
  );

  return {
    pizzaSize,
    setPizzaSize,
    pizzaSizeOptions,
  };
};

export default usePizzaSizeSelection;
