"use client";

import { FadeIn } from "@/components/animations";
import { ScrollRevealContainer, ScrollRevealItem } from "@/components/animations";
import { Quote, User } from "lucide-react";
import { sampleData } from "@/data/sample";

export default function TestimonialSection() {
  const { service } = sampleData;

  if (!service.testimonials || service.testimonials.length === 0) {
    return null;
  }

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-[var(--color-primary)] font-medium text-sm tracking-wider uppercase mb-3">
              Voice
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)]">
              お客様の声
            </h2>
            <div className="section-divider mt-4" />
          </div>
        </FadeIn>

        <ScrollRevealContainer className="grid md:grid-cols-3 gap-8">
          {service.testimonials.map((testimonial, index) => (
            <ScrollRevealItem key={index}>
              <div className="testimonial-card h-full flex flex-col">
                <Quote className="w-8 h-8 text-[var(--color-primary)]/20 mb-4" />
                <p className="text-[var(--color-text-secondary)] leading-relaxed flex-grow">
                  {testimonial.content}
                </p>
                <div className="flex items-center gap-3 mt-6 pt-4 border-t border-[var(--color-border-light)]">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-bg-secondary)] flex items-center justify-center">
                    <User className="w-5 h-5 text-[var(--color-text-muted)]" />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-[var(--color-text-primary)]">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-[var(--color-text-muted)]">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollRevealItem>
          ))}
        </ScrollRevealContainer>
      </div>
    </section>
  );
}
