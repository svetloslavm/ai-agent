import { NextRequest, NextResponse } from "next/server";
import { createChain } from "@/lib/chain";

export async function POST(req: NextRequest) {
  try {
    const { input, history } = await req.json();
    const chain = await createChain();
    const result = await chain.invoke({ input, history });

    return NextResponse.json({ output: result.content });
  } catch (err) {
    console.error(err);

    return new NextResponse("Error", { status: 500 });
  }
}
