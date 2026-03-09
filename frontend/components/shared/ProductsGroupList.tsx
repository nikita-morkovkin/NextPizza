"use client";

import { cn } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { changeCategory } from "@/store/slices/category.slice";
import { useEffect, useRef } from "react";
import { useIntersection } from "react-use";
import ProductCard from "./ProductCard";
import { Title } from "./Title";

interface ProductsGroupListProps {
  title: string;
  products: any[];
  className?: string;
  listClassname?: string;
  categoryId?: number;
}

const ProductsGroupList = ({
  title,
  products,
  className,
  listClassname,
  categoryId,
}: ProductsGroupListProps) => {
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  const dispatch = useAppDispatch();
  const activeCategory = useAppSelector(
    (state) => state.category.activeCategory
  );

  useEffect(() => {
    if (intersection?.isIntersecting) {
      dispatch(changeCategory(categoryId!));
    }
  }, [categoryId, intersection?.isIntersecting, title, dispatch]);

  return (
    <div className={cn(className)} id={title} ref={intersectionRef}>
      <Title text={title} className="mb-10 font-bold" />

      <div className={cn("grid grid-cols-3 gap-[50px]", listClassname)}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.items[0].price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsGroupList;
