# Vivliostyle Book Template (JP)

GitHub/Markdown/Vivliostyleで**一発ビルド**＆**CI自動生成**するためのテンプレート。  
- `npm run dev` でプレビュー
- `npm run build` で `dist/book.pdf` と `dist/index.html` を生成
- GitHub Actions で push 時に自動ビルド＆Artifactsアップロード
- 任意で GitHub Pages 公開（ブランチ設定が必要）

## 必須ツール（ローカル）
- Node.js 20+
- (推奨) フォント: **Noto Sans JP** または **Noto Sans CJK JP**

### macOSでフォント導入（Homebrew Cask）
```bash
brew tap homebrew/cask-fonts
brew install --cask font-noto-sans-cjk-jp
```

## 使い方
```bash
npm ci         # 初回のみ（または npm install）
npm run dev    # ブラウザでプレビュー
npm run build  # PDFとHTMLを dist/ に出力
```

## ファイル構成
```
.
├── cover.md
├── manuscript.md
├── styles/
│   └── style.css
├── vivliostyle.config.js
├── package.json
└── .github/workflows/build.yml
```

## GitHub Actions
- push で PDF/HTML を生成し、Artifacts にアップロードします。
- `deploy-pages: true` にしている場合、`gh-pages` ブランチに `dist/` を公開します（リポジトリの Pages 設定が必要）。

## よくある質問
- **Webフォントを使いたい**: `styles/style.css` の `@import` を有効化（ネットワーク必須）。
- **CIでフォントが反映されない**: Ubuntuランナーに `fonts-noto-cjk` を apt で入れています。別フォントは追加インストールしてください。
- **ページサイズ変更**: `vivliostyle.config.js` の `size` を `A4` などへ変更。
- **表紙デザイン**: `cover.md` と `.cover` スタイルを編集。画像を使う場合は `<img>` を配置。