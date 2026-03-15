"use client";

import { Slider } from "@/shared/components/ui/slider";

interface SilderRangeProps {
  min: number;
  max: number;
  step: number;
  value: number[];
  onChangeValue: (value: number[]) => void;
}

export function SliderRange({
  min,
  max,
  step,
  value,
  onChangeValue,
}: SilderRangeProps) {
  const handleRangeChange = (value: number[]) => {
    onChangeValue(value);
  };

  return (
    <div className="mx-auto w-full max-w-xs flex flex-col gap-4">
      <Slider
        value={value}
        onValueChange={handleRangeChange}
        min={min}
        max={max}
        step={step}
        className="w-full"
      />

      <div className="flex justify-between items-center text-sm text-gray-500 font-medium">
        <span>от {value[0]} ₽</span>
        <span>до {value[1]} ₽</span>
      </div>
    </div>
  );
}
