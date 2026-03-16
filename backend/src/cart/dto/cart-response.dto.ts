import { CartItem } from 'generated/prisma/client';

export class CartResponseDto {
  items: CartItem[];
  count: number;
}
