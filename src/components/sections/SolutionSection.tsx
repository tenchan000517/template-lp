"use client";

import { FadeIn } from "@/components/animations";
import { sampleData } from "@/data/sample";

export default function SolutionSection() {
  const { service, company } = sampleData;

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-[var(--color-primary)] font-medium text-sm tracking-wider uppercase mb-3">
              Solution
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)]">
              <span className="text-[var(--color-primary)]">{company.serviceName}</span>とは
            </h2>
            <div className="section-divider mt-4" />
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
              {service.description}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
