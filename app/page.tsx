import Link from "next/link";

import { AiChat } from "@/components/AiChat";
import { MermaidDiagram } from "@/components/MermaidDiagram";

const MERMAID_SNIPPET = `graph TD
  User[ユーザー] -->|入力| Chat[AI チャット]
  Chat -->|/api/chat 経由| OpenAI[OpenAI API]
  OpenAI -->|レスポンス| User`;

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center bg-zinc-50 px-4 py-10 font-sans dark:bg-black">
      <main className="flex w-full max-w-5xl flex-col gap-8">
        <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
              Template
            </p>
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
              AI App Starter
            </h1>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Next.js + Tailwind + OpenAI + Mermaid が最初から入った開発テンプレートです。
            </p>
          </div>

          <nav className="flex flex-wrap gap-2 text-xs">
            <Link
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-zinc-200 bg-white/80 px-3 py-1 font-medium text-zinc-800 shadow-sm transition hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
            >
              Next.js Docs
            </Link>
            <Link
              href="https://platform.openai.com/docs"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-zinc-200 bg-white/80 px-3 py-1 font-medium text-zinc-800 shadow-sm transition hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
            >
              OpenAI Docs
            </Link>
            <Link
              href="/mermaid"
              className="inline-flex items-center gap-1 rounded-full border border-zinc-200 bg-white/80 px-3 py-1 font-medium text-zinc-800 shadow-sm transition hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
            >
              Mermaid サンプル
            </Link>
          </nav>
        </header>

        <div className="grid gap-6 md:grid-cols-[minmax(0,2.1fr)_minmax(0,1.5fr)]">
          <AiChat />

          <section className="flex flex-col gap-3 rounded-2xl border border-zinc-200 bg-white/80 p-5 text-sm shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70">
            <div>
              <h2 className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
                Mermaid プレビュー
              </h2>
              <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                図でざっくりアーキテクチャをメモりたいとき用のサンプルです。
              </p>
            </div>

            <MermaidDiagram code={MERMAID_SNIPPET} />

            <p className="mt-1 text-[0.7rem] text-zinc-500 dark:text-zinc-400">
              より詳しいサンプルは{" "}
              <Link
                href="/mermaid"
                className="font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100"
              >
                /mermaid
              </Link>{" "}
              を参照してください。
            </p>
          </section>
        </div>

        <footer className="mt-2 flex flex-wrap items-center justify-between gap-2 text-[0.7rem] text-zinc-500 dark:text-zinc-400">
          <p>
            環境変数やセットアップ手順は{" "}
            <code className="rounded bg-zinc-100 px-1 py-0.5 dark:bg-zinc-800">
              README.md
            </code>{" "}
            を参照してください。
          </p>
          <p>Happy hacking 🚀</p>
        </footer>
      </main>
    </div>
  );
}

