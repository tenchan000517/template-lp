"use client";

import { FadeIn, CountUp } from "@/components/animations";
import { sampleData } from "@/data/sample";

export default function StatsSection() {
  const { service } = sampleData;

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-[var(--color-primary-dark)] to-[var(--color-primary)] text-white">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-white/70 font-medium text-sm tracking-wider uppercase mb-3">
              Results
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              数字が証明する確かな実績
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {service.stats.map((stat, index) => (
            <FadeIn key={index} delay={index * 0.15}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[var(--color-accent-light)]">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-white/80 text-sm">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
