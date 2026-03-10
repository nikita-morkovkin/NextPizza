import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ChangeIngredientDto } from './dto/change-ingredient.dto';
import { CreateIngredientDto } from './dto/create-ingredient.dto';

@Injectable()
export class IngredientService {
  public constructor(private readonly prisma: PrismaService) {}

  public async create(dto: CreateIngredientDto) {
    const ingredient = await this.prisma.ingredient.findFirst({
      where: {
        name: dto.name,
      },
    });

    if (ingredient) {
      throw new Error('Ингредиент с таким именем уже существует');
    }

    return await this.prisma.ingredient.create({
      data: {
        ...dto,
      },
    });
  }

  public async change(dto: ChangeIngredientDto) {
    const { name } = dto;

    const ingredient = await this.prisma.ingredient.findFirst({
      where: {
        name,
      },
    });

    if (!ingredient) {
      throw new Error('Ингредиент с таким именем не существует');
    }

    return await this.prisma.ingredient.update({
      where: {
        id: ingredient.id,
      },
      data: {
        ...dto,
      },
    });
  }

  public async delete(name: string) {
    const ingredient = await this.prisma.ingredient.findFirst({
      where: {
        name,
      },
    });

    if (!ingredient) {
      throw new Error('Ингредиент с таким именем не существует');
    }

    return await this.prisma.ingredient.delete({
      where: {
        id: ingredient.id,
      },
    });
  }
}
