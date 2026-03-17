"use client";

import { isDev } from "@/shared/lib/is-dev.util";
import { cn } from "@/shared/lib/utils";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui";
import { Title } from "./Title";

interface ProductCardProps {
  productId: string;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
}

const ProductCard = ({
  productId,
  name,
  price,
  imageUrl,
  className,
}: ProductCardProps) => {
  return (
    <div className={cn(className)}>
      <Link href={`/product/${productId}`}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <Image
            unoptimized={isDev}
            src={imageUrl}
            alt={name}
            width={215}
            height={215}
          />
        </div>

        <Title text={name} className="mb-1 mt-3 font-bold" />

        <p className="text-sm text-gray-400">
          Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус
          альфредо, чеснок
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px]">
            от <b>{price}₽</b>
          </span>

          <Button variant={"secondary"} className="text-base font-bold">
            <Plus size={20} className="mr-1" />
            Добавить
          </Button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
