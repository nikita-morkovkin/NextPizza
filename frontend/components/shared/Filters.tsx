"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { Input } from "../ui";
import CheckboxFiltersGroup from "./CheckboxFiltersGroup";
import FilterCheckbox from "./FilterCheckbox";
import { SliderRange } from "./SliderRange";
import { Title } from "./Title";

interface FiltersProps {
  className?: string;
}

const ingredients = [
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

const Filters = ({ className }: FiltersProps) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const toggleCheckbox = (id: string) => {
    const newSet = new Set(selectedIds);

    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }

    setSelectedIds(Array.from(newSet));
  };

  return (
    <div className={cn("", className)}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      {/* Top checkboxes */}
      <div className="flex flex-col gap-4">
        <FilterCheckbox
          text={"Можно собирать"}
          value={"1"}
          checked={selectedIds.includes("1")}
          onCheckedChange={() => toggleCheckbox("1")}
        />
        <FilterCheckbox
          text={"Новинки"}
          value={"2"}
          checked={selectedIds.includes("2")}
          onCheckedChange={() => toggleCheckbox("2")}
        />
      </div>

      {/* Price range */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>

        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            defaultValue={0}
          />
          <Input
            type="number"
            placeholder="1000"
            max={1000}
            min={1}
            defaultValue={500}
          />
        </div>

        <SliderRange />
      </div>

      {/* Ingredients filters */}
      <CheckboxFiltersGroup
        title="Ингредиенты"
        className="mt-5"
        limit={6}
        items={ingredients}
        defaultItems={ingredients}
      />
    </div>
  );
};

export default Filters;
