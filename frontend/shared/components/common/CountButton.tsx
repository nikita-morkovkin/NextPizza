import { cn } from "@/shared/lib/utils";
import CountIconButton, { type CountIconButtonType } from "./CountIconButton";

export type CountButtonSizeType = "sm" | "lg";

interface CountButtonProps {
  value: number;
  onClick: (type: CountIconButtonType) => void;
  size?: CountButtonSizeType;
  className?: string;
}

const CountButton = ({
  value = 1,
  size = "sm",
  className,
  onClick,
}: CountButtonProps) => {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-between gap-3",
        className
      )}
    >
      <CountIconButton
        onClick={() => onClick("minus")}
        disabled={value === 1}
        className="disabled:cursor-not-allowed"
        size={size}
        type={"minus"}
      />

      <b className={size === "sm" ? "text-sm" : "text-lg"}>{value}</b>

      <CountIconButton
        onClick={() => onClick("plus")}
        size={size}
        type={"plus"}
      />
    </div>
  );
};

export default CountButton;
