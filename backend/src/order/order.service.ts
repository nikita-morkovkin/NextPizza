import { Injectable, Logger } from '@nestjs/common';
import { MailService } from 'src/mail/mail.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {
  private readonly logger = new Logger(OrderService.name);

  public constructor(
    private readonly prisma: PrismaService,
    private readonly mailService: MailService,
  ) {}

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

    await this.prisma.order.create({
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

    this.mailService.sendEmail(email).catch((error) => {
      this.logger.error(`Failed to send email to ${email}:`, error);
    });
  }
}
