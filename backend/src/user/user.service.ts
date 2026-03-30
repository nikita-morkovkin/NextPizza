import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { SALT_ROUND } from 'shared/constants/salt-round.constant';
import { PrismaService } from 'src/prisma/prisma.service';
import { ChangeUserDto } from './dto/change-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  public constructor(private readonly prisma: PrismaService) {}

  async register(dto: CreateUserDto) {
    const { fullName, email, password } = dto;

    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new ConflictException('Пользователь уже существует');
    }

    const hashPassword = await bcrypt.hash(password, SALT_ROUND);

    await this.prisma.user.create({
      data: {
        fullName,
        email,
        password: hashPassword,
      },
    });

    return {
      message: 'Пользователь успешно зарегистрирован',
    };
  }

  async changeInfo(dto: ChangeUserDto) {
    const { fullName, email, password } = dto;

    const isUserExist = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!isUserExist) {
      throw new NotFoundException('Пользователь не существует');
    }

    return await this.prisma.user.update({
      where: {
        email,
      },
      data: {
        fullName,
        email,
        password,
      },
    });
  }

  async delete(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new ConflictException('Пользователь не существует');
    }

    await this.prisma.user.delete({
      where: {
        id: userId,
      },
    });

    return {
      message: 'Пользователь успешно удален',
    };
  }
}
