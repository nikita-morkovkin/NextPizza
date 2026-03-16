import { type PriceRange } from "@/shared/components/common/Filters";
import { useRouter } from "next/navigation";
import qs from "qs";
import { useEffect } from "react";

interface QueryFilters {
  pizzaTypes: Set<string>;
  sizes: Set<string>;
  selectedIngredients: Set<string>;
  prices: PriceRange;
}

/**
 * Хук для применения фильтров к запросу.
 * @param filters - объект с фильтрами
 */

const useQueryFilters = (filters: QueryFilters) => {
  const { pizzaTypes, sizes, selectedIngredients, prices } = filters;

  const router = useRouter();

  useEffect(() => {
    const params = {
      ...prices,
      pizzaTypes: Array.from(pizzaTypes),
      sizes: Array.from(sizes),
      ingredients: Array.from(selectedIngredients),
    };

    const queryString = qs.stringify(params, {
      arrayFormat: "comma",
    });

    router.push(`?${queryString}`, {
      scroll: false,
    });
  }, [selectedIngredients, pizzaTypes, prices, sizes, router]);
};

export default useQueryFilters;
