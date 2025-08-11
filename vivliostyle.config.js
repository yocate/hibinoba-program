/**
 * Vivliostyle config
 * Docs: https://vivliostyle.org/
 */
module.exports = {
  language: 'ja',
  size: 'A5', // ページサイズ。A5は日本の同人誌や技術書でよく使われます
  theme: 'styles/style.css',
  entry: [
    // 表紙
    { path: 'cover.md', rel: 'cover', title: 'Cover' },
    // 本文
    { path: 'manuscript.md', rel: 'contents', title: 'Contents' }
  ],
  output: [
    // npm scriptsから指定するためコメントアウト（残しておくと手元でも可）
    // 'dist/book.pdf',
    // 'dist/index.html'
  ],
  toc: true,
  // PDFのメタデータ
  cover: 'cover.md',
  renderMode: 'paged' // PDF/印刷前提
}