

import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
    const hasSession = req.cookies.has("next-auth.session-token");
    if (req.nextUrl.pathname.startsWith("/blog") && !hasSession) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

	return NextResponse.next();
}

export const config = {
	matcher: ["blog/:path*"], // Apply to /blog and all subroutes
};
