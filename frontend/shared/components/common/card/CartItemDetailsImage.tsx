import { cn } from "@/shared/lib/utils";

interface CartItemDetailsInageProps {
  src: string;
  className?: string;
}

const CartItemDetailsImage = ({
  src,
  className,
}: CartItemDetailsInageProps) => {
  return <img src={src} className={cn("w-[60px] h-[60px]", className)} />;
};

export default CartItemDetailsImage;
