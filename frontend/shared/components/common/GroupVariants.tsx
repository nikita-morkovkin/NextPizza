"use client";

import { cn } from "@/shared/lib/utils";

export interface Variant {
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
      {items.map((item) => {
        const isSelected = item.value === selectedValue;

        return (
          <button
            key={item.value}
            type="button"
            disabled={item.disabled}
            onClick={() => {
              if (!item.disabled) {
                onClick?.(item.value);
              }
            }}
            className={cn(
              "flex items-center justify-center h-[30px] px-5 flex-1 rounded-3xl text-sm transition-all duration-200 cursor-pointer",
              "bg-[#F5F5F5]",
              {
                "bg-white shadow": isSelected,
                "text-gray-500 opacity-50 cursor-not-allowed": item.disabled,
                "hover:bg-[#ebebeb]": !item.disabled && !isSelected,
              }
            )}
          >
            {item.name}
          </button>
        );
      })}
    </div>
  );
};

export default GroupVariants;
