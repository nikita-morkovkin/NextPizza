import { type CartItemType } from "@/shared/components/common/card/cart-item.type";
import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "./axiosBaseQuery";

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: axiosBaseQuery(),
  tagTypes: ["Cart"],

  endpoints: (builder) => ({
    // Получить все элементы из корзины
    fetchCartItems: builder.query<CartItemType[], void>({
      query: () => ({ url: "/cart/all", method: "GET" }),
      providesTags: ["Cart"],
    }),

    // Изменить элементы в корзине
    updateItemQuantity: builder.mutation<
      CartItemType,
      { id: number; quantity: number }
    >({
      query: ({ id, quantity }) => ({
        url: `/cart/${id}`,
        method: "PATCH",
        body: { quantity },
      }),
      invalidatesTags: ["Cart"],
    }),

    // Добавить элемент в корзину
    addCartItem: builder.mutation<CartItemType, unknown>({
      query: (values) => ({
        url: "/cart",
        method: "POST",
        body: values,
      }),
      invalidatesTags: ["Cart"],
    }),

    // Удалить элемент из корзины
    removeCartItem: builder.mutation<void, number>({
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
