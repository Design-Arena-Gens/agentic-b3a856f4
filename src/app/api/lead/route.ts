import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const { name, email, company, budget, goals } = body ?? {};

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof company !== "string" ||
      typeof budget !== "string"
    ) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    // In a real app, send to CRM, email, or database.
    console.log("[Lead] New inquiry:", {
      name,
      email,
      company,
      budget,
      goals: typeof goals === "string" ? goals.slice(0, 500) : "",
      at: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}

