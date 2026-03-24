import { cn } from "@/shared/lib/utils";
import { Minus, Plus } from "lucide-react";
import { Button } from "../ui";
import { type CountButtonSizeType } from "./CountButton";

export type CountIconButtonType = "minus" | "plus";

interface CountIconButtonProps {
  size?: CountButtonSizeType;
  disabled?: boolean;
  type: CountIconButtonType;
  onClick: () => void;
  className?: string;
}

const CountIconButton = ({
  size = "sm",
  disabled,
  type,
  onClick,
  className,
}: CountIconButtonProps) => {
  return (
    <Button
      variant={"outline"}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "p-0 hover:bg-primary hover:text-white disabled:bg-white disabled:border-gray-400 disabled:text-gray-400",
        size === "sm"
          ? "w-[30px] h-[30px] rounded-[10px]"
          : "w-[38px] h-[38px] rounded-md",
        className,
      )}
    >
      {type === "plus" ? (
        <Plus className={size === "sm" ? "h-4" : "h-5"} />
      ) : (
        <Minus className={size === "sm" ? "h-4" : "h-5"} />
      )}
    </Button>
  );
};

export default CountIconButton;
