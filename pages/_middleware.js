import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.JWT_SECRET });
  const { pathname } = req.nextUrl;
  if (pathname.includes("/api/auth") || token) {
    console.log("JWWWWWWWWT" + token);
    console.log(pathname);
    return NextResponse.next();
  }
  if (!token && pathname !== "/login") {
    console.log(pathname);
    console.log("JWWWWWWWWT" + token);
    return NextResponse.redirect("/login");
  }
}
