import { type ProductType } from "../types";
import axiosInstance from "./instance";

export const search = async (query: string) => {
  const { data } = await axiosInstance.get<ProductType[]>(`/product/search`, {
    params: { query },
  });

  return data;
};

export const getAll = async () => {
  const { data } = await axiosInstance.get<ProductType[]>(`/product/all`);

  return data;
};

export const getById = async (productId: string) => {
  const { data } = await axiosInstance.get<ProductType>(
    `/product/${productId}`
  );

  return data;
};
