import { IsNumber, IsOptional, IsString, IsUrl } from 'class-validator';

export class ChangeIngredientDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsNumber()
  @IsOptional()
  price?: number;

  @IsString()
  @IsOptional()
  @IsUrl()
  imageUrl?: string;
}
