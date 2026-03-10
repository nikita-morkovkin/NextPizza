import { Body, Controller, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { ChangeCategoryDto } from './dto/change-category.dto';

@Controller('category')
@ApiTags('Category')
export class CategoryController {
  public constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @ApiOperation({ summary: 'Create category' })
  public async create(@Body() dto: CreateCategoryDto) {
    return await this.categoryService.create(dto);
  }

  @Post('change/:categoryId')
  @ApiOperation({ summary: 'Change category' })
  public async change(
    @Param('categoryId') categoryId: string,
    @Body() dto: ChangeCategoryDto,
  ) {
    return await this.categoryService.change(categoryId, dto);
  }

  @Post('delete/:categoryId')
  @ApiOperation({ summary: 'Delete category' })
  public async delete(@Param('categoryId') categoryId: string) {
    return await this.categoryService.delete(categoryId);
  }
}
