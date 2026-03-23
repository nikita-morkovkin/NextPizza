"use client";

import { getPizzaTextDetails } from "@/shared/lib/get-pizza-text-details.util";
import {
  useFetchCartItemsQuery,
  useRemoveCartItemMutation,
  useUpdateItemQuantityMutation,
} from "@/shared/store/api/cart.api";
import type { PizzaSize, PizzaType } from "@/shared/types";
import { Loader, ShoppingCart } from "lucide-react"; // Добавил иконку корзины
import WhiteBlock from "../WhiteBlock";
import { CheckoutCartItem } from "../card";

const CheckoutSheet = () => {
  const { data, isLoading } = useFetchCartItemsQuery();
  const [updateItemQuantity] = useUpdateItemQuantityMutation();
  const [removeCartItem] = useRemoveCartItemMutation();

  const items = data?.items || [];
  const isEmpty = items.length === 0;

  const onClickCountButton = (
    id: string,
    quantity: number,
    type: "plus" | "minus",
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;

    if (newQuantity > 0) {
      updateItemQuantity({ id, quantity: newQuantity });
    }
  };

  const onClickRemove = (id: string) => {
    removeCartItem(id);
  };

  return (
    <WhiteBlock title="1. Корзина">
      <div className="flex flex-col gap-5">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center gap-3">
            <Loader size={28} className="animate-spin text-orange-500" />
            <p className="font-semibold text-gray-400">
              Идет загрузка корзины...
            </p>
          </div>
        ) : isEmpty ? (
          <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
            <ShoppingCart size={48} className="text-gray-200 mb-4" />
            <h3 className="text-xl font-bold">Ваша корзина пуста</h3>
            <p className="text-gray-400 mt-1">
              Добавьте хотя бы одну пиццу, чтобы совершить заказ
            </p>
          </div>
        ) : (
          items.map((product) => {
            const { id, ingredients, productVariant, quantity } = product;

            return (
              <CheckoutCartItem
                key={id}
                id={id}
                ingredients={ingredients}
                imageUrl={productVariant.product.imageUrl}
                details={getPizzaTextDetails(
                  productVariant.size as PizzaSize,
                  productVariant.pizzaType as PizzaType,
                )}
                name={productVariant.product.name}
                price={productVariant.price}
                quantity={quantity}
                onClickCountButton={(type) =>
                  onClickCountButton(id, quantity, type)
                }
                onClickRemove={() => onClickRemove(id)}
              />
            );
          })
        )}
      </div>
    </WhiteBlock>
  );
};

export default CheckoutSheet;
