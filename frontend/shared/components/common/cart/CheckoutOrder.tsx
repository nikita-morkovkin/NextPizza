"use client";

import useGetProductPrices from "@/shared/hooks/useGetProductPrices";
import { cn } from "@/shared/lib/utils";
import { ArrowRight, Package, Percent, Truck } from "lucide-react";
import { Button, Skeleton } from "../../ui";
import WhiteBlock from "../WhiteBlock";
import CheckoutItemDetails from "./CheckoutItemDetails";

interface CheckoutOrderProps {
  isSubmitting: boolean;
  className?: string;
}

const CheckoutOrder = ({ isSubmitting, className }: CheckoutOrderProps) => {
  const { isLoading, originalPrice, taxAmount, deliveryFee, totalPrice } =
    useGetProductPrices();

  return (
    <div className={cn(`w-[450px]`, className)}>
      <WhiteBlock className="p-6 sticky top-4">
        <div className="flex flex-col gap-1">
          <p className="text-xl">Итого: </p>
          {isLoading ? (
            <Skeleton className="w-40 h-9 rounded-xl" />
          ) : (
            <p className="text-4xl font-extrabold">{totalPrice.toFixed(2)}</p>
          )}
        </div>

        <CheckoutItemDetails
          Icon={<Package />}
          title="Стоимость товаров"
          value={
            isLoading ? (
              <Skeleton className="w-20 h-5" />
            ) : (
              originalPrice.toFixed(2)
            )
          }
        />
        <CheckoutItemDetails
          Icon={<Percent />}
          title="Налоги"
          value={
            isLoading ? <Skeleton className="w-20 h-5" /> : taxAmount.toFixed(2)
          }
        />
        <CheckoutItemDetails
          Icon={<Truck />}
          title="Доставка"
          value={
            isLoading ? (
              <Skeleton className="w-20 h-5" />
            ) : (
              deliveryFee.toFixed(2)
            )
          }
        />

        <Button
          type="submit"
          disabled={isLoading || isSubmitting}
          className="w-full h-14 rounded-xl mt-6 text-base font-bold hover:text-white hover:bg-primary transition duration-300"
        >
          Перейти к оплате
          <ArrowRight size={6} />
        </Button>
      </WhiteBlock>
    </div>
  );
};

export default CheckoutOrder;
