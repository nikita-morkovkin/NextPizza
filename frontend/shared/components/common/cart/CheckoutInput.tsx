import { cn } from "@/shared/lib/utils";
import { type CheckoutUserInfoSchemaType } from "@/shared/schemas/checkout-user-info.schema";
import { CircleX } from "lucide-react";
import { type InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import { Button, Input } from "../../ui";

export type FormFieldName = keyof CheckoutUserInfoSchemaType;

interface CheckoutInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: FormFieldName;
  className?: string;
  containerClassName?: string;
}

const CheckoutInput = ({
  name,
  className,
  containerClassName,
  ...rest
}: CheckoutInputProps) => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext<CheckoutUserInfoSchemaType>();

  const inputValue = watch(name);
  const error = errors[name];

  const handleClear = () => {
    setValue(name, "", { shouldValidate: true });
  };

  return (
    <div className={cn("relative flex flex-col gap-1", containerClassName)}>
      <div className="relative">
        <Input
          {...rest}
          {...register(name)}
          className={cn(
            "text-base py-5 pr-10",
            className,
            error && "border-red-500",
          )}
        />

        {inputValue && (
          <Button
            type="button"
            variant="ghost"
            onClick={handleClear}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 h-auto hover:bg-transparent"
          >
            <CircleX size={16} className="text-gray-400" />
          </Button>
        )}
      </div>

      {error && (
        <span className="text-red-500 text-sm">{error.message as string}</span>
      )}
    </div>
  );
};

export default CheckoutInput;
