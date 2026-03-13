import { ProductType } from "./product-type";

export interface CategoryType {
  id: string;

  name: string;

  products: ProductType[];
}
