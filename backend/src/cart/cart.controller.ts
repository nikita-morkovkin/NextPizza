import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { GuestToken } from 'shared/decorators/guest-token.decorator';
import { GuestAuthGuard } from 'shared/guards/guest-auth.guard';
import { CartService } from './cart.service';
import { CartResponseDto } from './dto/cart-response.dto';
import {
  CreateCartItemDto,
  UpdateCartItemDto,
} from './dto/create-cart-item.dto';

@Controller('cart')
@ApiTags('Корзина товаров')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get('all')
  @ApiOperation({ summary: `Получить список товаров и их цену в сумме` })
  @ApiOkResponse({
    description: 'Список товаров получен и их цена в сумме',
    type: CartResponseDto,
  })
  @UseGuards(GuestAuthGuard)
  public async getAll(@GuestToken() token: string) {
    return this.cartService.getAll(token);
  }

  @Post()
  @ApiOperation({ summary: `Добавить товар в корзину` })
  @ApiOkResponse({
    description: 'Товар добавлен в корзину',
    type: CartResponseDto,
  })
  @UseGuards(GuestAuthGuard)
  public async add(
    @GuestToken() token: string,
    @Body() dto: CreateCartItemDto,
  ) {
    return this.cartService.add(token, dto);
  }

  @Patch(':id')
  @ApiOperation({ summary: `Обновить количество товара в корзине` })
  @ApiOkResponse({
    description: 'Количество товара обновлено',
    type: CartResponseDto,
  })
  @UseGuards(GuestAuthGuard)
  public async update(
    @Param('id') id: string,
    @Body() dto: UpdateCartItemDto,
    @GuestToken() token: string,
  ) {
    return this.cartService.update(id, dto.quantity, token);
  }

  @Delete(':id')
  @ApiOperation({ summary: `Удалить товар из корзины` })
  @ApiOkResponse({
    description: 'Товар удален из корзины',
    type: CartResponseDto,
  })
  @UseGuards(GuestAuthGuard)
  public async remove(@Param('id') id: string, @GuestToken() token: string) {
    return this.cartService.remove(id, token);
  }
}
