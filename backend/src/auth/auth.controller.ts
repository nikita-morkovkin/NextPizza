import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthCreateDto } from './dto/auth-create.dto';
import { AuthSignInDto } from './dto/auth-sign-in.dto';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('create')
  @ApiOperation({ summary: 'Create user' })
  @ApiOkResponse({ description: 'User created successfully' })
  public async create(@Body() dto: AuthCreateDto) {
    return await this.authService.create(dto);
  }

  @Post('sign-in')
  @ApiOperation({ summary: 'Sign in user' })
  @ApiOkResponse({ description: 'User signed in successfully' })
  public async signIn(@Body() dto: AuthSignInDto) {
    return await this.authService.signIn(dto);
  }

  @Get('me/:email')
  @ApiOperation({ summary: 'Get user info' })
  @ApiOkResponse({ description: 'User info' })
  public async getMe(@Param('email') email: string) {
    return await this.authService.getMe(email);
  }
}
