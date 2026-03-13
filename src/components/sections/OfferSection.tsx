"use client";

import { FadeIn } from "@/components/animations";
import CTAButton from "@/components/common/CTAButton";
import { Gift, Shield } from "lucide-react";
import { sampleData } from "@/data/sample";

export default function OfferSection() {
  const { offer, cta } = sampleData;

  return (
    <section className="py-20 md:py-28 bg-[var(--color-bg-secondary)]">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-[var(--color-primary)] font-medium text-sm tracking-wider uppercase mb-3">
              Offer
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)]">
              今だけの特別なご案内
            </h2>
            <div className="section-divider mt-4" />
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="bg-white rounded-2xl shadow-lg border border-[var(--color-border-light)] overflow-hidden">
            {/* Price */}
            {offer.showPrice && (
              <div className="bg-[var(--color-primary)] text-white text-center py-6 px-6">
                <p className="text-sm opacity-80 mb-1">料金</p>
                <p className="text-3xl md:text-4xl font-bold">{offer.price}</p>
              </div>
            )}

            <div className="p-8 space-y-6">
              {/* Incentive */}
              {offer.incentive && (
                <div className="flex items-start gap-4 bg-[var(--color-accent)]/5 rounded-xl p-5 border border-[var(--color-accent)]/20">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                    <Gift className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <p className="font-bold text-[var(--color-text-primary)]">特典</p>
                    <p className="text-[var(--color-text-secondary)] mt-1">{offer.incentive}</p>
                  </div>
                </div>
              )}

              {/* Guarantee */}
              {offer.guarantee && (
                <div className="flex items-start gap-4 bg-green-50 rounded-xl p-5 border border-green-100">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-[var(--color-text-primary)]">安心保証</p>
                    <p className="text-[var(--color-text-secondary)] mt-1">{offer.guarantee}</p>
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="text-center pt-4">
                <CTAButton href="#contact" size="xl" fullWidth>
                  {cta.buttonText}
                </CTAButton>
                <p className="mt-3 text-sm text-[var(--color-text-muted)]">{cta.subText}</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
