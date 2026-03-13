import { API } from "@/services/api-client";
import { useEffect, useState } from "react";
import { type CategoryType } from "../types/category.type";

interface ReturnProps {
  categories?: CategoryType[];
  isLoading: boolean;
}

export const useGetAllCategories = (): ReturnProps => {
  const [categories, setCategories] = useState<CategoryType[]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    API.categories
      .getAll()
      .then((res) => {
        setCategories(res);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { categories, isLoading };
};
