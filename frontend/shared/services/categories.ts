import { type CategoryType } from "../types";
import axiosInstance from "./instance";

export const getAll = async () => {
  const { data } = await axiosInstance.get<CategoryType[]>("/category/all");

  return data;
};
