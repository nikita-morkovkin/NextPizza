import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from 'src/prisma/prisma.module';
import { MailService } from './mail.service';

@Module({
  imports: [PrismaModule, ConfigModule],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
