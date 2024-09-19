
import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { authOptions } from './app/lib/auth';

export default async function middleware(req: NextRequest) {
    const session = await getServerSession(authOptions);

    if(!session && req.nextUrl.pathname.startsWith("/nft")) {
        return NextResponse.redirect(new URL('/signin', req.url));
    }

    if(!session && req.nextUrl.pathname.startsWith("/token")) {
        return NextResponse.redirect(new URL('/signin', req.url));
    }
}