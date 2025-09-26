# 実装ガイド：コンベア式カルーセル & スティッキーCTA

このドキュメントでは、今回実装した2つの機能を他プロジェクトに移植する方法を説明します。

## 📋 目次

1. [コンベア式カルーセル](#1-コンベア式カルーセル)
2. [スティッキーCTA](#2-スティッキーcta)
3. [必要な依存関係](#3-必要な依存関係)

---

## 1. コンベア式カルーセル

### 概要
横に流れるベルトコンベアのように、画像が自動的にスクロールするカルーセル機能です。

### 特徴
- 無限ループアニメーション
- ホバー時一時停止
- レスポンシブ対応
- CSS-in-JSによるスタイリング

### 実装手順

#### 1.1 必要な依存関係
```bash
npm install framer-motion next styled-jsx
```

#### 1.2 コンポーネントファイルの作成

**ファイル名**: `components/ConveyorCarousel.tsx`

```tsx
'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface CarouselItem {
  src: string
  alt: string
}

interface ConveyorCarouselProps {
  images: CarouselItem[]
  sectionId?: string
  title?: string
  description?: string
  backgroundColor?: string
  itemWidth?: {
    mobile: number
    desktop: number
  }
  animationDuration?: number
}

export default function ConveyorCarousel({
  images,
  sectionId = 'carousel-section',
  title = 'Gallery',
  description = 'Check out our collection',
  backgroundColor = 'bg-gray-50',
  itemWidth = { mobile: 300, desktop: 400 },
  animationDuration = 30
}: ConveyorCarouselProps) {
  // Duplicate images for seamless loop
  const allImages = [...images, ...images]

  return (
    <section id={sectionId} className={`${backgroundColor} py-16 lg:py-24 overflow-hidden`}>
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            {title}
          </h2>
          <p className="text-gray-600 text-lg">
            {description}
          </p>
        </motion.div>
      </div>

      {/* Conveyor Belt Container */}
      <div className="relative w-full overflow-hidden">
        <div className="conveyor-wrapper">
          <div className="conveyor-belt">
            {allImages.map((image, index) => (
              <div
                key={index}
                className="conveyor-item"
              >
                <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg bg-white">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="400px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .conveyor-wrapper {
          display: flex;
          align-items: center;
          position: relative;
          width: 100%;
          height: 100%;
        }

        .conveyor-belt {
          display: flex;
          gap: 2rem;
          animation: scroll ${animationDuration}s linear infinite;
          width: fit-content;
          padding: 0 2rem;
        }

        .conveyor-item {
          flex-shrink: 0;
          width: ${itemWidth.mobile}px;
        }

        @media (min-width: 768px) {
          .conveyor-item {
            width: ${itemWidth.desktop}px;
          }
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .conveyor-belt:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
```

#### 1.3 使用方法

```tsx
// pages/index.tsx または app/page.tsx
import ConveyorCarousel from '@/components/ConveyorCarousel'

const images = [
  { src: '/images/image1.jpg', alt: 'Image 1' },
  { src: '/images/image2.jpg', alt: 'Image 2' },
  { src: '/images/image3.jpg', alt: 'Image 3' },
  { src: '/images/image4.jpg', alt: 'Image 4' }
]

export default function HomePage() {
  return (
    <main>
      <ConveyorCarousel
        images={images}
        sectionId="my-carousel"
        title="Our Gallery"
        description="Check out our amazing collection"
        backgroundColor="bg-blue-50"
        itemWidth={{ mobile: 250, desktop: 350 }}
        animationDuration={25}
      />
    </main>
  )
}
```

### カスタマイズオプション

| プロパティ | 型 | デフォルト | 説明 |
|-----------|----|-----------|----|
| `images` | `CarouselItem[]` | 必須 | 表示する画像配列 |
| `sectionId` | `string` | `'carousel-section'` | セクションのHTML ID |
| `title` | `string` | `'Gallery'` | セクションタイトル |
| `description` | `string` | `'Check out our collection'` | セクション説明 |
| `backgroundColor` | `string` | `'bg-gray-50'` | 背景色（Tailwind CSS クラス） |
| `itemWidth` | `object` | `{mobile: 300, desktop: 400}` | アイテム幅設定 |
| `animationDuration` | `number` | `30` | アニメーション時間（秒） |

---

## 2. スティッキーCTA

### 概要
ページ下部に固定表示され、特定のセクションに到達すると自動で非表示になるCTAボタンです。

### 特徴
- Intersection Observer APIによる精密な表示制御
- レスポンシブ対応
- アニメーション付き表示/非表示
- アクセシビリティ対応

### 実装手順

#### 2.1 コンポーネントファイルの作成

**ファイル名**: `components/StickyCTA.tsx`

```tsx
'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

interface StickyCTAProps {
  title?: string
  description?: string
  buttonText?: string
  buttonUrl: string
  price?: string
  hideAtSectionId?: string
  trackingId?: string
  onButtonClick?: () => void
}

export default function StickyCTA({
  title = "Ready to Get Started?",
  description = "Join thousands of satisfied customers today!",
  buttonText = "Get Started",
  buttonUrl,
  price = "$29.99",
  hideAtSectionId = "about-section",
  trackingId,
  onButtonClick
}: StickyCTAProps) {
  const [isVisible, setIsVisible] = useState(true)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const targetSectionRef = useRef<Element | null>(null)

  useEffect(() => {
    const findTargetSection = () => {
      const targetSection = document.getElementById(hideAtSectionId)
      if (targetSection) {
        targetSectionRef.current = targetSection
        setupObserver()
      } else {
        // Retry after a delay if section not found
        setTimeout(findTargetSection, 500)
      }
    }

    const setupObserver = () => {
      if (!targetSectionRef.current) return

      // Clean up existing observer
      if (observerRef.current) {
        observerRef.current.disconnect()
      }

      // Create new observer
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Hide CTA when target section becomes visible
              setIsVisible(false)
            } else {
              // Show CTA when target section is not visible
              const rect = entry.boundingClientRect
              if (rect.top > 0) {
                // Target section is below viewport, show CTA
                setIsVisible(true)
              } else {
                // Target section is above viewport, hide CTA
                setIsVisible(false)
              }
            }
          })
        },
        {
          // Trigger when target section starts entering viewport
          rootMargin: '0px 0px -50% 0px',
          threshold: 0
        }
      )

      // Start observing
      observerRef.current.observe(targetSectionRef.current)
    }

    // Start the process
    findTargetSection()

    // Cleanup function
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [hideAtSectionId])

  const handleClick = () => {
    // Facebook Pixel tracking (if tracking ID provided)
    if (trackingId && typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'InitiateCheckout', {
        value: parseFloat(price.replace('$', '')),
        currency: 'USD',
        content_type: 'product',
        content_ids: [trackingId]
      })
    }

    // Custom click handler
    if (onButtonClick) {
      onButtonClick()
    }
  }

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          key="sticky-cta"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-white via-white to-transparent"
        >
          <div className="container mx-auto max-w-4xl">
            <div className="bg-white rounded-lg shadow-2xl p-4 md:p-6 border border-gray-100">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left">
                  <p className="text-lg md:text-xl font-bold text-gray-800 mb-1">
                    {title}
                  </p>
                  <p className="text-sm md:text-base text-gray-600">
                    {description} {price && `for just ${price}!`}
                  </p>
                </div>
                <Link
                  href={buttonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 text-lg whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  onClick={handleClick}
                >
                  {buttonText}
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Facebook Pixel用の型定義
declare global {
  interface Window {
    fbq?: any
  }
}
```

#### 2.2 使用方法

```tsx
// pages/index.tsx または app/page.tsx
import StickyCTA from '@/components/StickyCTA'

export default function HomePage() {
  return (
    <>
      <main>
        {/* Your page content */}
        <section id="hero">Hero Section</section>
        <section id="features">Features Section</section>
        <section id="about">About Section</section>
        <section id="contact">Contact Section</section>
      </main>
      
      {/* Sticky CTA - Hide when "about" section becomes visible */}
      <StickyCTA
        title="Ready to Transform Your Business?"
        description="Get lifetime access to our premium toolkit"
        buttonText="Get Instant Access"
        buttonUrl="https://checkout.stripe.com/your-checkout-url"
        price="$49.99"
        hideAtSectionId="about"
        trackingId="your-product-id"
        onButtonClick={() => {
          console.log('CTA button clicked!')
          // カスタムトラッキングやアナリティクス
        }}
      />
    </>
  )
}
```

### カスタマイズオプション

| プロパティ | 型 | デフォルト | 説明 |
|-----------|----|-----------|----|
| `title` | `string` | `"Ready to Get Started?"` | CTAのメインタイトル |
| `description` | `string` | `"Join thousands of satisfied customers today!"` | CTA説明文 |
| `buttonText` | `string` | `"Get Started"` | ボタンテキスト |
| `buttonUrl` | `string` | 必須 | ボタンのリンク先URL |
| `price` | `string` | `"$29.99"` | 価格表示 |
| `hideAtSectionId` | `string` | `"about-section"` | 非表示になるセクションのID |
| `trackingId` | `string` | `undefined` | Facebook Pixelトラッキング用ID |
| `onButtonClick` | `function` | `undefined` | ボタンクリック時のカスタム処理 |

#### 2.3 重要な注意点

1. **セクションIDの設定**: 非表示にしたいセクションに必ずIDを設定してください
```tsx
<section id="about-section">
  {/* About content */}
</section>
```

2. **Facebook Pixelの設定**: トラッキングを使用する場合は、事前にPixelを設定してください
```html
<!-- head.htmlまたはlayout.tsx -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

---

## 3. 必要な依存関係

### 3.1 NPMパッケージ

```json
{
  "dependencies": {
    "framer-motion": "^11.0.0",
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "styled-jsx": "^5.1.7"
  }
}
```

### 3.2 インストールコマンド

```bash
npm install framer-motion styled-jsx
# または
yarn add framer-motion styled-jsx
```

### 3.3 TypeScript設定（必要に応じて）

```json
// tsconfig.json
{
  "compilerOptions": {
    "jsx": "preserve",
    "plugins": [
      {
        "name": "styled-jsx/typescript"
      }
    ]
  }
}
```

---

## 4. トラブルシューティング

### 4.1 よくある問題

#### Q: カルーセルが動かない
**A**: 以下を確認してください
- `styled-jsx`がインストールされているか
- 画像パスが正しいか
- `framer-motion`のバージョンが対応しているか

#### Q: スティッキーCTAが非表示にならない
**A**: 以下を確認してください
- 対象セクションにIDが設定されているか
- IDが正しく指定されているか
- コンソールでエラーが出ていないか

#### Q: Next.js 13+ App Routerで動かない
**A**: 以下を確認してください
- コンポーネントに`'use client'`が追加されているか
- `next/image`を使用しているか

### 4.2 パフォーマンス最適化

1. **画像最適化**: Next.jsの`Image`コンポーネントを必ず使用
2. **遅延読み込み**: 大量の画像がある場合は遅延読み込みを実装
3. **アニメーション**: `will-change`プロパティを適切に設定

---

## 5. ライセンスとクレジット

このコードは、以下の条件で使用可能です：
- 商用・非商用問わず自由に使用可能
- 改変・配布可能
- クレジット表記は任意

**Generated with [Claude Code](https://claude.ai/code)**

---

## 6. サポート

実装に関する質問や問題がある場合は、以下を参考にしてください：

- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Intersection Observer API](https://developer.mozilla.org/docs/Web/API/Intersection_Observer_API)

実装時は、必ずローカル環境でテストを行い、期待通りの動作を確認してから本番環境にデプロイしてください。