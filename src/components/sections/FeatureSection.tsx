"use client";

import { FadeIn } from "@/components/animations";
import { ScrollRevealContainer, ScrollRevealItem } from "@/components/animations";
import { Trophy, Zap, Headphones } from "lucide-react";
import { sampleData } from "@/data/sample";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  trophy: Trophy,
  zap: Zap,
  headphones: Headphones,
};

export default function FeatureSection() {
  const { service } = sampleData;

  return (
    <section className="py-20 md:py-28 bg-[var(--color-bg-secondary)]">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-[var(--color-primary)] font-medium text-sm tracking-wider uppercase mb-3">
              Features
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)]">
              選ばれる3つの理由
            </h2>
            <div className="section-divider mt-4" />
          </div>
        </FadeIn>

        <ScrollRevealContainer className="grid md:grid-cols-3 gap-8">
          {service.strengths.map((strength, index) => {
            const Icon = iconMap[strength.icon] || Trophy;
            return (
              <ScrollRevealItem key={index}>
                <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-[var(--color-border-light)] card-hover h-full">
                  <div className="w-16 h-16 rounded-2xl bg-[var(--color-primary)]/10 flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-[var(--color-primary)]" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">
                    {strength.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">
                    {strength.description}
                  </p>
                </div>
              </ScrollRevealItem>
            );
          })}
        </ScrollRevealContainer>
      </div>
    </section>
  );
}
