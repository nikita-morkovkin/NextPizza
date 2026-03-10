import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ChangeProductDto } from './dto/change-product.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductService } from './product.service';

@Controller('product')
@ApiTags('Товары')
export class ProductController {
  public constructor(private readonly productService: ProductService) {}

  @Get('search')
  @ApiOperation({ summary: 'Поиск товаров по запросу' })
  public async search(@Query('query') query: string) {
    return this.productService.search(query);
  }

  @Post('create/:categoryId')
  @ApiOperation({ summary: 'Создать товар' })
  public async create(
    @Param('categoryId') categoryId: string,
    @Body() dto: CreateProductDto,
  ) {
    return await this.productService.create(categoryId, dto);
  }

  @Patch(':productId')
  @ApiOperation({ summary: 'Изменить товар' })
  public async change(
    @Param('productId') productId: string,
    @Body() dto: ChangeProductDto,
  ) {
    return await this.productService.change(productId, dto);
  }

  @Delete(':productId')
  @ApiOperation({ summary: 'Удалить товар' })
  public async delete(@Param('productId') productId: string) {
    return this.productService.delete(productId);
  }
}
