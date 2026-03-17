import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateCartItemDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'ID варианта продукта' })
  productVariantId: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ description: 'Количество' })
  quantity: number;

  @IsArray()
  @IsOptional()
  @ApiProperty({ description: 'Список ID ингредиентов', type: [String] })
  ingredientIds?: string[];
}

export class UpdateCartItemDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ description: 'Количество' })
  quantity: number;
}
