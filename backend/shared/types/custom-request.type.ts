import { type Request } from 'express';

export type CustomRequest = Request & { guestToken?: string };
