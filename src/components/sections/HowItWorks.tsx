"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionBg from "@/components/ui/SectionBg";
import IndexMarker from "@/components/ui/IndexMarker";
import { STEPS } from "@/lib/constants";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative isolate py-24 sm:py-32">
      <SectionBg src="/media/bg-how.mp4" opacity={0.24} objectPosition="right center" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <SectionLabel>HOW IT WORKS</SectionLabel>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-bold tracking-[-0.03em] text-fga sm:text-5xl">
            From your problem to hands-off, in weeks.
          </h2>
        </AnimatedSection>

        <div className="relative mt-16 grid gap-6 sm:grid-cols-3">
          {/* connecting line */}
          <div className="pointer-events-none absolute left-0 right-0 top-16 hidden h-px bg-gradient-to-r from-transparent via-spark/30 to-transparent sm:block" />
          {STEPS.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 0.12}>
              <div className="glass glass-hover flex h-full flex-col rounded-3xl p-7">
                <IndexMarker n={step.number} total={STEPS.length} />
                <h3 className="mt-6 font-display text-xl font-bold text-fga">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-fga/60">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
