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

    const totalPrice =
      userCart?.items?.reduce((acc, item) => {
        const ingredientsPrice = item.ingredients.reduce(
          (sum, ing) => sum + ing.price,
          0,
        );
        return (
          acc + (item.productVariant.price + ingredientsPrice) * item.quantity
        );
      }, 0) ?? 0;

    return {
      items: userCart?.items,
      totalPrice: totalPrice,
    };
  }
}
