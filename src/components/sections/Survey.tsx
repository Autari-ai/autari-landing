"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Check } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionBg from "@/components/ui/SectionBg";
import { SURVEY, bookACallHref } from "@/lib/constants";
import { submitSurvey } from "@/lib/submitForm";
import type { SurveyResponse } from "@/types";

type Status = "asking" | "saving" | "done";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// Fire a GA4 event if analytics is loaded (no-op otherwise).
function track(event: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", event, params || {});
  }
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Options that should reveal a free-text box instead of just recording "Other".
function isOtherOption(opt: string) {
  return /^other\b/i.test(opt) || opt.toLowerCase() === "something else";
}

export default function Survey() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const [answers, setAnswers] = useState<SurveyResponse>({});
  const [status, setStatus] = useState<Status>("asking");
  const [emailInput, setEmailInput] = useState("");
  const [otherText, setOtherText] = useState("");
  const [error, setError] = useState("");
  const [started, setStarted] = useState(false);

  const q = SURVEY[index];
  const total = SURVEY.length;
  const progress = Math.round((index / total) * 100);

  function goNext(updated: SurveyResponse) {
    if (index < total - 1) {
      setDir(1);
      setIndex((i) => i + 1);
    } else {
      finish(updated);
    }
  }

  function goBack() {
    setError("");
    if (index > 0) {
      setDir(-1);
      setIndex((i) => i - 1);
    }
  }

  function choose(value: string) {
    if (!started) {
      track("survey_started");
      setStarted(true);
    }
    const updated = { ...answers, [q.id]: value };
    setAnswers(updated);
    setError("");
    if (isOtherOption(value)) {
      setOtherText(""); // reveal the free-text box; don't auto-advance
      return;
    }
    setTimeout(() => goNext(updated), 180);
  }

  function submitOther() {
    const txt = otherText.trim();
    if (!txt) {
      setError("Please add a little detail.");
      return;
    }
    const updated = { ...answers, [q.id]: txt }; // save what they typed
    setAnswers(updated);
    setError("");
    goNext(updated);
  }

  function submitEmail() {
    if (!EMAIL_RE.test(emailInput.trim())) {
      setError("Please enter a valid email.");
      return;
    }
    const updated = { ...answers, email: emailInput.trim() };
    setAnswers(updated);
    goNext(updated);
  }

  async function finish(updated: SurveyResponse) {
    setStatus("saving");
    track("survey_completed", { role: updated.role });
    await submitSurvey(updated);
    setStatus("done");
  }

  return (
    <section id="survey" className="relative isolate py-24 sm:py-32">
      <SectionBg src="/media/bg-survey.mp4" opacity={0.22} />
      <div className="aurora opacity-30" />
      <div className="relative z-10 mx-auto max-w-2xl px-6">
        <div className="text-center">
          <SectionLabel className="justify-center">60-SECOND SURVEY</SectionLabel>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-[-0.03em] text-fga sm:text-4xl">
            Not ready to talk yet? Tell us what eats your time.
          </h2>
        </div>

        <div className="glass-strong mt-10 rounded-3xl p-6 sm:p-10">
          {status !== "done" && (
            <>
              {/* progress */}
              <div className="mb-8">
                <div className="mb-2 flex items-center justify-between text-xs font-medium uppercase tracking-[0.08em] text-fga/40">
                  <span>
                    Question {Math.min(index + 1, total)} of {total}
                  </span>
                  <span>{progress}%</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full bg-spark"
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  />
                </div>
              </div>

              <div className="relative min-h-[320px]">
                <AnimatePresence mode="wait" custom={dir}>
                  <motion.div
                    key={q.id}
                    custom={dir}
                    initial={{ opacity: 0, x: dir * 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: dir * -40 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                  >
                    <h3 className="text-xl font-bold leading-snug sm:text-2xl">
                      {q.label}
                    </h3>
                    {q.help && (
                      <p className="mt-2 text-sm text-bark/50">{q.help}</p>
                    )}

                    <div className="mt-6">
                      {q.kind === "single" && (
                        <div className="flex flex-col gap-3">
                          {q.options!.map((opt) => (
                            <OptionButton
                              key={opt}
                              selected={answers[q.id] === opt}
                              onClick={() => choose(opt)}
                            >
                              {opt}
                            </OptionButton>
                          ))}

                          {isOtherOption(answers[q.id] ?? "") && (
                            <div className="mt-1 flex flex-col gap-3">
                              <input
                                type="text"
                                value={otherText}
                                onChange={(e) => setOtherText(e.target.value)}
                                onKeyDown={(e) =>
                                  e.key === "Enter" && submitOther()
                                }
                                placeholder="Tell us more. Type it here…"
                                autoFocus
                                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-fga placeholder:text-fga/30 transition-colors focus:border-spark focus:outline-none focus:ring-1 focus:ring-spark"
                              />
                              <Button
                                onClick={submitOther}
                                className="py-3.5 text-sm"
                              >
                                Continue →
                              </Button>
                            </div>
                          )}
                        </div>
                      )}

                      {q.kind === "yesno" && (
                        <div className="grid grid-cols-2 gap-3">
                          {["Yes", "No"].map((opt) => (
                            <OptionButton
                              key={opt}
                              selected={answers[q.id] === opt}
                              onClick={() => choose(opt)}
                              center
                            >
                              {opt}
                            </OptionButton>
                          ))}
                        </div>
                      )}

                      {q.kind === "scale" && (
                        <div className="flex gap-2 sm:gap-3">
                          {[1, 2, 3, 4, 5].map((n) => (
                            <OptionButton
                              key={n}
                              selected={answers[q.id] === String(n)}
                              onClick={() => choose(String(n))}
                              center
                              className="flex-1 py-4 text-lg"
                            >
                              {n}
                            </OptionButton>
                          ))}
                        </div>
                      )}

                      {q.kind === "email" && (
                        <div>
                          <input
                            type="email"
                            value={emailInput}
                            onChange={(e) => setEmailInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && submitEmail()}
                            placeholder="you@firm.com"
                            autoFocus
                            className="w-full rounded-xl border border-bark/10 bg-cream px-4 py-3.5 text-bark placeholder:text-bark/30 transition-colors focus:border-ember focus:outline-none focus:ring-1 focus:ring-ember"
                          />
                          <Button
                            onClick={submitEmail}
                            className="mt-4 w-full py-4 text-sm"
                          >
                            {status === "saving" ? "Saving…" : "Finish →"}
                          </Button>
                        </div>
                      )}
                    </div>

                    {error && (
                      <p className="mt-3 text-sm text-red-600">{error}</p>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {index > 0 && (
                <button
                  onClick={goBack}
                  className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.08em] text-bark/40 transition-colors hover:text-bark"
                >
                  <ArrowLeft size={14} /> Back
                </button>
              )}
            </>
          )}

          {status === "done" && (
            <div className="py-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-spark/15">
                <Check className="text-spark" size={28} />
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold tracking-[-0.02em] text-fga">
                Got it. Let’s talk.
              </h3>
              <p className="mx-auto mt-2 max-w-sm text-sm text-fga/60">
                Book a quick call and we’ll walk through automating{" "}
                <strong className="text-fga">
                  {answers.role?.toLowerCase() ?? "your busywork"}
                </strong>{" "}
                for your business. Your answers come with you.
              </p>

              <div className="mt-7">
                <Button
                  href={bookACallHref(answers)}
                  onClick={() => track("book_call_clicked", { from: "survey" })}
                  className="w-full py-4 text-sm sm:w-auto sm:px-12"
                >
                  Book a call
                </Button>
                <p className="mt-3 text-xs text-fga/40">
                  Free, no commitment.
                </p>
              </div>

              <p className="mt-8 text-[11px] text-fga/30">
                Autari Ltd · England &amp; Wales ·{" "}
                <a
                  href="https://find-and-update.company-information.service.gov.uk/company/17105724"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 transition-colors hover:text-fga/60"
                >
                  no. 17105724
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function OptionButton({
  children,
  selected,
  onClick,
  center,
  className = "",
}: {
  children: React.ReactNode;
  selected: boolean;
  onClick: () => void;
  center?: boolean;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-xl border px-4 py-3.5 text-sm font-medium transition-all duration-150 ${
        center ? "text-center" : "text-left"
      } ${
        selected
          ? "border-spark bg-spark text-ink"
          : "border-white/10 bg-white/[0.03] text-fga hover:border-spark/60 hover:bg-spark/10"
      } ${className}`}
    >
      {children}
    </button>
  );
}
