"use client";

import { cn } from "@/lib/utils";
import { type ProductType } from "@/shared/types/product-type";
import { useAppDispatch } from "@/store/hooks";
import { changeCategory } from "@/store/slices/category.slice";
import { useEffect, useRef } from "react";
import { useIntersection } from "react-use";
import ProductCard from "./ProductCard";
import { Title } from "./Title";

interface ProductsGroupListProps {
  title: string;
  products: ProductType[];
  className?: string;
  listClassname?: string;
  categoryId?: string;
}

const ProductsGroupList = ({
  title,
  products,
  className,
  listClassname,
  categoryId,
}: ProductsGroupListProps) => {
  const intersectionRef = useRef<HTMLDivElement>(null);

  // WARNING: It's okay, 'cause it is written in docs
  // eslint-disable-next-line
  // @ts-ignore
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (intersection?.isIntersecting) {
      dispatch(changeCategory(categoryId || ""));
    }
  }, [categoryId, intersection?.isIntersecting, title, dispatch]);

  return (
    <div
      className={cn("scroll-mt-[100px]", className)}
      id={title}
      ref={intersectionRef}
    >
      <Title text={title} className="mb-10 font-bold" />

      <div className={cn("grid grid-cols-3 gap-[50px]", listClassname)}>
        {products.map((product) => (
          <ProductCard
            productId={product.id}
            key={product.id}
            name={product.name}
            price={product.productVariants[0].price || 0}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsGroupList;
