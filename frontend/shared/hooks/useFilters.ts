import { type PriceRange } from "@/components/common/Filters";
import { useState } from "react";
import { useSet } from "react-use";
import useTypedSearchParams from "./useTypedSearchParams";

const useFilters = () => {
  const searchParams = useTypedSearchParams();

  const [selectedIngredients, { toggle: toggleIngredient }] = useSet(
    new Set<string>(
      searchParams.ingredients ? searchParams.ingredients.split(",") : []
    )
  );

  const [pizzaTypes, { toggle: togglePizzaType }] = useSet(
    new Set<string>(
      searchParams.pizzaTypes ? searchParams.pizzaTypes.split(",") : []
    )
  );

  const [sizes, { toggle: toggleSize }] = useSet(
    new Set<string>(searchParams.sizes ? searchParams.sizes.split(",") : [])
  );

  const [prices, setPrices] = useState<PriceRange>({
    priceFrom: searchParams.priceFrom,
    priceTo: searchParams.priceTo,
  });

  const updatePrice = (name: keyof PriceRange, value: string) => {
    setPrices({
      ...prices,
      [name]: Number(value),
    });
  };

  const handleRangeChange = (value: number[]) => {
    setPrices({
      ...prices,
      priceFrom: value[0],
      priceTo: value[1],
    });
  };

  return {
    sizes,
    pizzaTypes,
    selectedIngredients,
    prices,
    setSizes: toggleSize,
    setPizzaTypes: togglePizzaType,
    setIngredients: toggleIngredient,
    setPrices,
    updatePrice,
    handleRangeChange,
  };
};

export default useFilters;
