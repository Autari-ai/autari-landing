"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import { STEPS } from "@/lib/constants";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-linen py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <SectionLabel>HOW IT WORKS</SectionLabel>
          <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
            Built to fit, working in weeks.
          </h2>
        </AnimatedSection>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {STEPS.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-2xl bg-cream p-6 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ember text-sm font-bold text-cream">
                  {step.number}
                </div>
                <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-bark/60">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <p className="mx-auto mt-12 max-w-2xl rounded-2xl border border-bark/10 bg-cream p-5 text-center text-sm leading-relaxed text-bark/70">
            autari is in early access. The role you reserve is launching soon, and
            your deposit is <strong className="text-bark">100% refundable</strong>{" "}
            if we don’t deliver. You’re funding and shaping something built for
            you, not buying a finished box.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
