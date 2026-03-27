import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthCreateDto } from './dto/auth-create.dto';
import { AuthSignInDto } from './dto/auth-sign-in.dto';

@Injectable()
export class AuthService {
  public constructor(private readonly prisma: PrismaService) {}

  public async signIn(dto: AuthSignInDto) {
    const { email, password } = dto;

    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new NotFoundException('Пользователь не найден');
    }

    if (user.password !== password) {
      throw new ConflictException('Пароль не совпадает');
    }

    return await this.getMe(email);
  }

  public async create(dto: AuthCreateDto) {
    const { email, password, fullName } = dto;

    const existUser = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existUser) {
      throw new ConflictException('Пользователь с таким email уже существует');
    }

    const user = await this.prisma.user.create({
      data: {
        email,
        password,
        fullName,
      },
      omit: {
        password: true,
      },
    });

    return user;
  }

  public async getMe(email: string) {
    return await this.prisma.user.findUnique({
      where: {
        email,
      },
      omit: {
        password: true,
      },
    });
  }
}
