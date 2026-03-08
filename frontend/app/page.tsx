import { Container } from "@/components/shared";
import Filters from "@/components/shared/Filters";
import { Title } from "@/components/shared/Title";
import TopBar from "@/components/shared/TopBar";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-semibold" />
      </Container>

      <TopBar />

      <Container className="mt-[36px] pb-14">
        {/* Filter */}
        <div className="flex gap-[60px]">
          <Filters />

          {/* List of the goods */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">Список товаров</div>
          </div>
        </div>
      </Container>
    </>
  );
}
