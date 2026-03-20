"use client";

import { Button } from "@/shared/components/ui";
import { PRODUCT_STANDARD_TEXT_DETAILS } from "@/shared/constants/product-standard-text-details.constant";
import { cn } from "@/shared/lib/utils";
import { useAddCartItemMutation } from "@/shared/store/api/cart.api";
import { Loader } from "lucide-react";
import toast from "react-hot-toast";
import { Title } from "../Title";

interface ChooseModalProductProps {
  imageUrl: string;
  name: string;
  price: number;
  productVariantId: string;
  onClickAdd?: () => void;
  className?: string;
}

const ChooseProductForm = ({
  imageUrl,
  name,
  price,
  productVariantId,
  onClickAdd,
  className,
}: ChooseModalProductProps) => {
  const [addCartItem, { isLoading }] = useAddCartItemMutation();

  const handleClickAdd = async () => {
    try {
      await addCartItem({
        productVariantId,
        quantity: 1,
        ingredientIds: [],
      });

      onClickAdd?.();
      toast.success(`${name} добавлен в корзину`);
    } catch {
      toast.error(`${name} не удалось добавить в корзину`);
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center gap-5">
        <Loader className="animate-spin size-10" />
        <p>Загрузка...</p>
      </div>
    );
  }

  return (
    <div className={cn("flex flex-1", className)}>
      <div className="flex items-center justify-center flex-1 relative w-full">
        <img
          src={imageUrl}
          alt={name}
          className="relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]"
        />
      </div>

      <div className="w-1/2 p-7 bg-[#f7f6f5]">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        <p className="text-gray-400">{PRODUCT_STANDARD_TEXT_DETAILS}</p>

        <Button
          onClick={handleClickAdd}
          className="h-[55px] mt-10 px-10 text-base rounded-[18px] w-full"
          disabled={isLoading}
        >
          В корзину за {price} ₽
        </Button>
      </div>
    </div>
  );
};

export default ChooseProductForm;
