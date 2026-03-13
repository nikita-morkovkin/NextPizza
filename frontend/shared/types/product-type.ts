import { type CategoryType } from "./category.type";
import { type IngredientType } from "./ingredient.type";
import { type ProductVariantType } from "./product-variant.type";

export interface ProductType {
  id: string;

  name: string;
  imageUrl: string;

  category: CategoryType;
  categoryId: string;

  ingredients: IngredientType[];
  productVariants: ProductVariantType[];
}
