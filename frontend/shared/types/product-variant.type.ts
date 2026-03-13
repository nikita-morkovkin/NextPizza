import { type ProductType } from "./product-type";

export interface ProductVariantType {
  id: number;

  price: number;
  size: number;

  product: ProductType;
  productId: number;

  items: any[];
}
