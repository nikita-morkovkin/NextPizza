import { type CategoryType } from "@/shared/types/category.type";
import axiosInstance from "./instance";

export const getAll = async () => {
  const { data } = await axiosInstance.get<CategoryType[]>("/category/all");

  return data;
};
