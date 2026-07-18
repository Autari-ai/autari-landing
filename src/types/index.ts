export type QuestionKind = "single" | "scale" | "yesno" | "email";

export interface SurveyQuestion {
  id: string;
  kind: QuestionKind;
  label: string;
  help?: string;
  options?: string[];
}

/** An automation area shown as a service card + survey option. */
export interface UseCase {
  slug: string;
  title: string;
  blurb: string;
  tools: string;
}

export interface Stat {
  value: string;
  unit?: string;
  label: string;
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

/** A completed survey: questionId -> answer, plus email. */
export type SurveyResponse = Record<string, string>;
