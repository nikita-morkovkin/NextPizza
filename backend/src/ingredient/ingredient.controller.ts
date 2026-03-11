import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ChangeIngredientDto } from './dto/change-ingredient.dto';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { IngredientService } from './ingredient.service';

@Controller('ingredient')
@ApiTags('Ингридиенты')
export class IngredientController {
  public constructor(private readonly ingredientService: IngredientService) {}

  @Get('get-all')
  @ApiOperation({ summary: 'Get all ingredients' })
  @ApiResponse({
    status: 200,
    description: 'Return all ingredients.',
    type: [CreateIngredientDto],
  })
  public async getAll() {
    return await this.ingredientService.getAll();
  }

  @Post('create')
  @ApiOperation({ summary: 'Create a new ingredient' })
  @ApiResponse({
    status: 201,
    description: 'The ingredient has been successfully created.',
  })
  public async create(@Body() dto: CreateIngredientDto) {
    return await this.ingredientService.create(dto);
  }

  @Patch('change')
  @ApiOperation({ summary: 'Change an existing ingredient' })
  @ApiResponse({
    status: 200,
    description: 'The ingredient has been successfully changed.',
  })
  public async change(@Body() dto: ChangeIngredientDto) {
    return await this.ingredientService.change(dto);
  }

  @Delete('delete/:name')
  @ApiResponse({
    status: 200,
    description: 'The ingredient has been successfully deleted.',
  })
  @ApiOperation({ summary: 'Delete an existing ingredient' })
  public async delete(@Param('name') name: string) {
    return await this.ingredientService.delete(name);
  }
}
