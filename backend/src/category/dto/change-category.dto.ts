import { IsNotEmpty, IsString } from 'class-validator';

export class ChangeCategoryDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}
