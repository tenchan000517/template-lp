"use client";

import { FadeIn } from "@/components/animations";
import CTAButton from "@/components/common/CTAButton";
import { sampleData } from "@/data/sample";

export default function ClosingCTASection() {
  const { cta, company, offer } = sampleData;

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-gradient-to-br from-[var(--color-primary-dark)] to-[var(--color-primary)] text-white"
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            まずは{company.cvType}から
            <br />
            お気軽にご相談ください
          </h2>

          {offer.incentive && (
            <p className="mt-6 text-lg text-[var(--color-accent-light)] font-medium">
              {offer.incentive}
            </p>
          )}

          <div className="mt-10">
            <CTAButton href="#" size="xl" variant="cta">
              {cta.buttonText}
            </CTAButton>
            <p className="mt-4 text-sm text-white/70">{cta.subText}</p>
          </div>

          {offer.guarantee && (
            <p className="mt-8 text-sm text-white/60">
              {offer.guarantee}
            </p>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
