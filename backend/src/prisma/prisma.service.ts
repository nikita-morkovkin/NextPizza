import { Injectable } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../../generated/prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  public constructor() {
    const databaseUrl = process.env.DATABASE_URL;

    const adapter = new PrismaPg({ connectionString: databaseUrl });
    super({ adapter });
  }
}
