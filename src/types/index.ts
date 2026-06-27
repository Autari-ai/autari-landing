export type QuestionKind = "single" | "scale" | "yesno" | "email";

export interface SurveyQuestion {
  id: string;
  kind: QuestionKind;
  label: string;
  help?: string;
  options?: string[];
}

export interface Role {
  slug: string;
  title: string;
  /** Fully-refundable deposit in GBP (example — set your real figure). */
  depositGBP: number;
  /** Example founder monthly price (starting point only). */
  monthlyGBP: number;
  /** Stripe Payment Link URL for this role's deposit. */
  paymentLink: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
}

/** A completed survey: questionId -> answer, plus email + chosen role. */
export type SurveyResponse = Record<string, string>;
