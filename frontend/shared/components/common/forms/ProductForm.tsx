"use client";

import type { ProductType } from "@/shared/types";
import { useRouter } from "next/navigation";
import ChoosePizzaForm from "./ChoosePizzaForm";
import ChooseProductForm from "./ChooseProductForm";

interface ProductFormProps {
  isPizzaForm: boolean;
  product: ProductType;
}

const ProductForm = ({ isPizzaForm, product }: ProductFormProps) => {
  const router = useRouter();

  const onHandleAdd = () => router.back();

  return isPizzaForm ? (
    <ChoosePizzaForm
      imageUrl={product.imageUrl}
      name={product.name}
      ingredients={product.ingredients}
      onClickAdd={onHandleAdd}
      productVariants={product.productVariants}
    />
  ) : (
    <ChooseProductForm
      imageUrl={product.imageUrl}
      name={product.name}
      price={product.productVariants[0].price}
      productVariantId={product.productVariants[0].id}
      onClickAdd={onHandleAdd}
    />
  );
};

export default ProductForm;
