"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import { FAQ_ITEMS } from "@/lib/constants";

export default function FAQ() {
  return (
    <section id="faq" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <AnimatedSection>
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
            Questions.
          </h2>
        </AnimatedSection>

        <div className="mt-12 space-y-4">
          {FAQ_ITEMS.map((item, i) => (
            <AnimatedSection key={item.question} delay={i * 0.05}>
              <details className="group rounded-2xl bg-linen p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between font-bold marker:content-none">
                  {item.question}
                  <span className="ml-4 text-ember transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-bark/60">
                  {item.answer}
                </p>
              </details>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
