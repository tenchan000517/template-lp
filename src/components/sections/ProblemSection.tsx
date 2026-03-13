"use client";

import { FadeIn } from "@/components/animations";
import { ScrollRevealContainer, ScrollRevealItem } from "@/components/animations";
import { AlertCircle } from "lucide-react";
import { sampleData } from "@/data/sample";

export default function ProblemSection() {
  const { target } = sampleData;

  return (
    <section className="py-20 md:py-28 bg-[var(--color-bg-secondary)]">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-[var(--color-primary)] font-medium text-sm tracking-wider uppercase mb-3">
              Problem
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)]">
              こんなお悩みありませんか？
            </h2>
            <div className="section-divider mt-4" />
          </div>
        </FadeIn>

        <ScrollRevealContainer className="grid gap-5 max-w-3xl mx-auto">
          {target.problems.map((problem, index) => (
            <ScrollRevealItem key={index}>
              <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm border border-[var(--color-border-light)]">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                </div>
                <p className="text-[var(--color-text-primary)] text-lg leading-relaxed pt-1">
                  {problem}
                </p>
              </div>
            </ScrollRevealItem>
          ))}
        </ScrollRevealContainer>

        <FadeIn delay={0.4}>
          <p className="text-center mt-10 text-[var(--color-text-secondary)] text-lg">
            そのお悩み、<span className="font-bold text-[var(--color-primary)]">{sampleData.company.serviceName}</span>が解決します。
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
