"use client";

import { cn } from "@/shared/lib/utils";
import { X } from "lucide-react";
import CountButton from "../CountButton";
import { type CartItemType } from "./cart-item.type";
import CartItemDetailsImage from "./CartItemDetailsImage";
import CartItemDetailsPrice from "./CartItemDetailsPrice";
import CartItemInfo from "./CartItemInfo";

interface CartItemProps extends CartItemType {
  details: string;
  onClickCountButton?: (type: "plus" | "minus") => void;
  onClickRemove?: () => void;
  className?: string;
}

const CheckoutCartItem = ({
  imageUrl,
  name,
  price,
  quantity,
  details,
  onClickCountButton,
  onClickRemove,
  className,
}: CartItemProps) => {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="flex items-center gap-5 flex-1">
        <CartItemDetailsImage src={imageUrl} />
        <CartItemInfo name={name} details={details} />
      </div>

      <CartItemDetailsPrice price={price} />

      <div className="flex items-center gap-5 ml-20">
        <CountButton
          onClick={(type) => onClickCountButton?.(type)}
          value={quantity}
        />
        <button onClick={onClickRemove}>
          <X
            className="text-gray-400 cursor-pointer hover:text-gray-600"
            size={20}
          />
        </button>
      </div>
    </div>
  );
};

export default CheckoutCartItem;
