import { useEffect } from "react";
import type { PizzaSize, PizzaType, ProductVariantType } from "../types";

interface UsePizzaVariantSelection {
  productVariants: ProductVariantType[];
  pizzaSize: PizzaSize;
  pizzaType: PizzaType;
  setPizzaSize: (size: PizzaSize) => void;
  setPizzaType: (type: PizzaType) => void;
}

/**
 * Хук для управления выбором варианта пиццы.
 * @returns объект с состоянием и методами для выбора варианта пиццы
 */

const usePizzaVariantSelection = ({
  productVariants,
  pizzaSize,
  pizzaType,
  setPizzaSize,
  setPizzaType,
}: UsePizzaVariantSelection) => {
  // Update selection when type or size changes to ensure a valid variant is always chosen
  useEffect(() => {
    const isAvailableVariant = productVariants.some(
      (item) => item.size === pizzaSize && item.pizzaType === pizzaType
    );

    if (!isAvailableVariant && productVariants.length > 0) {
      const availableVariant = productVariants.find(
        (item) => item.pizzaType === pizzaType
      );

      if (availableVariant) {
        setPizzaSize(availableVariant.size as PizzaSize);
        setPizzaType(availableVariant.pizzaType as PizzaType);
      }
    }
  }, [productVariants, pizzaSize, pizzaType, setPizzaSize, setPizzaType]);
};

export default usePizzaVariantSelection;
