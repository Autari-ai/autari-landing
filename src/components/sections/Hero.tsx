"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { HERO } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center bg-cream pt-20">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <span className="inline-flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-ember" />
            </span>
            <SectionLabel>{HERO.label}</SectionLabel>
          </span>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h1 className="mt-6 max-w-3xl text-5xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            {HERO.headline}
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-bark/70 sm:text-lg">
            {HERO.subtext}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="#survey" className="text-sm px-8 py-4">
              {HERO.cta}
            </Button>
            <a
              href="#how-it-works"
              className="text-sm font-medium text-bark/60 underline underline-offset-4 transition-colors hover:text-bark"
            >
              {HERO.secondary}
            </a>
          </div>
          <p className="mt-5 text-xs text-bark/40">
            Early access · Fully refundable deposit · You shape the build
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
