## AI App Starter

Next.js + Tailwind CSS + OpenAI + Mermaid をまとめた開発用テンプレートです。  
「とりあえず AI アプリを試したい」「アーキテクチャ図も一緒に残したい」ときに、そのまま使えます。

---

## セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 環境変数の設定

プロジェクト直下に `.env.local` を作成し、OpenAI の API キーを設定します。

```bash
OPENAI_API_KEY=sk-xxxxxx
```

> `.env.local` は Git にコミットしないようにしてください（Next.js のデフォルト ignore 対象です）。

### 3. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで `http://localhost:3000` を開くとトップページが表示されます。

---

## 入っているもの

### アプリ本体

- Next.js (App Router, TypeScript)
- Tailwind CSS v4

### AI / API まわり

- `openai`（公式 Node/Edge SDK）
- サンプル API ルート: `app/api/chat/route.ts`
  - `gpt-4.1-mini` を使ったシンプルなチャットエンドポイント

### フロントエンド用ライブラリ

- `@tanstack/react-query`（データフェッチ・キャッシュ）
- `zod`（スキーマバリデーション）

### 図・ドキュメント

- `mermaid`
- `@types/mermaid`
  - Mermaid 描画用コンポーネント: `components/MermaidDiagram.tsx`
  - サンプルページ: `app/mermaid/page.tsx`

### 開発体験 (DX) 系

- ESLint（`eslint-config-next`）
- Prettier（`eslint-config-prettier` 統合）
- `eslint-plugin-simple-import-sort`（import の自動並び替え）

---

## 主なファイル構成（抜粋）

- `app/page.tsx`
  - トップページ
  - OpenAI チャット UI（`components/AiChat.tsx`）と Mermaid プレビューを配置
- `app/api/chat/route.ts`
  - OpenAI Responses API を叩くシンプルなチャット API
- `components/AiChat.tsx`
  - `/api/chat` を叩くクライアントサイドのチャットコンポーネント
- `components/MermaidDiagram.tsx`
  - Mermaid のコード文字列を受け取って SVG を描画するクライアントコンポーネント
- `app/mermaid/page.tsx`
  - OpenAI 連携フローのサンプル図を表示するページ
- `app/providers.tsx`
  - `@tanstack/react-query` の `QueryClientProvider` をまとめた Provider

---

## 使い方の例

### OpenAI の呼び出しをカスタマイズする

- モデルを変えたい場合: `app/api/chat/route.ts` 内の
  `model: "gpt-4.1-mini"` を好みのモデル名に変更
- システムプロンプトを追加したい場合:
  `client.responses.create` に `instructions` などを追加

### Mermaid で図を増やす

- `app/mermaid/page.tsx` をコピーして、新しいページを作成
- `SAMPLE_CODE` の文字列を編集して、自分のアーキテクチャ図やフロー図を定義

---

## よくある拡張アイデア

- 認証（NextAuth / Clerk など）を追加して、ユーザーごとの履歴を保存
- DB（PostgreSQL / SQLite）をつなぎ、チャット履歴や設定を永続化
- `zod` で API の入出力スキーマをしっかり定義
- `react-query` を使って、複数の API 呼び出しを整理

---

## リンク集

- Next.js: https://nextjs.org
- OpenAI Docs: https://platform.openai.com/docs
- Mermaid: https://mermaid.js.org

