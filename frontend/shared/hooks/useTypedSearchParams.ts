import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

interface ReturnProps {
  priceFrom?: number;
  priceTo?: number;
  ingredients?: string;
  sizes?: string;
  pizzaTypes?: string;
}

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
