"use client";

import { Slider } from "@/components/ui/slider";
import { useState } from "react";

export function SliderRange() {
  const [range, setRange] = useState([20, 80]);

  const handleRangeChange = (value: number[]) => {
    setRange(value);
  };

  return (
    <div className="mx-auto w-full max-w-xs flex flex-col gap-4">
      <Slider
        value={range}
        onValueChange={handleRangeChange}
        max={1000}
        step={10}
        className="w-full"
      />

      <div className="flex justify-between items-center text-sm text-gray-500 font-medium">
        <span>от {range[0]} ₽</span>
        <span>до {range[1]} ₽</span>
      </div>
    </div>
  );
}
