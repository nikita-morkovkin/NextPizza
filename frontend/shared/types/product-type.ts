export interface ProductType {
  id: number;

  name: string;
  imageUrl: string;

  category: any[];
  categoryId: string;

  ingredients: any[];
  productVariants: any[];
}
