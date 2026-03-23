interface PriceBreakdown {
  originalPrice: number;
  taxAmount: number;
  deliveryFee: number;
}

/**
 * Рассчитывает налоги (5%) и доставку (10%) на основе входной стоимости
 * @param price - Исходная стоимость товара
 */
export const calcTotalBreakdown = (price: number): PriceBreakdown => {
  const TAX_RATE = 0.05; // 5%
  const DELIVERY_RATE = 0.1; // 10%

  return {
    originalPrice: price,
    taxAmount: price * TAX_RATE,
    deliveryFee: price * DELIVERY_RATE,
  };
};
