import { supabase } from "@/lib/supabaseClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { data } = await supabase
      .from("mg_hs")
      .select()
      .order("score", { ascending: true })
      .order("inserted_at", { ascending: true })
      .limit(10);

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json("Internal error", { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, score } = await request.json();
    await supabase.from("mg_hs").insert({ name, score });

    return NextResponse.json({ message: "success" });
  } catch (err) {
    return NextResponse.json("Internal error", { status: 500 });
  }
}
