"use client";

import { Dialog, DialogContent } from "@/shared/components/ui/dialog";
import { cn } from "@/shared/lib/utils";
import { type ProductType } from "@/shared/types";
import { useRouter } from "next/navigation";
import { ChooseProductForm } from "../forms";
import ChoosePizzaForm from "../forms/ChoosePizzaForm";

interface ChooseModalProductProps {
  product: ProductType;
  className?: string;
}

const ChooseProductModal = ({
  product,
  className,
}: ChooseModalProductProps) => {
  const router = useRouter();

  const isPizzaForm = Boolean(product.productVariants[0].pizzaType);
  const existProduct = Boolean(product);

  return (
    <Dialog open={existProduct} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          "p-0 w-[1200px] max-w-[1200px] min-h-[500px] bg-white overflow-hidden",
          className
        )}
      >
        {isPizzaForm ? (
          <ChoosePizzaForm
            imageUrl={product.imageUrl}
            name={product.name}
            ingredients={product.ingredients}
            onClickAdd={() => router.back()}
            productVariants={product.productVariants}
          />
        ) : (
          <ChooseProductForm imageUrl={product.imageUrl} name={product.name} />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ChooseProductModal;
