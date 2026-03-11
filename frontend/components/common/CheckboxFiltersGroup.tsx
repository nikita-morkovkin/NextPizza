import { cn } from "@/lib/utils";
import { ChangeEvent, useState } from "react";
import { Button, Input, Skeleton } from "../ui";
import FilterCheckbox, { FilterCheckboxProps } from "./FilterCheckbox";

type Item = FilterCheckboxProps;

interface CheckboxFiltersGroupProps {
  title: string;
  items: Item[];
  defaultItems: Item[];
  limit?: number;
  searchInputPlaceholder?: string;
  onClickCheckbox?: (id: string) => void;
  loading?: boolean;
  selectedIds: Set<string>;
  className?: string;
}

const CheckboxFiltersGroup = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = "Поиск...",
  onClickCheckbox,
  loading,
  selectedIds,
  className,
}: CheckboxFiltersGroupProps) => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");

  const list = showAll
    ? items.filter((item) => item.text.toLowerCase().includes(searchValue))
    : defaultItems?.slice(0, limit);

  const onChangeSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  if (loading) {
    return (
      <div className={className}>
        <p className="font-bold mb-3">{title}</p>

        {Array.from({ length: limit }).map((_, index) => (
          <Skeleton key={index} className="h-6 mb-4 rounded-[8px]" />
        ))}
      </div>
    );
  }

  return (
    <div className={cn(className)}>
      <p className="font-bold mb-3">{title}</p>

      <div className="mb-5">
        {showAll && (
          <Input
            placeholder={searchInputPlaceholder}
            className={"bg-gray-50 border-none"}
            value={searchValue}
            onChange={onChangeSearchInput}
          />
        )}
      </div>

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {list.map((item, index) => (
          <FilterCheckbox
            key={index}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            checked={selectedIds.has(item.value)}
            onCheckedChange={() => onClickCheckbox?.(item.value)}
          />
        ))}
      </div>

      {items.length > limit && (
        <div className={cn("mt-4", showAll ? "border-t-neutral-100" : "")}>
          <Button onClick={() => setShowAll(!showAll)} variant="outline">
            {showAll ? "Скрыть" : "+ Показать все"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default CheckboxFiltersGroup;
