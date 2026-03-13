import { Container, ProductImage } from "@/components/common";
import GroupVariants from "@/components/common/GroupVariants";
import { Title } from "@/components/common/Title";
import { API } from "@/services/api-client";
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

  if (!product) {
    notFound();
  }

  return (
    <Container className="my-10 flex flex-col">
      <div className="flex flex-1 items-start">
        <ProductImage src={product.imageUrl} alt={product.name} size={40} />

        <div className="w-[490px] px-7 py-2">
          <Title
            text={product.name}
            size="md"
            className="font-extrabold mb-1"
          />

          <p className="text-gray-400">Доп. информация</p>

          <GroupVariants items={ITEMS} selectedValue="2" />
        </div>
      </div>
    </Container>
  );
}
