import { cn } from "@/lib/utils";
import Link from "next/link";

interface CategoriesProps {
  className?: string;
}

const categories = [
  "Пиццы",
  "Десерты",
  "Напитки",
  "Салаты",
  "Супы",
  "Закуски",
  "Специальные",
];

const activeIndex = 0;

const CategoriesList = ({ className }: CategoriesProps) => {
  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-xl", className)}
    >
      {categories.map((category, index) => (
        <Link
          href={`/categories/${category.toLowerCase()}`}
          key={index}
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            activeIndex === index ? "shadow-xl text-primary" : ""
          )}
        >
          {category}
        </Link>
      ))}
    </div>
  );
};

export default CategoriesList;
