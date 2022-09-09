import {withIronSessionApiRoute} from 'iron-session/next';

declare module "iron-session" {
    interface IronSessionData {
        user?: {
            id: number;
        };
    }
}

const cokieOptions = {
    cookieName: "coffeesession",
    password: process.env.COOKIE_PASSWORD!,
}

export function withApiSession(fn: any){
    return withIronSessionApiRoute(fn, cokieOptions);
}