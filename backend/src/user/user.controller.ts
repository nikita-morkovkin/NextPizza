import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ChangeUserDto } from './dto/change-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
@ApiTags('Пользователи')
export class UserController {
  public constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Register user' })
  public async register(@Body() createUserDto: CreateUserDto) {
    return await this.userService.register(createUserDto);
  }

  @Delete(':userId')
  @ApiOperation({ summary: 'Delete user' })
  public async delete(@Param('userId') userId: string) {
    return await this.userService.delete(userId);
  }

  @Patch('change-info')
  @ApiOperation({ summary: 'Change user info' })
  public async changeInfo(@Body() changeUserDto: ChangeUserDto) {
    return await this.userService.changeInfo(changeUserDto);
  }
}
