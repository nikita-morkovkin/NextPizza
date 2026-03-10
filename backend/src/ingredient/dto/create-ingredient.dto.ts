import { IsNotEmpty, IsNumber, IsString, IsUrl } from 'class-validator';

export class CreateIngredientDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsString()
  @IsNotEmpty()
  @IsUrl()
  imageUrl: string;
}
