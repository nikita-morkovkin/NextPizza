import { Container } from "@/components/common";
import Filters from "@/components/common/Filters";
import ProductsGroupList from "@/components/common/ProductsGroupList";
import { Title } from "@/components/common/Title";
import TopBar from "@/components/common/TopBar";
import { getAll as getAllCategories } from "@/services/categories";
import { getAll as getAllProducts } from "@/services/products";

export default async function Home() {
  const products = await getAllProducts();
  const categories = await getAllCategories();

  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-semibold" />
      </Container>

      <TopBar />

      <Container className="mt-[36px] pb-14">
        <div className="flex gap-[60px]">
          {/* Filter */}
          <Filters />

          {/* List of the goods */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {categories
                .filter((category) =>
                  products.some((product) => product.categoryId === category.id)
                )
                .map((category) => (
                  <ProductsGroupList
                    key={category.id}
                    title={category.name}
                    products={products.filter(
                      (product) => product.categoryId === category.id
                    )}
                    categoryId={category.id}
                  />
                ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
