import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { GuestToken } from 'shared/decorators/guest-token.decorator';
import { GuestAuthGuard } from 'shared/guards/guest-auth.guard';
import { CartService } from './cart.service';
import { CartResponseDto } from './dto/cart-response.dto';

@Controller('cart')
@ApiTags('Корзина товаров')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get('all')
  @ApiOperation({ summary: `Получить список товаров и их количество` })
  @ApiOkResponse({
    description: 'Список товаров получен и их количество',
    type: CartResponseDto,
  })
  @UseGuards(GuestAuthGuard)
  public async getAll(@GuestToken() token: string) {
    return this.cartService.getAll(token);
  }
}
