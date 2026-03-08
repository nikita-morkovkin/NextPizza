import { type ReactNode } from "react";
import { Checkbox } from "../ui";

export interface FilterCheckboxProps {
  text: string;
  value: string;
  endAdornment?: ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
}

const FilterCheckbox = ({
  text,
  value,
  endAdornment,
  onCheckedChange,
  checked = false,
}: FilterCheckboxProps) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        onCheckedChange={onCheckedChange}
        checked={checked}
        value={value}
        className="rounded-[8px] w-6 h-6"
        id={`filter-checkbox-${value}`}
      />
      <label
        htmlFor={`filter-checkbox-${value}`}
        className="leading-none cursor-pointer flex-1"
      >
        {text}
      </label>
      {endAdornment}
    </div>
  );
};

export default FilterCheckbox;
