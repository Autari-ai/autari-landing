"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import SectionBg from "@/components/ui/SectionBg";
import { bookACallHref, BOOK_EMAIL } from "@/lib/constants";

export default function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden py-28 sm:py-40">
      <SectionBg src="/media/bg-cta.mp4" opacity={0.42} />
      <div className="aurora opacity-50" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <AnimatedSection>
          <h2 className="mx-auto max-w-2xl font-display text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-fga text-glow sm:text-6xl">
            Let’s take the busywork off your plate.
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.12}>
          <p className="mx-auto mt-5 max-w-lg text-fga/60">
            Book a call and tell us what your team keeps doing by hand. We’ll show
            you what we can automate. Free, no commitment.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className="mt-9 flex flex-col items-center gap-4">
            <Button href={bookACallHref()} className="px-10 py-4 text-sm">
              Book a call
            </Button>
            <a
              href={`mailto:${BOOK_EMAIL}`}
              className="text-sm text-fga/50 underline underline-offset-4 transition-colors hover:text-fga"
            >
              or email {BOOK_EMAIL}
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
