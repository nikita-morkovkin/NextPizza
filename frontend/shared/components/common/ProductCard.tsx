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
        <Image
          unoptimized={isDev}
          src={imageUrl}
          alt={imageUrl}
          width={215}
          height={215}
        />
        <Title text={name} className="mb-1 mt-3 font-bold" />

        <p className="text-sm text-gray-400">
          Помидор, сыр, томатный соус и так далее
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
