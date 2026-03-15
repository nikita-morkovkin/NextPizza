import { useEffect, useMemo, useState } from "react";
import { type Variant } from "../components/common/GroupVariants";
import { pizzaSizes, pizzaTypes } from "../constants/pizza.constants";
import type { PizzaSize, PizzaType } from "../types/pizza.types";
import { type ProductVariantType } from "../types/product-variant.type";

interface UsePizzaSelectionProps {
  productVariants: ProductVariantType[];
}

interface ReturnProps {
  pizzaSize: PizzaSize;
  setPizzaSize: (size: PizzaSize) => void;
  pizzaType: PizzaType;
  setPizzaType: (type: PizzaType) => void;
  pizzaPrice: number;
  pizzaTypeOptions: Variant[];
  pizzaSizeOptions: Variant[];
}

const usePizzaSelection = ({
  productVariants,
}: UsePizzaSelectionProps): ReturnProps => {
  const [pizzaSize, setPizzaSize] = useState<PizzaSize>(20);
  const [pizzaType, setPizzaType] = useState<PizzaType>(1);

  // Control available sizes and types
  const availableSizes = useMemo(
    () => [...new Set(productVariants.map((item) => item.size))],
    [productVariants]
  );

  const availableTypes = useMemo(
    () => [...new Set(productVariants.map((item) => item.pizzaType))],
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

  const pizzaTypeOptions = useMemo(
    () =>
      pizzaTypes.map((item) => ({
        ...item,
        disabled: !availableTypes.includes(Number(item.value) as PizzaType),
      })),
    [availableTypes]
  );

  // Pizza price
  const pizzaPrice = useMemo(
    () =>
      productVariants.find(
        (item) => item.pizzaType === pizzaType && item.size === pizzaSize
      )?.price || 0,
    [pizzaType, pizzaSize, productVariants]
  );

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
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setPizzaSize(availableVariant.size as PizzaSize);
        setPizzaType(availableVariant.pizzaType as PizzaType);
      }
    }
  }, [productVariants, pizzaSize, pizzaType]);

  return {
    pizzaSize,
    setPizzaSize,
    pizzaType,
    setPizzaType,
    pizzaPrice,
    pizzaSizeOptions,
    pizzaTypeOptions,
  };
};

export default usePizzaSelection;
