import { IsNotEmpty, IsNumber } from 'class-validator';
import { type Ingredient } from 'generated/prisma/client';

export class CreateCartItemDto {
  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @IsNotEmpty()
  ingredients: Ingredient[];
}
