# Diagram Library｜図解ポータル

まいけるのための図解ライブラリ

情報多すぎて文字読んでる間に寿命が来そうなので、図解でインプットすることにした。

## デプロイURL

```
https://zukai-michael.surge.sh
```

Surge.sh でデプロイしています。

## ディレクトリ構造

```
Zukai/
├── index.html          … ポータルトップページ
├── markdown/           … 図解の元ネタ（Markdownファイル）
├── diagrams/           … 個人用の図解HTML（パンくず付き）
├── client/             … クライアント共有用の図解HTML（スタンドアロン）
├── assets/             … 画像等のアセット
├── .cursorrules        … Cursor用ルール
└── .agent/rules/       … エージェント用の詳細ルール
```

## 図解の追加方法

1. `markdown/` に元ネタの `.md` を追加
2. Cursor に「この md を図解して」と依頼
3. 用途（Client / Personal）を指定 → 図解 HTML が生成される
4. `index.html` にリンクが自動追加される
