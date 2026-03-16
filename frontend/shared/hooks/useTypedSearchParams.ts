import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

interface ReturnProps {
  priceFrom?: number;
  priceTo?: number;
  ingredients?: string;
  sizes?: string;
  pizzaTypes?: string;
}

/**
 * Хук для получения типизированной строки поиска.
 * @returns объект с состоянием и методами для получения типизированной строки поиска
 */

const useTypedSearchParams = (): ReturnProps => {
  const searchParams = useSearchParams();

  return useMemo(() => {
    return {
      priceFrom: Number(searchParams.get("priceFrom")) || undefined,
      priceTo: Number(searchParams.get("priceTo")) || undefined,
      ingredients: searchParams.get("ingredients") || "",
      sizes: searchParams.get("sizes") || "",
      pizzaTypes: searchParams.get("pizzaTypes") || "",
    };
  }, [searchParams]);
};

export default useTypedSearchParams;
