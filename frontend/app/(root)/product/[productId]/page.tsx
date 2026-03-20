import { Container } from "@/shared/components/common";
import ProductForm from "@/shared/components/common/forms/ProductForm";
import { API } from "@/shared/services/api-client";
import { notFound } from "next/navigation";

const ITEMS = [
  {
    name: "Маленькая",
    value: "1",
  },
  {
    name: "Большая",
    value: "2",
  },
  {
    name: "Гибкая",
    value: "3",
  },
];

export default async function ProductPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  const product = await API.products.getById(productId);
  const isPizzaForm = Boolean(product.productVariants[0].pizzaType);


  if (!product) {
    notFound();
  }

  return (
    <Container className="my-10 flex flex-col">
      <ProductForm isPizzaForm={isPizzaForm} product={product} />
    </Container>
  );
}
