import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [ConfigModule.forRoot(), UserModule, CategoryModule],
})
export class AppModule {}
