import { cn } from "@/shared/lib/utils";
import { type ReactNode } from "react";

interface CheckoutItemDetailsProps {
  title: string;
  value: ReactNode;
  className?: string;
  Icon?: ReactNode;
}

const CheckoutItemDetails = ({
  title,
  value,
  className,
  Icon,
}: CheckoutItemDetailsProps) => {
  return (
    <div className={cn(`flex my-4`, className)}>
      <div className="flex flex-1 text-lg text-neutral-500">
        <div className="flex items-center gap-2">
          {Icon}
          {title}
        </div>
        <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
      </div>

      <span className="font-bold text-lg">{value}</span>
    </div>
  );
};

export default CheckoutItemDetails;
