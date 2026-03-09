import { Container } from "@/components/shared";
import Filters from "@/components/shared/Filters";
import ProductsGroupList from "@/components/shared/ProductsGroupList";
import { Title } from "@/components/shared/Title";
import TopBar from "@/components/shared/TopBar";

export const MOCK_PIZZAS = [
  {
    id: 1,
    name: "Маргарита",
    imageUrl:
      "https://media.dodostatic.net/api/v1/pizzas/render/11EE7D610D32E76283C0F12FD3B27C44",
    items: [{ price: 450 }],
  },
  {
    id: 2,
    name: "Пепперони",
    imageUrl:
      "https://media.dodostatic.net/api/v1/pizzas/render/11EE7D612FC3B7248066160539304388",
    items: [{ price: 590 }],
  },
  {
    id: 3,
    name: "Четыре сыра",
    imageUrl:
      "https://media.dodostatic.net/api/v1/pizzas/render/11EE7D6105AD95438863A29B634283F8",
    items: [{ price: 650 }],
  },
  {
    id: 4,
    name: "Ветчина и грибы",
    imageUrl:
      "https://media.dodostatic.net/api/v1/pizzas/render/11EE7D611ADF43239AD2669378096339",
    items: [{ price: 490 }],
  },
  {
    id: 5,
    name: "Диабло",
    imageUrl:
      "https://media.dodostatic.net/api/v1/pizzas/render/11EE7D613F004273874BBA0E03C1A5C4",
    items: [{ price: 620 }],
  },
  {
    id: 6,
    name: "Овощная",
    imageUrl:
      "https://media.dodostatic.net/api/v1/pizzas/render/11EE7D6110059FA783A14120444AA18D",
    items: [{ price: 420 }],
  },
];

export const MOCK_DESSERTS = [
  {
    id: 201,
    name: "Фондан",
    imageUrl:
      "https://media.dodostatic.net/api/v1/pizzas/render/11EE797032107447921DC1D2B66993A1",
    items: [{ price: 165 }],
  },
  {
    id: 202,
    name: "Чизкейк Нью-Йорк",
    imageUrl:
      "https://media.dodostatic.net/api/v1/pizzas/render/11EE79701103E8A783A14120444AA18D",
    items: [{ price: 149 }],
  },
  {
    id: 203,
    name: "Маффин Три шоколада",
    imageUrl:
      "https://media.dodostatic.net/api/v1/pizzas/render/11EE7D611ADF43239AD2669378096339",
    items: [{ price: 99 }],
  },
  {
    id: 204,
    name: "Рулетики с корицей",
    imageUrl:
      "https://media.dodostatic.net/api/v1/pizzas/render/11EE7D6105AD95438863A29B634283F8",
    items: [{ price: 189 }],
  },
  {
    id: 205,
    name: "Блинчики с яблоком",
    imageUrl:
      "https://media.dodostatic.net/api/v1/pizzas/render/11EE7D6110059FA783A14120444AA18D",
    items: [{ price: 155 }],
  },
  {
    id: 206,
    name: "Мороженое Ваниль",
    imageUrl:
      "https://media.dodostatic.net/api/v1/pizzas/render/11EE7D612FC3B7248066160539304388",
    items: [{ price: 89 }],
  },
];

export const MOCK_DRINKS = [
  {
    id: 301,
    name: "Добрый Кола",
    imageUrl:
      "https://media.dodostatic.net/api/v1/pizzas/render/11EE796FF0059FA783A14120444AA18D",
    items: [{ price: 99 }],
  },
  {
    id: 302,
    name: "Кофе Американо",
    imageUrl:
      "https://media.dodostatic.net/api/v1/pizzas/render/11EE79705AD95438863A29B634283F8",
    items: [{ price: 79 }],
  },
  {
    id: 303,
    name: "Морс Клюква",
    imageUrl:
      "https://media.dodostatic.net/api/v1/pizzas/render/11EE797032107447921DC1D2B66993A1",
    items: [{ price: 115 }],
  },
  {
    id: 304,
    name: "Чай Черный",
    imageUrl:
      "https://media.dodostatic.net/api/v1/pizzas/render/11EE797011059FA783A14120444AA18D",
    items: [{ price: 65 }],
  },
  {
    id: 305,
    name: "Сок Апельсин",
    imageUrl:
      "https://media.dodostatic.net/api/v1/pizzas/render/11EE7D613F004273874BBA0E03C1A5C4",
    items: [{ price: 125 }],
  },
  {
    id: 306,
    name: "Вода без газа",
    imageUrl:
      "https://media.dodostatic.net/api/v1/pizzas/render/11EE7D6110059FA783A14120444AA18D",
    items: [{ price: 55 }],
  },
];

export const MOCK_SALADS = [
  {
    id: 401,
    name: "Цезарь",
    imageUrl:
      "https://media.dodostatic.net/api/v1/pizzas/render/11EE79701ADF43239AD2669378096339",
    items: [{ price: 279 }],
  },
  {
    id: 402,
    name: "Греческий",
    imageUrl:
      "https://media.dodostatic.net/api/v1/pizzas/render/11EE7D6110059FA783A14120444AA18D",
    items: [{ price: 245 }],
  },
  {
    id: 403,
    name: "Оливье",
    imageUrl:
      "https://media.dodostatic.net/api/v1/pizzas/render/11EE7D6105AD95438863A29B634283F8",
    items: [{ price: 199 }],
  },
  {
    id: 404,
    name: "Микс-салат",
    imageUrl:
      "https://media.dodostatic.net/api/v1/pizzas/render/11EE79701103E8A783A14120444AA18D",
    items: [{ price: 155 }],
  },
  {
    id: 405,
    name: "Салат с тунцом",
    imageUrl:
      "https://media.dodostatic.net/api/v1/pizzas/render/11EE7D613F004273874BBA0E03C1A5C4",
    items: [{ price: 315 }],
  },
  {
    id: 406,
    name: "Витаминный",
    imageUrl:
      "https://media.dodostatic.net/api/v1/pizzas/render/11EE79705AD95438863A29B634283F8",
    items: [{ price: 135 }],
  },
];

export const MOCK_SOUPS = [
  {
    id: 501,
    name: "Томатный суп",
    imageUrl:
      "https://media.dodostatic.net/api/v1/pizzas/render/11EE797011059FA783A14120444AA18D",
    items: [{ price: 185 }],
  },
  {
    id: 502,
    name: "Грибной крем",
    imageUrl:
      "https://media.dodostatic.net/api/v1/pizzas/render/11EE7D612FC3B7248066160539304388",
    items: [{ price: 215 }],
  },
  {
    id: 503,
    name: "Куриный бульон",
    imageUrl:
      "https://media.dodostatic.net/api/v1/pizzas/render/11EE7D611ADF43239AD2669378096339",
    items: [{ price: 145 }],
  },
  {
    id: 504,
    name: "Борщ",
    imageUrl:
      "https://media.dodostatic.net/api/v1/pizzas/render/11EE797032107447921DC1D2B66993A1",
    items: [{ price: 199 }],
  },
  {
    id: 505,
    name: "Сырный суп",
    imageUrl:
      "https://media.dodostatic.net/api/v1/pizzas/render/11EE7D6105AD95438863A29B634283F8",
    items: [{ price: 235 }],
  },
  {
    id: 506,
    name: "Тыквенный суп",
    imageUrl:
      "https://media.dodostatic.net/api/v1/pizzas/render/11EE7D613F004273874BBA0E03C1A5C4",
    items: [{ price: 175 }],
  },
];

export const MOCK_SNACKS = [
  {
    id: 601,
    name: "Додстер",
    imageUrl:
      "https://media.dodostatic.net/api/v1/pizzas/render/11EE7D613F004273874BBA0E03C1A5C4",
    items: [{ price: 169 }],
  },
  {
    id: 602,
    name: "Картофель фри",
    imageUrl:
      "https://media.dodostatic.net/api/v1/pizzas/render/11EE7D6110059FA783A14120444AA18D",
    items: [{ price: 95 }],
  },
  {
    id: 603,
    name: "Наггетсы",
    imageUrl:
      "https://media.dodostatic.net/api/v1/pizzas/render/11EE79701103E8A783A14120444AA18D",
    items: [{ price: 155 }],
  },
  {
    id: 604,
    name: "Крылышки",
    imageUrl:
      "https://media.dodostatic.net/api/v1/pizzas/render/11EE7D612FC3B7248066160539304388",
    items: [{ price: 249 }],
  },
  {
    id: 605,
    name: "Сырные палочки",
    imageUrl:
      "https://media.dodostatic.net/api/v1/pizzas/render/11EE79705AD95438863A29B634283F8",
    items: [{ price: 179 }],
  },
  {
    id: 606,
    name: "Креветки",
    imageUrl:
      "https://media.dodostatic.net/api/v1/pizzas/render/11EE7D611ADF43239AD2669378096339",
    items: [{ price: 325 }],
  },
];

export const MOCK_SPECIAL = [
  {
    id: 701,
    name: "Комбо на двоих",
    imageUrl:
      "https://media.dodostatic.net/api/v1/pizzas/render/11EE7D6110059FA783A14120444AA18D",
    items: [{ price: 890 }],
  },
  {
    id: 702,
    name: "Пицца-конструктор",
    imageUrl:
      "https://media.dodostatic.net/api/v1/pizzas/render/11EE7D610D32E76283C0F12FD3B27C44",
    items: [{ price: 550 }],
  },
  {
    id: 703,
    name: "Подарочный набор",
    imageUrl:
      "https://media.dodostatic.net/api/v1/pizzas/render/11EE79701ADF43239AD2669378096339",
    items: [{ price: 1200 }],
  },
  {
    id: 704,
    name: "Детский обед",
    imageUrl:
      "https://media.dodostatic.net/api/v1/pizzas/render/11EE797011059FA783A14120444AA18D",
    items: [{ price: 349 }],
  },
  {
    id: 705,
    name: "Веган-сет",
    imageUrl:
      "https://media.dodostatic.net/api/v1/pizzas/render/11EE7D6105AD95438863A29B634283F8",
    items: [{ price: 750 }],
  },
  {
    id: 706,
    name: "Праздничное комбо",
    imageUrl:
      "https://media.dodostatic.net/api/v1/pizzas/render/11EE7D613F004273874BBA0E03C1A5C4",
    items: [{ price: 1590 }],
  },
];

export default function Home() {
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
              <ProductsGroupList
                title="Пиццы"
                products={MOCK_PIZZAS}
                categoryId={1}
              />
              <ProductsGroupList
                title="Десерты"
                products={MOCK_DESSERTS}
                categoryId={2}
              />
              <ProductsGroupList
                title="Напитки"
                products={MOCK_DRINKS}
                categoryId={3}
              />
              <ProductsGroupList
                title="Салаты"
                products={MOCK_SALADS}
                categoryId={4}
              />
              <ProductsGroupList
                title="Супы"
                products={MOCK_SOUPS}
                categoryId={5}
              />
              <ProductsGroupList
                title="Закуски"
                products={MOCK_SNACKS}
                categoryId={6}
              />
              <ProductsGroupList
                title="Специальные"
                products={MOCK_SPECIAL}
                categoryId={7}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
