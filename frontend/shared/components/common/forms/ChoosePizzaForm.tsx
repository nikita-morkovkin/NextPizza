"use client";

import { Button } from "@/shared/components/ui";
import { pizzaMapType } from "@/shared/constants/pizza.constants";
import { useIngredientSelection, usePizzaSelection } from "@/shared/hooks";
import { cn } from "@/shared/lib/utils";
import { type IngredientType } from "@/shared/types/ingredient.type";
import type { PizzaSize, PizzaType } from "@/shared/types/pizza.types";
import { type ProductVariantType } from "@/shared/types/product-variant.type";
import GroupVariants from "../GroupVariants";
import IngredientItem from "../IngredientItem";
import PizzaImage from "../PizzaImage";
import { Title } from "../Title";

interface ChooseModalProductProps {
  imageUrl: string;
  name: string;
  ingredients: IngredientType[];
  items: ProductVariantType[];
  onClickAdd: () => void;
  className?: string;
}

const ChoosePizzaForm = ({
  imageUrl,
  name,
  ingredients,
  onClickAdd,
  items,
  className,
}: ChooseModalProductProps) => {
  const { selectedIngredients, addIngredient, ingredientsPrice } =
    useIngredientSelection({ ingredients });

  const {
    pizzaSize,
    setPizzaSize,
    pizzaType,
    setPizzaType,
    pizzaPrice,
    pizzaTypeOptions,
    pizzaSizeOptions,
  } = usePizzaSelection({
    productVariants: items,
  });

  const totalPrice = pizzaPrice + ingredientsPrice;

  const textDetails = `${pizzaSize} см, ${pizzaMapType[
    pizzaType
  ].toLowerCase()} тесто`;

  const handleClickAdd = () => onClickAdd?.();

  return (
    <div className={cn("flex flex-1", className)}>
      <div className="flex items-center justify-center flex-1 relative w-full">
        <PizzaImage src={imageUrl} alt={name} size={pizzaSize} />
      </div>

      <div className="w-1/2 p-7 bg-[#f7f6f5]">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        <p className="text-gray-400 text-base">{textDetails}</p>

        <div className="flex flex-col gap-1 mt-5">
          <GroupVariants
            items={pizzaSizeOptions}
            selectedValue={String(pizzaSize)}
            onClick={(value) => setPizzaSize(Number(value) as PizzaSize)}
          />

          <GroupVariants
            items={pizzaTypeOptions}
            className="pointer-events-auto"
            selectedValue={String(pizzaType)}
            onClick={(value) => setPizzaType(Number(value) as PizzaType)}
          />
        </div>

        <div className="bg-gray-50 p-5 flex justify-center items-start rounded-md h-[300px] overflow-auto scrollbar mt-5">
          <div className="grid grid-cols-4 gap-10">
            {ingredients.map((ingredient) => (
              <IngredientItem
                key={ingredient.id}
                imageUrl={ingredient.imageUrl}
                name={ingredient.name}
                price={String(ingredient.price)}
                active={selectedIngredients.has(ingredient.id)}
                onClick={() => addIngredient(ingredient.id)}
              />
            ))}
          </div>
        </div>

        <Button
          className={cn("h-[55px] mt-10 px-10 text-base rounded-[18px] w-full")}
          onClick={handleClickAdd}
        >
          В корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
};

export default ChoosePizzaForm;
