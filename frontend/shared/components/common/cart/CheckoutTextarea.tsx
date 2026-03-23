"use client";

import { cn } from "@/shared/lib/utils";
import { type CheckoutUserInfoSchemaType } from "@/shared/schemas/checkout-user-info.schema";
import { useFormContext } from "react-hook-form";
import { Textarea } from "../../ui";
import { type FormFieldName } from "./CheckoutInput";

interface CheckoutTextareaProps {
  name: FormFieldName;
  placeholder: string;
  rows?: number;
  className?: string;
}

const CheckoutTextarea = ({
  name,
  placeholder,
  rows = 5,
  className,
}: CheckoutTextareaProps) => {
  const { register } = useFormContext<CheckoutUserInfoSchemaType>();

  return (
    <Textarea
      {...register(name)}
      rows={rows}
      className={cn("text-base", className)}
      placeholder={placeholder}
    />
  );
};

export default CheckoutTextarea;
