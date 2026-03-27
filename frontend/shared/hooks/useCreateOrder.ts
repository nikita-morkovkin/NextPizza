import { useState } from "react";
import toast from "react-hot-toast";
import { GUEST_TOKEN } from "../constants/cookies.constant";
import { getCookie } from "../lib/get-cookie.util";
import { type CheckoutUserInfoSchemaType } from "../schemas/checkout-user-info.schema";
import { API } from "../services/api-client";
import useGetProductPrices from "./useGetProductPrices";

interface ReturnProps {
  isSubmitting: boolean;
  createOrder: (data: CheckoutUserInfoSchemaType) => void;
}

/**
 * Хук для создания заказа.
 * @returns объект с состоянием и методами для создания заказа
 */

const useCreateOrder = (): ReturnProps => {
  const { totalPrice, convertedItems } = useGetProductPrices();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const token = getCookie(GUEST_TOKEN);

  const createOrder = async (data: CheckoutUserInfoSchemaType) => {
    try {
      setIsSubmitting(true);
      const url = await API.order.createOrder(
        data,
        String(token),
        convertedItems,
        totalPrice,
      );

      toast.success("Заказ создан, спасибо! Переход на оплату...", {
        icon: "✅",
      });

      if (url) {
        window.location.assign(url);
      }
    } catch {
      toast.error(
        "Не удалось создать заказ, проверьте данные еще раз и попробуйте снова.",
        {
          icon: "❌",
        },
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    createOrder,
  };
};

export default useCreateOrder;
