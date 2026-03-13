"use client";

import { cn } from "@/lib/utils";

interface Variant {
  name: string;
  value: string;
  disabled?: boolean;
}

interface GroupVariantsProps {
  items: readonly Variant[];
  onClick?: (value: Variant["value"]) => void;
  selectedValue?: Variant["value"];
  className?: string;
}

const GroupVariants = ({
  items,
  onClick,
  selectedValue,
  className,
}: GroupVariantsProps) => {
  return (
    <div
      className={cn(
        "flex justify-between rounded-3xl p-1 select-none",
        className
      )}
    >
      {items.map((item) => (
        <button
          key={item.name}
          onClick={() => onClick?.(item.value)}
          className={cn(
            "flex items-center bg-[#F5F5F5] justify-center cursor-pointer h-[30px] px-5 flex-1 rounded-3xl transition-all duration-400 text-sm",
            {
              "bg-white shadow": item.value === selectedValue,
              "text-gray-500 opacity-50 pointer-events-none": item.disabled,
            },
            className
          )}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default GroupVariants;
