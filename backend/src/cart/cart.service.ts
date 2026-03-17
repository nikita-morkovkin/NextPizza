import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCartItemDto } from './dto/create-cart-item.dto';

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

  public async add(token: string, dto: CreateCartItemDto) {
    const { productVariantId, quantity, ingredientIds } = dto;

    let userCart = await this.prisma.cart.findFirst({
      where: {
        token: token,
      },
    });

    if (!userCart) {
      userCart = await this.prisma.cart.create({
        data: {
          token: token,
        },
      });
    }

    const cartItem = await this.prisma.cartItem.findFirst({
      where: {
        cartId: userCart.id,
        productVariantId: productVariantId,
        ingredients: {
          every: {
            id: {
              in: ingredientIds,
            },
          },
          some: {},
        },
      },
      include: {
        ingredients: true,
      },
    });

    const isSameIngredients =
      cartItem &&
      cartItem.ingredients.length === (ingredientIds?.length || 0) &&
      cartItem.ingredients.every((ing) => ingredientIds?.includes(ing.id));

    if (isSameIngredients) {
      await this.prisma.cartItem.update({
        where: {
          id: cartItem.id,
        },
        data: {
          quantity: cartItem.quantity + quantity,
        },
      });
    } else {
      await this.prisma.cartItem.create({
        data: {
          cartId: userCart.id,
          productVariantId: productVariantId,
          quantity: quantity,
          ingredients: {
            connect: ingredientIds?.map((id) => ({ id })) || [],
          },
        },
      });
    }

    return this.getAll(token);
  }

  public async update(id: string, quantity: number, token: string) {
    const cartItem = await this.prisma.cartItem.findFirst({
      where: {
        id,
        cart: {
          token,
        },
      },
    });

    if (!cartItem) {
      throw new NotFoundException('Товар в корзине не найден');
    }

    await this.prisma.cartItem.update({
      where: {
        id,
      },
      data: {
        quantity,
      },
    });

    return this.getAll(token);
  }

  public async remove(id: string, token: string) {
    const cartItem = await this.prisma.cartItem.findFirst({
      where: {
        id,
        cart: {
          token,
        },
      },
    });

    if (!cartItem) {
      throw new NotFoundException('Товар в корзине не найден');
    }

    await this.prisma.cartItem.delete({
      where: {
        id,
      },
    });

    return this.getAll(token);
  }
}
