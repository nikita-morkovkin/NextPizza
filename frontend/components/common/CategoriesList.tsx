"use client";

import { cn } from "@/lib/utils";
import { useGetAllCategories } from "@/shared/hooks/useGetAllCategories";
import { useAppSelector } from "@/store/hooks";
import { changeCategory } from "@/store/slices/category.slice";
import { useDispatch } from "react-redux";

interface CategoriesProps {
  className?: string;
}

const CategoriesList = ({ className }: CategoriesProps) => {
  const { categories } = useGetAllCategories();
  const dispatch = useDispatch();

  const activeCategoryId = useAppSelector(
    (state) => state.category.activeCategory
  );

  if (!categories) {
    return null;
  }

  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-xl", className)}
    >
      {categories.map((category) => (
        <a
          href={`/#${category.name}`}
          onClick={() => {
            dispatch(changeCategory(category.id));
          }}
          key={category.id}
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            activeCategoryId === category.id ? "shadow-xl text-primary" : ""
          )}
        >
          {category.name}
        </a>
      ))}
    </div>
  );
};

export default CategoriesList;
