import { cn } from "@/shared/lib/utils";

interface CartItemDetailsPriceProps {
  price: number;
  className?: string;
}

const CartItemDetailsPrice = ({
  price,
  className,
}: CartItemDetailsPriceProps) => {
  return <h2 className={cn("font-bold", className)}>{price} ₽</h2>;
};

export default CartItemDetailsPrice;
