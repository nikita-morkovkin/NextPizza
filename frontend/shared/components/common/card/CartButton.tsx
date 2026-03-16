import { ArrowRight, ShoppingCart } from "lucide-react";
import { Button } from "../../ui";
import CartSheet from "./CartSheet";

const CartButton = () => {
  return (
    <CartSheet>
      <Button className="group relative flex items-center overflow-hidden">
        <b className="text-white">520₽</b>

        <span className="h-4 w-px bg-white/30 mx-3" />

        <div className="relative flex items-center">
          <div className="flex items-center gap-1 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-2">
            <ShoppingCart className="text-white" size={16} />
            <b className="text-white">3</b>
          </div>

          <ArrowRight
            size={16}
            className="absolute left-0 text-white transition-all duration-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
          />
        </div>
      </Button>
    </CartSheet>
  );
};

export default CartButton;
