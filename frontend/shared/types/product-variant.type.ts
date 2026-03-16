import { CartItemType } from "../components/common/card/cart-item.type";
import { type ProductType } from "./product-type";

export interface ProductVariantType {
  id: string;

  price: number;
  size?: number;
  pizzaType?: number;

  product: ProductType;
  productId: number;

  items: CartItemType[];
}
