"use client";

import { getCartItemsDetails } from "@/shared/lib";
import { cn } from "@/shared/lib/utils";
import {
  useFetchCartItemsQuery,
  useRemoveCartItemMutation,
  useUpdateItemQuantityMutation,
} from "@/shared/store/api/cart.api";
import { PizzaSize, PizzaType } from "@/shared/types";
import { ArrowLeft, ArrowRight, Loader2, Trash } from "lucide-react";
import Link from "next/link";
import { type PropsWithChildren } from "react";
import { Button } from "../../ui";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../ui/sheet";
import { Title } from "../Title";
import CartSheetItem from "./CartSheetItem";

const CartSheet = ({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) => {
  const { data, isLoading } = useFetchCartItemsQuery();
  const [updateItemQuantity, { isLoading: isUpdating }] =
    useUpdateItemQuantityMutation();
  const [removeCartItem, { isLoading: isRemoving }] =
    useRemoveCartItemMutation();

  const items = data?.items || [];
  const totalAmount = data?.totalPrice || 0;

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
    <div className={className}>
      <Sheet>
        <SheetTrigger asChild>{children}</SheetTrigger>
        <SheetContent className="flex flex-col justify-between pb-0">
          <SheetHeader>
            <SheetTitle className="mt-2 ml-3">
              В корзине{" "}
              <span className="font-bold">{items.length} товаров</span>
            </SheetTitle>
          </SheetHeader>

          <div className="mt-5 mx-3 overflow-auto flex-1">
            {isLoading || isUpdating || isRemoving ? (
              <div className="flex items-center justify-center h-full">
                <Loader2 className="w-6 h-6 animate-spin text-primary" />
              </div>
            ) : (
              <div
                className={cn(
                  "space-y-4 mb-2 mt-5",
                  items.length ? "" : "h-[80%]",
                )}
              >
                {items.length ? (
                  items.map((item) => {
                    const { productVariant, ingredients, quantity, id } = item;
                    const { product } = productVariant;

                    return (
                      <CartSheetItem
                        key={id}
                        id={id}
                        imageUrl={product.imageUrl}
                        name={product.name}
                        price={productVariant.price}
                        quantity={quantity}
                        ingredients={ingredients}
                        details={getCartItemsDetails(
                          productVariant.pizzaType as PizzaType,
                          productVariant.size as PizzaSize,
                          ingredients,
                        )}
                        onClickCountButton={(type) =>
                          onClickCountButton(id, quantity, type)
                        }
                        onClickRemove={() => onClickRemove(id)}
                      />
                    );
                  })
                ) : (
                  <div className="flex flex-col justify-center items-center gap-3 h-full">
                    <Trash className="size-14" />

                    <div className="flex flex-col items-center gap-1 mt-3">
                      <Title
                        text="Корзина пуста"
                        size="md"
                      />

                      <p className="text-sm text-muted-foreground">
                        Добавьте товары, чтобы совершить заказ
                      </p>
                    </div>

                    <SheetClose className="w-full">
                      <Button className="w-[75%] py-6 mt-5">
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Вернуться назад
                      </Button>
                    </SheetClose>
                  </div>
                )}
              </div>
            )}
          </div>

          {items.length > 0 && (
            <SheetFooter className="bg-white p-8">
              <div className="w-full">
                <div className="flex mb-4 items-center">
                  <span className="flex flex-1 text-lg text-neutral-500">
                    Итого
                    <div className="flex-1 border border-dashed border-b-neutral-200 relative top-[-3px] mx-2" />
                  </span>
                  <span className="font-bold text-lg">{totalAmount} ₽</span>
                </div>

                <Link href="/cart">
                  <Button type="submit" className="w-full h-12 text-base">
                    Оформить заказ
                    <ArrowRight className="w-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </SheetFooter>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default CartSheet;
