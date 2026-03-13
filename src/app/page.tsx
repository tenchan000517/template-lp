"use client";

import {
  HeroSection,
  ProblemSection,
  SolutionSection,
  FeatureSection,
  StatsSection,
  TestimonialSection,
  OfferSection,
  FAQSection,
  ClosingCTASection,
} from "@/components/sections";
import FloatingCTA from "@/components/common/FloatingCTA";
import Footer from "@/components/common/Footer";

export default function LandingPage() {
  return (
    <main>
      {/* 1. ファーストビュー — キャッチコピー + CTA + 実績数字 */}
      <HeroSection />

      {/* 2. 課題提起 — ターゲットの悩みに共感 */}
      <ProblemSection />

      {/* 3. 解決策提示 — サービスで解決できる理由 */}
      <SolutionSection />

      {/* 4. 特徴・強み — 3カラムで訴求 */}
      <FeatureSection />

      {/* 5. 実績・数字 — 社会的証明 */}
      <StatsSection />

      {/* 6. お客様の声 — テスティモニアル */}
      <TestimonialSection />

      {/* 7. 料金/オファー — 特典・限定性 */}
      <OfferSection />

      {/* 8. よくある質問 — FAQ */}
      <FAQSection />

      {/* 9. 最終CTA — クロージング */}
      <ClosingCTASection />

      {/* フッター */}
      <Footer />

      {/* モバイル用固定CTAバー */}
      <FloatingCTA />
    </main>
  );
}
