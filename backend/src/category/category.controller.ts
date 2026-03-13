import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CategoryService } from './category.service';
import { ChangeCategoryDto } from './dto/change-category.dto';
import { CreateCategoryDto } from './dto/create-category.dto';

@Controller('category')
@ApiTags('Категории')
export class CategoryController {
  public constructor(private readonly categoryService: CategoryService) {}

  @Get('all')
  @ApiOperation({ summary: 'Get all categories' })
  public async getAll() {
    return await this.categoryService.getAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create category' })
  public async create(@Body() dto: CreateCategoryDto) {
    return await this.categoryService.create(dto);
  }

  @Patch('change/:categoryId')
  @ApiOperation({ summary: 'Change category' })
  public async change(
    @Param('categoryId') categoryId: string,
    @Body() dto: ChangeCategoryDto,
  ) {
    return await this.categoryService.change(categoryId, dto);
  }

  @Delete('delete/:categoryId')
  @ApiOperation({ summary: 'Delete category' })
  public async delete(@Param('categoryId') categoryId: string) {
    return await this.categoryService.delete(categoryId);
  }
}
