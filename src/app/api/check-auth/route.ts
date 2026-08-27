import { NextRequest, NextResponse } from "next/server";
import * as cookie from "cookie";

export async function GET(req: NextRequest) {
  const cookies = cookie.parse(req.headers.get("cookie") || "");

  if (cookies.authToken === "authenticated") {
    return NextResponse.json({ authenticated: true });
  } else {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }
}
