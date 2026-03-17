import { cn } from "@/shared/lib/utils";
import { Trash2Icon } from "lucide-react";
import CountButton from "../CountButton";
import { type CartItemType } from "./cart-item.type";
import CartItemDetailsImage from "./CartItemDetailsImage";
import CartItemDetailsPrice from "./CartItemDetailsPrice";
import CartItemInfo from "./CartItemInfo";

interface CartSheetItemProps extends CartItemType {
  onClickCountButton?: (type: "plus" | "minus") => void;
  onClickRemove?: () => void;
  className?: string;
}

const CartSheetItem = ({
  imageUrl,
  name,
  price,
  quantity,
  details,
  onClickCountButton,
  onClickRemove,
  className,
}: CartSheetItemProps) => {
  return (
    <div className={cn("flex bg-white p-5 rounded-md gap-6", className)}>
      <CartItemDetailsImage src={imageUrl} />

      <div className="flex-1">
        <CartItemInfo name={name} details={details} />

        <hr className="my-3" />

        <div className="flex items-center justify-between">
          <CountButton
            onClick={(type) => onClickCountButton?.(type)}
            value={quantity}
          />

          <div className="flex items-center gap-3">
            <CartItemDetailsPrice price={price} />
            <Trash2Icon
              onClick={onClickRemove}
              className="text-gray-400 cursor-pointer hover:text-gray-600"
              size={16}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSheetItem;
