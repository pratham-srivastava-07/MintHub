import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export const config = {
    matcher: ['/nft', '/token'],
  };

export default withAuth( async (req) => {
    const token = req.nextauth.token

    if(!token) {
        return NextResponse.redirect(new URL("/api/auth/signin", req.url))
    }
})