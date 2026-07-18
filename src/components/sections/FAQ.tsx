"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionBg from "@/components/ui/SectionBg";
import { FAQ_ITEMS } from "@/lib/constants";

export default function FAQ() {
  return (
    <section id="faq" className="relative isolate py-24 sm:py-32">
      <SectionBg src="/media/bg-faq.mp4" opacity={0.22} objectPosition="left center" />
      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <AnimatedSection>
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-[-0.03em] text-fga sm:text-4xl">
            The honest answers.
          </h2>
        </AnimatedSection>

        <div className="mt-12 space-y-4">
          {FAQ_ITEMS.map((item, i) => (
            <AnimatedSection key={item.question} delay={i * 0.05}>
              <details className="group glass rounded-2xl p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-fga marker:content-none">
                  {item.question}
                  <span className="ml-4 text-spark transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-fga/60">
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
