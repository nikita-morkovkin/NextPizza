import { calcTotalBreakdown } from "../lib/calc-total-breakdown.util";
import { useFetchCartItemsQuery } from "../store/api/cart.api";
import { type CartItemDTO } from "../types/cart-response.type";
import { type InputJsonValue } from "../types/input-json-value.type";

interface ReturnProps {
  items: CartItemDTO[];
  convertedItems: InputJsonValue[];
  isLoading: boolean;
  originalPrice: number;
  taxAmount: number;
  deliveryFee: number;
  totalPrice: number;
}

/**
 * Хук для получения цен продуктов в корзине.
 * Возвращает объект с информацией о загрузке и рассчитанными ценами.
 * @returns {ReturnProps} Объект, содержащий:
 *   - isLoading: состояние загрузки данных корзины
 *   - originalPrice: исходная цена товаров
 *   - taxAmount: сумма налога
 *   - deliveryFee: стоимость доставки
 *   - totalPrice: итоговая цена (originalPrice + taxAmount + deliveryFee)
 */

const useGetProductPrices = (): ReturnProps => {
  const { data, isLoading } = useFetchCartItemsQuery();

  const productPrice = data?.totalPrice || 0;
  const items = data?.items || [];

  const { originalPrice, taxAmount, deliveryFee } =
    calcTotalBreakdown(productPrice);

  const totalPrice = originalPrice + taxAmount + deliveryFee;

  const convertedItems: InputJsonValue[] = items.map((item) => ({
    productVariantId: item.productVariant.id,
    quantity: item.quantity,
    ingredients: item.ingredients.map((ingredient) => String(ingredient)),
  }));

  return {
    items,
    convertedItems,
    isLoading,
    originalPrice,
    taxAmount,
    deliveryFee,
    totalPrice,
  };
};

export default useGetProductPrices;
