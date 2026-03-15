import { Button } from "@/shared/components/ui";
import { cn } from "@/shared/lib/utils";
import { Title } from "../Title";

interface ChooseModalProductProps {
  imageUrl: string;
  name: string;
  className?: string;
}

// Temp data
const price = 350;
const textDetails = "Что-то, не то не пицца";

const ChooseProductForm = ({
  imageUrl,
  name,
  className,
}: ChooseModalProductProps) => {
  return (
    <div className={cn("flex flex-1", className)}>
      <div className="flex items-center justify-center flex-1 relative w-full">
        <img
          src={imageUrl}
          alt={name}
          className="relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]"
        />
      </div>

      <div className="w-1/2 p-7 bg-[#f7f6f5]">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        <p className="text-gray-400">{textDetails}</p>

        <Button className="h-[55px] mt-10 px-10 text-base rounded-[18px] w-full">
          В корзину за {price}
        </Button>
      </div>
    </div>
  );
};

export default ChooseProductForm;
