// export { default } from "next-auth/middleware";
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
export default withAuth(
  function middleware(request) {
    const { pathname } = request.nextUrl;
    if (request.nextUrl.pathname.startsWith("/dashboard")) {
      return NextResponse.rewrite(new URL(pathname, request.url));
    }
    if (request.nextUrl.pathname.startsWith("/tests")) {
      return NextResponse.rewrite(new URL(pathname, request.url));
    }
    if (request.nextUrl.pathname.startsWith("/patients")) {
      return NextResponse.rewrite(new URL(pathname, request.url));
    }
  },
  {
    callbacks: {
      authorized({ token }) {
        return token as any;
      },
    },
  }
);
export const config = {
  matcher: [
    "/",
    "/dashboard/:path*",
    "/tests/:path*",
    "/patients/:path*",
    "/billing/:path*",
    "/clients/:path*",
    "/incidences/:path*",
    "/packages/:path*",
    "/partners/:path*",
    "/reports/:path*",
    "/settings/:path*",
    "/users/:path*",
  ],
};