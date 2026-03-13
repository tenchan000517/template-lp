"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/animations";
import { ChevronDown } from "lucide-react";
import { sampleData } from "@/data/sample";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 px-6 text-left"
      >
        <span className="font-medium text-[var(--color-text-primary)] pr-4">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-[var(--color-text-muted)]" />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-[var(--color-text-secondary)] leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const { faq } = sampleData;

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-[var(--color-primary)] font-medium text-sm tracking-wider uppercase mb-3">
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)]">
              よくある質問
            </h2>
            <div className="section-divider mt-4" />
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="bg-[var(--color-bg-secondary)] rounded-2xl overflow-hidden border border-[var(--color-border-light)]">
            {faq.map((item, index) => (
              <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
