import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Resend } from 'resend';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MailService {
  public constructor(
    private readonly configService: ConfigService,
    private readonly prisma: PrismaService,
  ) {}

  public async sendEmail(email: string) {
    const resend = new Resend(this.configService.getOrThrow('MAIL_PORT'));

    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new NotFoundException('Такого пользователя нет.');
    }

    await resend.emails.send({
      from: 'NextPizza <support-nextpizza@gmail.com>',
      to: [email],
      subject: 'Hello world',
      html: `<p>Hello, ${user.fullName}! Your order was created and you need to pay for it, then we will send you our order by our home. To pay the order, click this link ${'https://inoriginal.net/'}</p>`,
    });
  }
}
