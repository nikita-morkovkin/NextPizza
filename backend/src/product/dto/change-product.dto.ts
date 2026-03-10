import { IsOptional, IsString } from 'class-validator';

export class ChangeProductDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsString()
  @IsOptional()
  imageUrl?: string;
}
