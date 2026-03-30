import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StoryService {
  public constructor(private readonly prisma: PrismaService) {}

  public async getAll() {
    return await this.prisma.story.findMany({
      include: {
        items: true,
      },
    });
  }
}
