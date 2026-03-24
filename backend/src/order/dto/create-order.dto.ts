import { Prisma } from 'generated/prisma/client';

export class CreateOrderDto {
  totalAmount: number;
  items: Prisma.InputJsonValue;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  comment?: string;
  userId?: string | null;
}
