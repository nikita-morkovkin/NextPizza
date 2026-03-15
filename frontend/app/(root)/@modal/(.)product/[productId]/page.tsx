import { ChooseProductModal } from "@/shared/components/common/modals";
import { API } from "@/shared/services/api-client";
import { notFound } from "next/navigation";

export default async function ProductModalPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  const product = await API.products.getById(productId);

  if (!product) {
    notFound();
  }

  return <ChooseProductModal product={product} />;
}
