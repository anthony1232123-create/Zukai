import Link from "next/link";

import { MermaidDiagram } from "@/components/MermaidDiagram";

const SAMPLE_CODE = `graph TD
  A[ユーザー] -->|入力| B[Next.js App]
  B -->|HTTP POST| C[/API Route (app/api/chat)/]
  C -->|OpenAI Responses API| D[OpenAI]
  D -->|レスポンス| B
  B -->|表示| A`;

export default function MermaidPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col gap-6 px-4 py-10">
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
          Diagrams
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          Mermaid サンプル
        </h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          アーキテクチャ図やフロー図をすぐに書けるように、
          <span className="font-mono">mermaid</span> をセットアップ済みです。
        </p>
      </header>

      <section className="space-y-3 rounded-2xl border border-zinc-200 bg-white/80 p-4 text-sm shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70">
        <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
          OpenAI 連携フローの例
        </h2>
        <MermaidDiagram code={SAMPLE_CODE} />
      </section>

      <section className="space-y-3 rounded-2xl border border-dashed border-zinc-200 bg-white/60 p-4 text-xs text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-300">
        <h3 className="font-semibold">このページのコード</h3>
        <p>
          実際のコードは <code className="rounded bg-zinc-100 px-1 py-0.5 dark:bg-zinc-800">app/mermaid/page.tsx</code>{" "}
          と{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 dark:bg-zinc-800">
            components/MermaidDiagram.tsx
          </code>{" "}
          を確認してください。
        </p>
        <p>
          図のテキストを変更して、API
          ルートやコンポーネント構成のメモをすぐに残せます。
        </p>
      </section>

      <footer className="mt-4 text-xs text-zinc-500 dark:text-zinc-400">
        <Link
          href="/"
          className="inline-flex items-center gap-1 rounded-full border border-zinc-200 bg-white/80 px-3 py-1 text-xs font-medium text-zinc-800 shadow-sm transition hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
        >
          ← ホームに戻る
        </Link>
      </footer>
    </main>
  );
}


