import { useMemo, useState } from "react";
import { type Variant } from "../components/common/GroupVariants";
import { pizzaTypes } from "../constants/pizza.constants";
import type { PizzaType, ProductVariantType } from "../types";

interface ReturnProps {
  pizzaType: PizzaType;
  setPizzaType: (type: PizzaType) => void;
  pizzaTypeOptions: Variant[];
}

const usePizzaTypeSelection = (
  productVariants: ProductVariantType[]
): ReturnProps => {
  const [pizzaType, setPizzaType] = useState<PizzaType>(1);

  const availableTypes = useMemo(
    () => [...new Set(productVariants.map((item) => item.pizzaType))],
    [productVariants]
  );

  const pizzaTypeOptions = useMemo(
    () =>
      pizzaTypes.map((item) => ({
        ...item,
        disabled: !availableTypes.includes(Number(item.value) as PizzaType),
      })),
    [availableTypes]
  );

  return {
    pizzaType,
    setPizzaType,
    pizzaTypeOptions,
  };
};

export default usePizzaTypeSelection;
