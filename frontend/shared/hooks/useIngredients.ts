import { API } from "@/services/api-client";
import { useEffect, useState } from "react";
import { type IngredientType } from "../types/ingredient.type";

interface ReturnProps {
  ingredients: IngredientType[];
  loading: boolean;
}

const useIngredients = (): ReturnProps => {
  const [ingredients, setIngredients] = useState<IngredientType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    API.ingredients
      .getAll()
      .then((res) => {
        setIngredients(res);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    ingredients,
    loading,
  };
};

export default useIngredients;
