import { Controller, Post, UseGuards } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { GuestToken } from 'shared/decorators/guest-token.decorator';
import { GuestAuthGuard } from 'shared/guards/guest-auth.guard';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  @ApiOperation({
    summary:
      'Create order and then receive email confirmation to pay the order',
  })
  @UseGuards(GuestAuthGuard)
  public async create(@GuestToken() token: string, data: CreateOrderDto) {
    return await this.orderService.create(token, data);
  }
}
