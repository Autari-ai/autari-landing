"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionBg from "@/components/ui/SectionBg";

export default function Problem() {
  return (
    <section className="relative isolate overflow-hidden py-28 sm:py-40">
      <SectionBg src="/media/bg-problem.mp4" opacity={0.5} overlay="bg-ink/45" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <AnimatedSection>
          <SectionLabel className="justify-center">THE REAL COST</SectionLabel>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-3xl font-bold leading-[1.1] tracking-[-0.03em] text-fga text-glow sm:text-5xl">
            Your team didn’t sign up to do the same tasks over and over.
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <p className="mx-auto mt-6 max-w-xl text-fga/70">
            Copy-pasting between tools, re-keying data, chasing the same updates,
            sending the same replies. It’s quiet, it’s constant, and it adds up to
            days every month. We take it off their plate for good.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
