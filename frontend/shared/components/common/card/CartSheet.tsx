"use client";

import { ArrowRight } from "lucide-react";
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

interface CartSheetProps {
  className?: string;
}

const CartSheet = ({
  className,
  children,
}: PropsWithChildren<CartSheetProps>) => {
  return (
    <div className={className}>
      <Sheet>
        <SheetTrigger asChild>{children}</SheetTrigger>
        <SheetContent className="flex flex-col justify-between pb-0">
          <SheetHeader>
            <SheetTitle className="mt-2 ml-3">
              В корзине <span className="font-bold">3 товара</span>
            </SheetTitle>
          </SheetHeader>

          <div className="mt-5 mx-3 overflow-auto flex-1">
            <div className="mb-2">
              <CartSheetItem
                id={""}
                imageUrl={"https://ru.pinterest.com/pin/933300722803416169/"}
                name={""}
                price={0}
                ingredients={[]}
                quantity={0}
                details={""}
              />
            </div>
          </div>

          <SheetFooter className=" bg-white p-8">
            <div>
              <div className="flex mb-4 items-center">
                <span className="flex flex-1 text-lg text-neutral-500">
                  Итого
                  <div className="flex-1 border border-dashed border-b-neutral-200 relative top-0 mx-2" />
                </span>

                <span className="font-bold text-lg">500</span>
              </div>

              <Link href={"/card"}>
                <Button type="submit" className="w-full h-12 text-base">
                  Оформить заказ
                  <ArrowRight className="w-5 ml-2" />
                </Button>
              </Link>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default CartSheet;
