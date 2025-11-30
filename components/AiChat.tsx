"use client";

import { useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export function AiChat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!input.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage.content }),
      });

      if (!response.ok) {
        throw new Error("Failed to call /api/chat");
      }

      const data = (await response.json()) as { reply?: string; error?: string };

      const assistantMessage: Message = {
        role: "assistant",
        content:
          data.reply ??
          data.error ??
          "レスポンスの取得に失敗しました。サーバーログを確認してください。",
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "エラーが発生しました。サーバーのログを確認してください。",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/70">
      <div className="flex items-center justify-between gap-2">
        <div>
          <h2 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
            OpenAI チャット
          </h2>
          <p className="text-xs text-zinc-600 dark:text-zinc-400">
            `.env.local` に <code className="rounded bg-zinc-100 px-1 py-0.5 text-[0.7rem] dark:bg-zinc-800">
              OPENAI_API_KEY
            </code>
            を設定すると、このフォームからすぐに試せます。
          </p>
        </div>
      </div>

      <div className="flex max-h-64 flex-col gap-2 overflow-y-auto rounded-xl bg-zinc-50 p-3 text-sm dark:bg-zinc-950">
        {messages.length === 0 ? (
          <p className="text-xs text-zinc-500">
            「Next.js で OpenAI を使うベストプラクティスを教えて」などと入力してみてください。
          </p>
        ) : (
          messages.map((message, index) => (
            <div
              key={`${message.role}-${index}`}
              className={`flex gap-2 ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-3 py-2 text-xs leading-relaxed ${
                  message.role === "user"
                    ? "bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900"
                    : "bg-white text-zinc-900 shadow-sm ring-1 ring-zinc-200 dark:bg-zinc-900 dark:text-zinc-50 dark:ring-zinc-800"
                }`}
              >
                <p className="mb-1 text-[0.65rem] font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                  {message.role === "user" ? "You" : "Assistant"}
                </p>
                <p className="whitespace-pre-wrap">{message.content}</p>
              </div>
            </div>
          ))
        )}
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <textarea
          value={input}
          onChange={(event) => setInput(event.target.value)}
          rows={3}
          className="w-full resize-none rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 outline-none ring-offset-2 focus:border-zinc-400 focus:ring-2 focus:ring-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:focus:border-zinc-600 dark:focus:ring-zinc-700"
          placeholder="例: Next.js でストリーミングな Chat UI を作るときのポイントを教えて"
        />
        <div className="flex items-center justify-between gap-2">
          <p className="text-[0.7rem] text-zinc-500 dark:text-zinc-400">
            API キーやモデルはまずローカルで試してから、本番環境にデプロイするのがおすすめです。
          </p>
          <button
            type="submit"
            disabled={isLoading}
            className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-4 py-1.5 text-xs font-medium text-zinc-50 shadow-sm transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:bg-zinc-400 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            {isLoading ? "送信中..." : "送信"}
          </button>
        </div>
      </form>
    </section>
  );
}


