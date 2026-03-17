import { type CartResponseType } from "@/shared/types";
import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "./axiosBaseQuery";

export interface CreateCartItemValues {
  productVariantId: string;
  quantity: number;
  ingredientIds?: string[];
}

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: axiosBaseQuery(),
  tagTypes: ["Cart"],

  endpoints: (builder) => ({
    // Получить все элементы из корзины
    fetchCartItems: builder.query<CartResponseType, void>({
      query: () => ({ url: "/cart/all", method: "GET" }),
      providesTags: ["Cart"],
    }),

    // Изменить элементы в корзине
    updateItemQuantity: builder.mutation<
      CartResponseType,
      { id: string; quantity: number }
    >({
      query: ({ id, quantity }) => ({
        url: `/cart/${id}`,
        method: "PATCH",
        data: { quantity },
      }),
      invalidatesTags: ["Cart"],
    }),

    // Добавить элемент в корзину
    addCartItem: builder.mutation<CartResponseType, CreateCartItemValues>({
      query: (dto) => ({
        url: "/cart",
        method: "POST",
        data: dto,
      }),
      invalidatesTags: ["Cart"],
    }),

    // Удалить элемент из корзины
    removeCartItem: builder.mutation<CartResponseType, string>({
      query: (id) => ({
        url: `/cart/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
});

export const {
  useFetchCartItemsQuery,
  useUpdateItemQuantityMutation,
  useAddCartItemMutation,
  useRemoveCartItemMutation,
} = cartApi;
