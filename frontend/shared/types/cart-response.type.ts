import { type IngredientType } from "./ingredient.type";
import { ProductType } from "./product-type";
import { ProductVariantType } from "./product-variant.type";

type ProductVariantWithProduct = ProductVariantType & { product: ProductType };

export interface CartItemDTO {
  id: string;
  quantity: number;
  createdAt: string;

  productVariant: ProductVariantWithProduct;
  ingredients: IngredientType[];
}

export interface CartResponseType {
  items: CartItemDTO[];
  totalPrice: number;
}
