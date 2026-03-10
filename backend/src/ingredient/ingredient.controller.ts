import { Body, Controller, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ChangeIngredientDto } from './dto/change-ingredient.dto';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { IngredientService } from './ingredient.service';

@Controller('ingredient')
@ApiTags('ingredient')
export class IngredientController {
  public constructor(private readonly ingredientService: IngredientService) {}

  @Post('create')
  @ApiOperation({ summary: 'Create a new ingredient' })
  public async create(@Body() dto: CreateIngredientDto) {
    return await this.ingredientService.create(dto);
  }

  @Post('change')
  @ApiOperation({ summary: 'Change an existing ingredient' })
  public async change(@Body() dto: ChangeIngredientDto) {
    return await this.ingredientService.change(dto);
  }

  @Post('delete/:name')
  @ApiOperation({ summary: 'Delete an existing ingredient' })
  public async delete(@Param('name') name: string) {
    return await this.ingredientService.delete(name);
  }
}
