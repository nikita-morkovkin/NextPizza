import { Controller, UseGuards } from '@nestjs/common';
import { GuestToken } from 'shared/decorators/guest-token.decorator';
import { GuestAuthGuard } from 'shared/guards/guest-auth.guard';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @UseGuards(GuestAuthGuard)
  public async create(@GuestToken() token: string, data: CreateOrderDto) {
    return await this.orderService.create(token, data);
  }
}
