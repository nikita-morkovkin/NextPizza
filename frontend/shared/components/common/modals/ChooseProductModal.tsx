"use client";

import { Dialog, DialogContent } from "@/shared/components/ui/dialog";
import { cn } from "@/shared/lib/utils";
import { type ProductType } from "@/shared/types";
import { useRouter } from "next/navigation";
import ProductForm from "../forms/ProductForm";

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
          className,
        )}
      >
        <ProductForm isPizzaForm={isPizzaForm} product={product} />
      </DialogContent>
    </Dialog>
  );
};

export default ChooseProductModal;
