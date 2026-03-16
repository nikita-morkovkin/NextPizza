import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { type CustomRequest } from 'shared/types/custom-request.type';

export const GuestToken = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<CustomRequest>();
    return request['guestToken'];
  },
);
