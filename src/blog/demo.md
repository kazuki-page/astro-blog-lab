---
title: デモ記事1だよだよだよだよだよだよだよだよだよだよだよだよだよだよだよだよだよ
published_date: 2026-01-15
---

プログラミングからして知識も経験もないのでいろいろ吸収しながらできたらと思う

## 0.なにをするのか

### 目的

- 既存の WordPress を Headless CMS 的な構成へ段階的に移行
- 完全移行も目的ではあるが、知見を得る・手を動かすことも重要
- 途中で止まっても意味が残る進め方をしたい
### 基本方針

- デザイン先行
    - CMS 先行だと設定疲れ・燃え尽きが起きやすい
    - 完成形が見えるほうがモチベーションが保ちやすい
    - デザイン作業は途中で止まっても「糧」として残りやすい
- SSG 先行、CMS は後付け
    - 最初は静的サイトとして成立させる
    - 後から Headless CMS（WP / Tina / microCMS 等）を繋げる前提
### SSG の選択

#### Astro を選ぶ理由
- 以前に少し触った経験がある
- マイナーすぎず、情報量も十分
- 「まず静的、必要なら部分的に動的」という思想が合っている
- 将来 Next.js 等へ移行する余地もある

#### Astro の位置づけ
- 正解というより「学習・試作にちょうどいい」
- SSG は比較的 入れ替えコストが低い
    - Astro → Next.js にしたくなったらその時考えればOK
    - 先に完璧な選定をしなくても致命傷になりにくい

### CMS について（現時点）

- 今は まだ決めない
- 候補として過去に触ったもの：
    - GitHub + Tina CMS + Cloudflare Pages（未完）
- 今回は
    - Astro + Markdown（または MDX）
    - 「CMSがなくても成立する構成」
- CMS は「あとから差し込む部品」扱い

### バイブコーディングとの向き合い方

- 完全丸投げはしない
    - 理解できないままファイル生成されるとトラブルシュートが辛い＆自分の力にならない
- ただし：
    - デザイン領域は誤差が許されやすく、相性は良い
    - 「考え方」「構造」を把握しつつ部分的に使うのはアリ
- 学習目的なので
    - 結果より過程が重要
    - でも「バイブコーディングという能力」自体にも興味あり
- 方針：
    - わからないところを聞く / 叩き台を作らせる
    - 最終判断・修正は自分

### 進め方（たたき）

1. 方針を決める
    - SSG：Astro で確定
	- ページ構成を洗い出す
	- デザイン方針を決める
- Astro で静的に組む
- （余力があれば）
    - Headless CMS を繋ぐ
    - または Next.js 等と比較検討
## 環境準備
- Visual Studio Code
- Gemini CLI
	- Node.js
## 1. 設定を詰める
以下をAIを相談しながら決めた（確認した、という言い方もできるが）
### 思想

**目的：決め切らないが、迷わないための「芯」を作る**

- 読み手：**未来の自分**
- 性質：ログ／メモ／思考の断片
- トーン：静か
- 情報密度：ノート寄り
- 文字量：多い前提
- 他者への配慮は最小限（優しさは別媒体でやる想定）、ただし未来の自分への配慮はする
- エンジニアブログ文化の影響あり

- CSSは一旦最小ルールのみ
	- 画面が出てから調整する前提
	
- ブランドカラー（紺・薄水色・黄）は
	- ロゴ等で使う想定
		コンテンツ内には無理に差し込まない
- フォント
	- 和文対応の等幅寄りフォントを全文に使いたい
### URL構成&ページの種類
- (ドメイン)：トップページ
	- /（各記事を端的に表す文字列）：記事ページ
	- /category/（各カテゴリ名）：カテゴリページ
	- /tag/（各タグ名）：タグページ
	- /about：自己紹介ページ
	- /policy：ポリシーページ
	- /contact：お問い合わせページ
	- /feed（ページとは言わないが）

### 各ページが持つ要素
#### 記事が持つ要素
- title
- slug
- published_date
- body

#### 固定ページが持つ要素
- slug
- title
- body

#### トップページが持つ要素
なし

### ディレクトリ構造
- src /
	- content/
		- posts/
		- pages/
	- pages/
		- index.
		- slug.astro
		- category/category.astro
		- tag/tag.astro
		- feed.xml.ts
	- layouts
	- components/
	- styles/
### デザイン方針
- 読み手：未来の自分
- 文字量：多い
- トーン：静か・ストイック
- 余白：広め
- 装飾：しない
### 具体的CSS
ChatGPTに丸投げ

:root {
  --bg: #ffffff;
  --text: #111111;
  --muted: #666666;
  --accent: #0066cc;
}
body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font-family:
	"BIZ UDゴシック",
	"Noto Sans Mono CJK JP",
    ui-monospace,
    monospace;
  font-size: 16px;
  line-height: 1.8;
}
main {
  max-width: 680px;
  padding: 3rem 1.5rem;
  margin: 0 auto;
}
h1, h2, h3 {
  font-weight: 600;
  line-height: 1.4;
  margin-top: 3rem;
  margin-bottom: 1rem;
}

h1 { font-size: 1.8rem; }
h2 { font-size: 1.4rem; }
h3 { font-size: 1.2rem; }

p {
  margin: 1.5rem 0;
}

ul, ol {
  margin: 1.5rem 0 1.5rem 1.5rem;
}

li {
  margin: 0.5rem 0;
}
a {
  color: var(--accent);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
code {
  background: #f5f5f5;
  padding: 0.2em 0.4em;
  border-radius: 3px;
  font-size: 0.9em;
}

pre {
  background: #f5f5f5;
  padding: 1rem;
  overflow-x: auto;
  border-radius: 4px;
}
header, footer {
  max-width: 680px;
  margin: 0 auto;
  padding: 1.5rem;
  font-size: 0.9rem;
  color: var(--muted);
}

## 2.実際に触り始める
全部AIに訊いている。が、動かすこと自体は概ね自力でやっている。

- Astroをセットアップ
- 起動確認OK
- GitHub関連設定
	- 自分のアカウントを自分のPCに設定（気づいてなくて後からやったけど...）
	- GitHubのリポジトリの作成と結びつけ
- README.md の編集：自分の
- .gitignoreの確認と変更："/.vscode"と".log"を足した
