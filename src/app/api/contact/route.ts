import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
    // Placeholder: In production, forward to email/service/CRM
    console.log("Contact message:", { name, email, message });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("/api/contact error:", error);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}


