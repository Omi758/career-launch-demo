# 🧩 Career Launch – Web Coding Demo（架空サイト）

![career launch demo-site](img/career_launch_git_screenshot.webp "career launch demo-site")

## 🔗 Demo

（Demo Site URL）
[https://careerlaunch.omiportfolio.com/](https://careerlaunch.omiportfolio.com/)

&nbsp;

## 📝 Overview（概要）

Udemy 教材
**「【超実践 ①】Figma からの HP コーディング - Web 制作会社が教える静的サイト制作 / HelloMentor」**
を参考に制作した、**転職・キャリア支援サービスを想定したコーポレートサイト**です。

まずは **Figma のデザインカンプを元に自力でコーディングを行い**、
完成後に解説動画を視聴する形で作成を進めました。

**リキッドレイアウトを前提とした設計**のもと、
実務を想定しアニメーションの多用を避けながら、ユーザー体験を損なわない UI 設計を意識しています。

- 静的 HTML による複数ページ構成（Top + 下層 5 ページ）
- GSAP / ScrollTrigger を用いたスクロールアニメーション
- Splide を用いたスライダー実装
- **900px をブレイクポイントとしたメディアクエリによるレスポンシブ対応**
- **CSS Grid / subgrid を併用し、画面サイズやコンテンツ量が変化しても崩れにくいレイアウトを意識**
- PerfectPixel によるデザイン再現性の担保

&nbsp;

## 🛠️ Tech Stack（使用技術）

<p align="left">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="40" alt="HTML5" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="40" alt="CSS3" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" width="40" alt="SCSS" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="40" alt="JavaScript" />
<img src="https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=black" width="50" alt="GSAP" />
<img src="https://img.shields.io/badge/Splide-005BBB?style=for-the-badge" width="50" alt="Splide" />
</p>

&nbsp;

## ✨ Features（制作ポイント）

### 1. ScrollTrigger を用いたスクロールアニメーション

- 各ページの主要セクションに限定してスクロールアニメーションを実装
- アニメーションの多用による視認性低下や離脱を防ぎ、全体バランスを重視

### 2. スクロール方向を考慮したヘッダー制御

- top-kv 通過を ScrollTrigger で判定
- 以降はスクロール方向に応じてヘッダーを表示 / 非表示
- ヘッダー内に Contact CTA を配置し、ユーザー導線を意識した設計

### 3. Splide を用いたスライダー実装

- auto-scroll を用いたギャラリースライダーの実装
- スタッフ紹介用のカード型スライダーを実装し、一覧性と視認性を重視
- Recruit ページでは hover による簡易パララックスを取り入れ、風景画像の臨場感を演出

### 4. デザイン再現性とレスポンシブ対応

- リキッドレイアウトを前提とし、画面幅に応じて自然に伸縮するレイアウト設計
- ブレイクポイントは **900px** とし、メディアクエリによるレスポンシブ対応を実装
- CSS Grid / subgrid を使用し、複数デバイスや文字量の変化でも崩れにくい構造を意識
- PerfectPixel を用いて Figma デザインカンプとの再現性を確認

  &nbsp;

## 📂 Directory（主な構成）

```text
.
├── 404.php
├── archive-access.php
├── archive-product.php
├── footer.php
├── front-page.php
├── functions.php
├── header.php
├── index.php
├── page-company.php
├── page-contact.php
├── page-message.php
├── page-privacy.php
├── single-business.php
├── single-product.php
├── single.php
├── style.css
├── css
│   ├── editor-style.css
│   ├── style.css
│   ├── style.css.map
│   └── vendor
│       └── splide-core.min.css
├── img
├── js
│   ├── component
│   │   ├── cta-auto-scroll.js
│   │   ├── hamburger-menu.js
│   │   ├── product-single-gallery.js
│   │   ├── scroll-top-button.js
│   │   ├── switch-viewport.js
│   │   ├── toc-scrolltrigger.js
│   │   ├── top-kv-slider.js
│   │   └── top-product-slider.js
│   ├── main.js
│   └── vendor
│       ├── gsap.min.js
│       ├── ScrollToPlugin.min.js
│       ├── ScrollTrigger.min.js
│       ├── splide-extension-auto-scroll.min.js
│       └── splide.min.js
├── scss
│   ├── component
│   ├── foundation
│   ├── global
│   ├── layout
│   ├── page
│   │   ├── access
│   │   ├── business
│   │   ├── company
│   │   ├── contact
│   │   ├── message
│   │   ├── news
│   │   ├── product
│   │   └── top
│   ├── utility
│   ├── editor-style.scss
│   └── style.scss
└── template-parts
    ├── breadcrumb.php
    ├── loop-business.php
    ├── loop-news.php
    ├── loop-products.php
    ├── sidebar-news.php
    ├── subkv-archive.php
    ├── subkv-single-news.php
    └── subkv-single.php
```

## 💻 Development Environment（開発環境）

- Cursor
- SCSS / Live Sass Compiler
- JavaScript / ES Modules

&nbsp;

## ⚠️ Notes（注意事項）

- 本本サイトは学習目的で制作した架空サイトです。
- デザインおよびコンテンツは実在の企業・サービスとは関係ありません。

&nbsp;
