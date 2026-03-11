import { type IngredientType } from "@/shared/types/ingredient.type";
import axiosInstance from "./instance";

export const getAll = async () => {
  const { data } = await axiosInstance.get<IngredientType[]>(
    `/ingredient/get-all`
  );

  return data;
};
