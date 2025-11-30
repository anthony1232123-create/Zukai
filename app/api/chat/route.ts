import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { message } = (await request.json()) as { message?: string };

    if (!message || !message.trim()) {
      return Response.json(
        { error: "message is required" },
        { status: 400 },
      );
    }

    if (!process.env.OPENAI_API_KEY) {
      return Response.json(
        {
          error:
            "OPENAI_API_KEY が設定されていません。.env.local を確認してください。",
        },
        { status: 500 },
      );
    }

    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      input: message,
    });

    const firstOutput = Array.isArray(response.output)
      ? response.output[0]
      : undefined;

    const firstContent =
      firstOutput && "content" in firstOutput && Array.isArray(firstOutput.content)
        ? firstOutput.content[0]
        : undefined;

    const text =
      firstContent && typeof (firstContent as { text?: unknown }).text === "string"
        ? (firstContent as { text: string }).text
        : JSON.stringify(firstContent ?? response);

    return Response.json({ reply: text });
  } catch (error) {
    console.error("Chat API error:", error);

    return Response.json(
      {
        error:
          "サーバー側でエラーが発生しました。ログを確認してください。",
      },
      { status: 500 },
    );
  }
}


