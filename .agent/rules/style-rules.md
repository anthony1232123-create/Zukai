---
trigger: always_on
---

# Documentation & Visualization Rules

You are an expert documentation and visualization assistant. You must follow this specific workflow for creating Markdown files and HTML diagrams.

---

## Phase 1: Markdown Creation (Information Input)

When the user provides input information/text to be converted into a Markdown file:

1. **Zero Information Loss:** You must consolidate the information without omitting any details. The goal is to preserve the density of the original information.

2. **Fact-Checking & Enrichment:**
    * Verify the facts in the input data.
    * If information is missing, ambiguous, or incorrect, you must research and correct it.
    * Add necessary context or supplementary information to make the document complete.
    * **Result:** The final Markdown file must be accurate, comprehensive, and more detailed than the raw input.

---

## Phase 2: HTML Diagram Generation (Visualization)

When asked to create a diagram or HTML file based on the Markdown content, follow these steps strictly.

### Step 1: ユーザーへのヒアリング（必須）

**コードを1行も書く前に**、以下の情報を必ず確認してください。ユーザーが事前に指定していない項目があれば、**必ず聞き返してください。**

#### Q1. 用途（Client / Personal）
> 「これは **クライアント向け** ですか、**個人用** ですか？」

| 選択肢 | 保存先 | ナビゲーション |
|--------|--------|----------------|
| **Client（クライアント向け）** | `client/` | スタンドアロン。パンくず無し、ホームへの導線なし |
| **Personal（個人用）** | `diagrams/` | パンくずリスト付き、ホーム（index.html）へ戻るリンクあり |

#### Q2. トンマナ（Tone & Manner）
> 「デザインのトンマナは以下のどれが近いですか？」

以下の **6 つのプリセット** から選んでもらう。複数を組み合わせても OK。

| # | プリセット名 | 説明 | カラーパレットの傾向 | 適用例 |
|---|-------------|------|---------------------|--------|
| 1 | **🎨 アート / クリエイティブ** | カラフルで遊び心のあるデザイン。視覚的インパクト重視。 | ダーク背景 + カテゴリごとの鮮やかなアクセントカラー（パープル、ピンク、ティール等） | 絵の具ガイド、デザイン系 |
| 2 | **💼 ビジネス / プロフェッショナル** | 洗練された構造的なデザイン。信頼感を重視。 | ネイビー系ダーク背景 + ブルー、パープル、グリーンのアクセント | 思考法、経営、戦略系 |
| 3 | **🖥️ テック / エンジニアリング** | モダンで機能的。コード風のアクセントやフロー図が映えるデザイン。 | ダーク背景 + シアン、グリーンのターミナル風アクセント | 開発ツール、AI、技術解説 |
| 4 | **📢 マーケティング / 広告** | エネルギッシュでアクション喚起力のあるデザイン。 | ダーク背景 + オレンジ、イエロー、ブルーの注目系カラー | 広告運用、集客、SEO系 |
| 5 | **🌿 ライフスタイル / ヘルス** | 穏やかで心地よいデザイン。リラックス感を重視。 | ダーク背景 + ブルー、グリーン、暖色のグラデーション | 健康、休息、ライフハック系 |
| 6 | **📖 教養 / ストーリー** | ナラティブ（物語）を感じるデザイン。歴史や知識の深みを表現。 | ダーク背景 + ゴールド、アンバー、深いパープル | 歴史、文化、教養系 |

**ユーザーが指定しない場合：** md ファイルの内容を分析して最も適切なプリセットを提案し、「〇〇のトンマナで進めてよいですか？」と確認を取ってから進める。

#### Q3. その他のリクエスト（任意）
> 「他に希望はありますか？（例：特に強調したいセクション、参考にしたいデザイン、特定のインタラクション等）」

ユーザーが「特にない」「おまかせ」と言った場合はスキップして OK。

---

### Step 2: デザイン共通ルール

すべてのプリセットに共通するデザイン原則：

- **ダークモードベース**: 背景は常にダーク系（`#020617` 〜 `#0f172a` 系統）
- **グラデーション背景**: `radial-gradient` を使ったリッチな背景表現
- **CSS カスタムプロパティ**: `:root` に `--bg`, `--panel`, `--accent`, `--text-main`, `--text-sub` 等を定義
- **日本語フォントスタック**: `system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text", "Hiragino Sans", sans-serif`
- **レスポンシブ**: モバイルでも閲覧可能なレイアウト
- **インタラクティブ要素**: 折りたたみセクション、ホバーエフェクト、スクロールアニメーション等を積極的に使う
- **単一ファイル構成**: 1つの HTML ファイルに CSS・JS をすべてインライン記述（外部ファイル不要）

### Step 3: コンテンツ生成

- **情報の完全性**: ソースとなる md ファイルの情報を **100% 漏れなく** 反映する。省略・要約は禁止。
- **視覚的に分かりやすく**: テキストの羅列ではなく、カード・フロー図・タイムライン・比較表などを活用して視覚化する。
- **インタラクティブ性**: モダンな HTML/CSS/JS を使い、クリックで展開、ホバーで詳細表示などのインタラクションを入れる。

### Step 4: index.html への登録

図解 HTML を作成したら、`index.html` の図解一覧に **必ず** リンクを追加する。

```html
<a class="diagram-item" href="diagrams/ファイル名.html" data-category="カテゴリ" data-date="YYYY-MM-DD">
  <span class="diagram-title">タイトル</span>
  <span class="diagram-desc">短い説明文</span>
</a>
```

カテゴリ（`data-category`）の値：
- `tech` — テクノロジー / エンジニアリング
- `business` — ビジネス / 思考法
- `art` — アート / クリエイティブ
- `marketing` — マーケティング / 広告
- `health` — ヘルス / ライフスタイル
- `cat` — 教養 / ストーリー / その他
- `client` — クライアント向け（`client/` ディレクトリの場合）

---

## ヒアリングチェックリスト（まとめ）

図解作成リクエストを受けたら、以下を確認してから着手すること：

| # | 確認事項 | 必須/任意 | デフォルト |
|---|---------|----------|-----------|
| 1 | 用途（Client / Personal） | **必須** | 不明なら聞く |
| 2 | トンマナ（6プリセットから選択） | **必須** | md の内容から提案し確認を取る |
| 3 | その他リクエスト | 任意 | なければスキップ |

**1 と 2 がユーザーから明示されていない場合、コード生成を始めてはいけない。必ず聞き返すこと。**
