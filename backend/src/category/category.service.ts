import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ChangeCategoryDto } from './dto/change-category.dto';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoryService {
  public constructor(private readonly prisma: PrismaService) {}

  public async create(dto: CreateCategoryDto) {
    const { name } = dto;

    await this.prisma.category.create({
      data: {
        name,
      },
    });

    return {
      message: 'Категория успешно создана',
    };
  }

  public async change(categoryId: string, dto: ChangeCategoryDto) {
    const { name } = dto;

    await this.prisma.category.update({
      where: {
        id: categoryId,
      },
      data: {
        name,
      },
    });

    return {
      message: 'Категория успешно изменена',
    };
  }

  public async delete(categoryId: string) {
    if (!categoryId) {
      throw new NotFoundException('Категория не существует');
    }

    await this.prisma.category.delete({
      where: {
        id: categoryId,
      },
    });

    return {
      message: 'Категория успешно удалена',
    };
  }
}
