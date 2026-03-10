import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
@ApiTags('User')
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
}
