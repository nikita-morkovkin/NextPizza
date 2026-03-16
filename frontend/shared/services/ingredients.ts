import { type IngredientType } from "../types";
import axiosInstance from "./instance";

export const getAll = async () => {
  const { data } = await axiosInstance.get<IngredientType[]>(
    `/ingredient/get-all`
  );

  return data;
};
