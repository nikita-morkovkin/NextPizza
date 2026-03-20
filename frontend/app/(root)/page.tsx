import { Container } from "@/shared/components/common";
import Filters from "@/shared/components/common/Filters";
import ProductsGroupList from "@/shared/components/common/ProductsGroupList";
import { Title } from "@/shared/components/common/Title";
import TopBar from "@/shared/components/common/TopBar";
import { API } from "@/shared/services/api-client";

interface SearchParams {
  sizes?: string;
  pizzaTypes?: string;
  ingredients?: string;
  priceFrom?: string;
  priceTo?: string;
}

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const { sizes, ingredients, pizzaTypes, priceFrom, priceTo } =
    await searchParams;

  const products = await API.products.getAllWithFilters(
    sizes,
    pizzaTypes,
    ingredients,
    priceFrom,
    priceTo,
  );

  const categories = await API.categories.getAll();

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
                  products?.some(
                    (product) => product.categoryId === category.id,
                  ),
                )
                .map((category) => (
                  <ProductsGroupList
                    key={category.id}
                    title={category.name}
                    products={products?.filter(
                      (product) => product.categoryId === category.id,
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
