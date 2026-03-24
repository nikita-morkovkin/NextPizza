"use client";

import { Container, Title } from "@/shared/components/common";
import {
  CheckoutAddressForm,
  CheckoutOrder,
  CheckoutPersonalForm,
  CheckoutSheet,
} from "@/shared/components/common/cart";
import { useCreateOrder, useGetProductPrices } from "@/shared/hooks";
import { cn } from "@/shared/lib/utils";
import {
  checkoutUserInfoSchema,
  type CheckoutUserInfoSchemaType,
} from "@/shared/schemas/checkout-user-info.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

export default function CheckoutPage() {
  const { isSubmitting, createOrder } = useCreateOrder();
  const { isLoading } = useGetProductPrices();

  const form = useForm<CheckoutUserInfoSchemaType>({
    resolver: zodResolver(checkoutUserInfoSchema),
    mode: "onChange",
    defaultValues: {
      comment: "",
    },
  });

  const onSubmit = (data: CheckoutUserInfoSchemaType) => {
    createOrder(data);
  };

  return (
    <Container className="mt-5">
      <Title
        text="Оформление заказа"
        size="lg"
        className="font-extrabold mb-8"
      />

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex gap-10">
            {/* Left side */}
            <div className="flex flex-col gap-10 flex-1 mb-20">
              <CheckoutSheet />

              <CheckoutPersonalForm
                className={cn(
                  isLoading && "opacity-40 pointer-events-none cursor-wait",
                )}
              />
              <CheckoutAddressForm
                className={cn(
                  isLoading && "opacity-40 pointer-events-none cursor-wait",
                )}
              />
            </div>

            <CheckoutOrder isSubmitting={isSubmitting} />
          </div>
        </form>
      </FormProvider>
    </Container>
  );
}
