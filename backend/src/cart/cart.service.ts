import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CartService {
  public constructor(private readonly prisma: PrismaService) {}

  public async getAll(token: string) {
    const userCart = await this.prisma.cart.findFirst({
      where: {
        token: token,
      },
      include: {
        items: {
          orderBy: {
            createdAt: 'desc',
          },
          include: {
            productVariant: {
              include: {
                product: true,
              },
            },
            ingredients: true,
          },
        },
      },
    });

    const itemCount = userCart?.items?.length ?? 0;

    return {
      items: userCart?.items,
      count: itemCount,
    };
  }
}
