"use client";

import { getCartItemsDetails } from "@/shared/lib";
import { useFetchCartItemsQuery } from "@/shared/store/api/cart.api";
import { PizzaSize, PizzaType } from "@/shared/types";
import { ArrowRight, Loader2 } from "lucide-react";
import Link from "next/link";
import { type PropsWithChildren } from "react";
import { Button } from "../../ui";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../ui/sheet";
import CartSheetItem from "./CartSheetItem";

const CartSheet = ({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) => {
  const { data, isLoading } = useFetchCartItemsQuery();

  const items = data?.items || [];
  const totalAmount = data?.totalPrice || 0;

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
            {isLoading ? (
              <div className="flex items-center justify-center h-full">
                <Loader2 className="w-6 h-6 animate-spin text-primary" />
              </div>
            ) : (
              <div className="space-y-4 mb-2">
                {items.map((item) => {
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
                        ingredients
                      )}
                    />
                  );
                })}
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
