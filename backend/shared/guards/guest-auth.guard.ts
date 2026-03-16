import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import type { Response } from 'express';
import { GUEST_COOKIE_TIME } from 'shared/constants/cookie-time.constant';
import { type CustomRequest } from 'shared/types/custom-request.type';
import { isProd } from 'shared/utils/is-prod.util';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class GuestAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<CustomRequest>();
    const response: Response = context.switchToHttp().getResponse();

    const cookies = request.cookies as Record<string, string | undefined>;

    let guestToken = cookies['guest_token'];

    if (!guestToken) {
      guestToken = uuidv4();

      response.cookie('guest_token', guestToken, {
        httpOnly: true,
        maxAge: GUEST_COOKIE_TIME,
        sameSite: 'lax',
        secure: isProd,
      });
    }

    request['guestToken'] = guestToken;

    return true;
  }
}
