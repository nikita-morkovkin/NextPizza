import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {
  public constructor(private readonly prisma: PrismaService) {}

  public async create(token: string, data: CreateOrderDto) {
    const {
      userId,
      fullName,
      email,
      phone,
      address,
      comment,
      totalAmount,
      items,
    } = data;

    return await this.prisma.order.create({
      data: {
        token,
        userId: userId || '',
        fullName,
        email,
        phone,
        address,
        comment,
        totalAmount,
        items,
      },
    });
  }
}
