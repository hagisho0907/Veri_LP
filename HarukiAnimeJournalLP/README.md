# 概要
以下のURLのLPを完全に再現してほしい
https://harukianimejournal.my.canva.site

# 作業手順
・まずおおまかなUIとデザインを模倣したページ作りを行なってほしい
・文章も一言一句同じものでお願い
・リンク先は後から指定するので仮置きしてほしい
・固有の写真などは後からフォルダに入れて、指定するので、仮置きしてほしい・素材がほしい箇所は後から教えてほしい

# 技術構成
提案された以下の構成で作ってみて
Vercel向け静的LP技術構成

  推奨: Next.js 14 (静的エクスポート)

  Vercelとの相性を考慮すると、Next.jsの静的エクスポートが最適です：
  // next.config.js
  {
    output: 'export'
  }

  メリット:
  - Vercelとの完璧な統合
  - 自動的な画像最適化
  - ビルド時の最適化
  - 静的HTMLとして出力

  技術スタック:
  - Next.js 14 - 静的サイト生成
  - Tailwind CSS - スタイリング
  - Framer Motion - アニメーション（軽量版）
  - next/image - 画像最適化

  シンプルな構造
  app/
    page.tsx
    layout.tsx
    globals.css
  components/
    Hero.tsx
    Problem.tsx
    Reasons.tsx
    CTA.tsx

  デプロイ設定
  // vercel.json
  {
    "buildCommand": "npm run build",
    "outputDirectory": "out"
  }

# フォント
HarukiAnimeJournal:league spartan
THE ULTIMATE TOKYO ANIME GUIDE:Bebas Neue
その他は全て:TT Interphases

## セクション構成

現在のサイトは以下のセクション構成になっています：

1. **HeroNew** - メインヒーローセクション（カルーセルとBUY NOWボックス）
2. **RedBanner** - 赤いバナー
3. **PlanningSection** - プランニングセクション
4. **TroublesSection** - トラブルセクション  
5. **ThreeReasonsNew** - 3つの理由セクション
6. **CtaRed** - 赤いCTAセクション
7. **GlimpseSection** - グリンプスセクション
8. **ReadyToExplore** - 探索準備セクション
9. **AboutSection** - アバウトセクション
10. **LimitedSale** - 限定セールセクション
11. **ProductSummary** - 商品概要セクション
12. **TestimonialsNew** - 証言セクション
13. **FaqSection** - FAQセクション
14. **MessageSection** - メッセージセクション
15. **FinalCta** - 最終CTAセクション
16. **ContactSection** - コンタクトセクション

## 実装済み機能

### カードカルーセル
- 3Dアニメーション効果付きのカードスライダー
- 自動スライド（3秒間隔）と手動ナビゲーション
- レスポンシブデザイン（モバイル/デスクトップ最適化）
- 水平スクロール防止機能

### アナリティクス
- Google Analytics 4 統合
- カスタムイベントトラッキング
- 全CTAボタンでのコンバージョン追跡
