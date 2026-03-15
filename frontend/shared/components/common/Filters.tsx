"use client";

import { useFilters, useIngredients } from "@/shared/hooks";
import useQueryFilters from "@/shared/hooks/useQueryFilters";
import { useMemo } from "react";
import { Input } from "../ui";
import CheckboxFiltersGroup from "./CheckboxFiltersGroup";
import { SliderRange } from "./SliderRange";
import { Title } from "./Title";

export interface PriceRange {
  priceFrom?: number;
  priceTo?: number;
}

interface FiltersProps {
  className?: string;
}

const defaultIngredients = [
  {
    text: "Сырный соус",
    value: "cheese_sauce",
  },
  {
    text: "Чесночный соус",
    value: "garlic_sauce",
  },
  {
    text: "Острый халапеньо",
    value: "jalapeno",
  },
  {
    text: "Маринованные огурцы",
    value: "pickles",
  },
  {
    text: "Свежие томаты",
    value: "tomatoes",
  },
  {
    text: "Красный лук",
    value: "red_onion",
  },
  {
    text: "Моцарелла",
    value: "mozzarella",
  },
];

const defaultSizes = [
  {
    text: "20 см",
    value: "20",
  },
  {
    text: "30 см",
    value: "30",
  },
  {
    text: "40 см",
    value: "40",
  },
];

const defaultPizzaTypes = [
  {
    text: "Традиционное",
    value: "traditional",
  },
  {
    text: "Тонкое",
    value: "thin",
  },
];

const MIN_PRICE = 0;
const MAX_PRICE = 1000;
const STEP_PRICE = 10;

const Filters = ({ className }: FiltersProps) => {
  const { ingredients, loading } = useIngredients();
  const filters = useFilters();

  useQueryFilters(filters);

  const items = useMemo(
    () =>
      ingredients.map((item) => ({
        text: item.name,
        value: String(item.id),
      })),
    [ingredients]
  );

  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      {/* Top checkboxes */}
      <div className="flex flex-col gap-6">
        <CheckboxFiltersGroup
          title="Тип теста"
          selectedIds={filters.pizzaTypes}
          defaultItems={defaultPizzaTypes}
          onClickCheckbox={(value) => filters.setPizzaTypes(value)}
          items={defaultPizzaTypes}
        />

        <CheckboxFiltersGroup
          title="Размеры"
          selectedIds={filters.sizes}
          defaultItems={defaultSizes}
          onClickCheckbox={(value) => filters.setSizes(value)}
          items={defaultSizes}
        />
      </div>

      {/* Price range */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>

        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={MIN_PRICE}
            max={MAX_PRICE - 1}
            value={filters.prices.priceFrom}
            defaultValue={0}
            onChange={(e) => filters.updatePrice("priceFrom", e.target.value)}
          />
          <Input
            type="number"
            placeholder="1000"
            min={MIN_PRICE}
            max={MAX_PRICE}
            value={filters.prices.priceTo}
            defaultValue={500}
            onChange={(e) => filters.updatePrice("priceTo", e.target.value)}
          />
        </div>

        <SliderRange
          min={MIN_PRICE}
          max={MAX_PRICE}
          step={STEP_PRICE}
          value={[
            filters.prices.priceFrom || 0,
            filters.prices.priceTo || 1000,
          ]}
          onChangeValue={filters.handleRangeChange}
        />
      </div>

      {/* Ingredients filters */}
      <CheckboxFiltersGroup
        title="Ингредиенты"
        className="mt-5"
        items={items}
        defaultItems={defaultIngredients}
        loading={loading}
        onClickCheckbox={filters.setIngredients}
        selectedIds={filters.selectedIngredients}
      />
    </div>
  );
};

export default Filters;
