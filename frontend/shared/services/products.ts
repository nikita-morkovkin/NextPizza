import { type ProductType } from "../types";
import axiosInstance from "./instance";

export const search = async (query: string) => {
  const { data } = await axiosInstance.get<ProductType[]>(`/product/search`, {
    params: { query },
  });

  return data;
};

export const getAllWithFilters = async (
  sizes?: string,
  pizzaTypes?: string,
  ingredients?: string,
  priceFrom?: string,
  priceTo?: string,
) => {
  try {
    const { data } = await axiosInstance.get<ProductType[]>(`/product/all`, {
      params: {
        sizes,
        pizzaTypes,
        ingredients,
        priceFrom,
        priceTo,
      },
    });

    return data;
  } catch {}
};

export const getById = async (productId: string) => {
  const { data } = await axiosInstance.get<ProductType>(
    `/product/${productId}`,
  );

  return data;
};
