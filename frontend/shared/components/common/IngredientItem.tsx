import { cn } from "@/shared/lib/utils";
import { CircleCheck } from "lucide-react";

interface IngredientItemProps {
  imageUrl: string;
  name: string;
  price: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

const IngredientItem = ({
  imageUrl,
  name,
  price,
  active,
  onClick,
  className,
}: IngredientItemProps) => {
  return (
    <div
      className={cn(
        `flex items-center flex-col p-1 w-32 rounded-md text-center relative cursor-pointer shadow-md bg-white ${
          active && "border border-primary"
        }`,
        className
      )}
      onClick={onClick}
    >
      {active && (
        <CircleCheck className="absolute top-2 right-2 text-primary" />
      )}

      <img src={imageUrl} alt={name} width={110} height={110} />

      <p className="text-xs mb-1">{name}</p>
      <p className="font-bold">{price} ₽</p>
    </div>
  );
};

export default IngredientItem;
