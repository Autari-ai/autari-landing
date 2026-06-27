"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Check } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import { SURVEY, roleByTitle } from "@/lib/constants";
import { submitSurvey } from "@/lib/submitForm";
import type { SurveyResponse } from "@/types";

type Status = "asking" | "saving" | "done";

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
    await submitSurvey(updated);
    setStatus("done");
  }

  const chosenRole = roleByTitle(answers.role ?? "");

  return (
    <section id="survey" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6">
        <div className="text-center">
          <SectionLabel>60-SECOND SURVEY</SectionLabel>
          <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
            Tell us what you need.
          </h2>
        </div>

        <div className="mt-10 rounded-3xl bg-linen p-6 shadow-sm sm:p-10">
          {status !== "done" && (
            <>
              {/* progress */}
              <div className="mb-8">
                <div className="mb-2 flex items-center justify-between text-xs font-medium uppercase tracking-[0.08em] text-bark/40">
                  <span>
                    Question {Math.min(index + 1, total)} of {total}
                  </span>
                  <span>{progress}%</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-bark/10">
                  <motion.div
                    className="h-full rounded-full bg-ember"
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
                                className="w-full rounded-xl border border-bark/10 bg-cream px-4 py-3.5 text-bark placeholder:text-bark/30 transition-colors focus:border-ember focus:outline-none focus:ring-1 focus:ring-ember"
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
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-ember/10">
                <Check className="text-ember" size={28} />
              </div>
              <h3 className="mt-5 text-2xl font-bold tracking-[-0.02em]">
                You’re on the list.
              </h3>
              <p className="mx-auto mt-2 max-w-xs text-sm text-bark/60">
                Lock in your{" "}
                <strong className="text-bark">
                  {chosenRole?.title ?? "AI employee"}
                </strong>{" "}
                as a founding customer.
              </p>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
                <span className="rounded-full bg-cream px-3 py-1 text-xs font-medium text-bark">
                  £{chosenRole?.depositGBP} deposit
                </span>
                <span className="rounded-full bg-ember/10 px-3 py-1 text-xs font-medium text-ember">
                  Fully refundable
                </span>
                <span className="rounded-full bg-cream px-3 py-1 text-xs font-medium text-bark/60">
                  from £{chosenRole?.monthlyGBP}/mo
                </span>
              </div>

              <div className="mt-7">
                {chosenRole?.paymentLink ? (
                  <Button
                    href={chosenRole.paymentLink}
                    className="w-full py-4 text-sm sm:w-auto sm:px-12"
                  >
                    Reserve my spot · £{chosenRole.depositGBP}
                  </Button>
                ) : (
                  <p className="rounded-xl bg-cream px-4 py-3 text-sm text-bark/50">
                    We’ll email you to lock in your spot.
                  </p>
                )}
                <p className="mt-3 text-xs text-bark/40">
                  No charge until you confirm at launch.
                </p>
              </div>

              <p className="mt-8 text-[11px] text-bark/30">
                Autari Ltd · England &amp; Wales ·{" "}
                <a
                  href="https://find-and-update.company-information.service.gov.uk/company/17105724"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 transition-colors hover:text-bark/60"
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
          ? "border-ember bg-ember text-cream"
          : "border-bark/10 bg-cream text-bark hover:border-ember hover:bg-ember/5"
      } ${className}`}
    >
      {children}
    </button>
  );
}
