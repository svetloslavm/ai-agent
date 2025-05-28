import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { openAiClient } from "@/config";
import { getCookieKey } from "@/utils";

export async function POST(req: Request) {
  const cookieKey = getCookieKey();
  const isAuthenticated = (await cookies()).get(cookieKey);

  if (!isAuthenticated) {
    return NextResponse.json({ message: "401 Unauthorized" }, { status: 401 });
  }

  const { prompt } = await req.json();

  if (!prompt) {
    return NextResponse.json(
      { message: "422 Invalid request, missing 'prompt' field." },
      { status: 422 }
    );
  }

  try {
    const { data, usage } = await openAiClient.embeddings.create({
      input: prompt,
      model: "text-embedding-ada-002",
    });

    return NextResponse.json({
      embedding: data[0].embedding,
      total_tokens: usage.total_tokens,
    });
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: error.status }
    );
  }
}
