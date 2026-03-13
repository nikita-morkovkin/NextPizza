import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ChangeProductDto } from './dto/change-product.dto';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
  public constructor(private readonly prisma: PrismaService) {}

  public async create(categoryId: string, dto: CreateProductDto) {
    const { name, imageUrl } = dto;

    const category = await this.prisma.category.findUnique({
      where: {
        id: categoryId,
      },
    });

    if (!category) {
      throw new NotFoundException('Категория не существует');
    }

    return await this.prisma.product.create({
      data: {
        name,
        imageUrl,
        categoryId: category.id,
      },
    });
  }

  public async change(productId: string, dto: ChangeProductDto) {
    const { name, imageUrl } = dto;

    await this.prisma.product.update({
      where: {
        id: productId,
      },
      data: {
        name,
        imageUrl,
      },
    });

    return {
      message: 'Товар успешно изменен',
    };
  }

  public async delete(productId: string) {
    await this.prisma.product.delete({
      where: {
        id: productId,
      },
    });

    return {
      message: 'Товар успешно удален',
    };
  }

  public async search(query: string) {
    return await this.prisma.product.findMany({
      where: {
        name: {
          contains: query,
          mode: 'insensitive',
        },
      },
    });
  }

  public async getAll() {
    const products = await this.prisma.product.findMany({
      include: {
        ingredients: true,
        productVariants: true,
        category: true,
      },
    });

    return products;
  }

  public async getById(productId: string) {
    const product = await this.prisma.product.findUnique({
      where: {
        id: productId,
      },
      include: {
        ingredients: true,
        productVariants: true,
        category: true,
      },
    });

    if (!product) {
      throw new NotFoundException('Товар не существует');
    }

    return product;
  }
}
