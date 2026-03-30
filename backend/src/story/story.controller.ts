import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { StoryService } from './story.service';

@Controller('story')
@ApiTags('Stories')
export class StoryController {
  constructor(private readonly storyService: StoryService) {}

  @Get('all')
  @ApiOperation({ summary: 'Получить все сторисы' })
  async getAll() {
    return await this.storyService.getAll();
  }
}
