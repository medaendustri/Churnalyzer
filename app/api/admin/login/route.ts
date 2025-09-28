import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { password } = await request.json();
  const adminPassword = process.env.ADMIN_PASSWORD || "123456";
  if (password === adminPassword) {
    // Basit session için cookie set edilebilir
    return NextResponse.json({ success: true }, { status: 200 });
  }
  return NextResponse.json({ error: "Wrong password" }, { status: 401 });
}
