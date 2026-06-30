import type { FAQItem, Step, Role, SurveyQuestion } from "@/types";

export const NAV_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

export const HERO = {
  label: "AI EMPLOYEES · ALWAYS ON",
  headline: "Hire work, not headcount.",
  subtext:
    "Pick the role you need and your AI employee gets to work inside your tools. It does the job, posts its own updates, and only comes to you when it’s genuinely stuck. Like a junior teammate, at a fraction of the cost.",
  cta: "Start the 60-second survey",
  secondary: "See how it works",
};

export const STEPS: Step[] = [
  {
    number: 1,
    title: "Tell us the role",
    description:
      "Take the 60-second survey. Tell us the role you need and the work you want off your plate, and we learn how your firm runs today.",
  },
  {
    number: 2,
    title: "We build it to your firm",
    description:
      "Your standards, your tools (Microsoft Teams + Jira to start), your rules. Founding customers shape it.",
  },
  {
    number: 3,
    title: "It starts working",
    description:
      "It does the job, posts its own updates, and @mentions the right person only when it’s blocked.",
  },
];

// Roles drive the reserve step. depositGBP / monthlyGBP are EXAMPLE figures.
// paymentLink: paste a Stripe Payment Link per role (Dashboard → Payment Links).
export const ROLES: Role[] = [
  {
    slug: "draft-reviewer",
    title: "AI Draft Reviewer / Draftsman (Engineering)",
    depositGBP: 99,
    monthlyGBP: 149,
    paymentLink: "https://buy.stripe.com/bJe3cv1lvgzB2100fT4Vy00",
  },
  {
    slug: "bookkeeper",
    title: "AI Bookkeeper",
    depositGBP: 99,
    monthlyGBP: 99,
    paymentLink: "https://buy.stripe.com/7sY9AT7JTabddJI1jX4Vy01",
  },
  {
    slug: "support",
    title: "AI Support Agent",
    depositGBP: 99,
    monthlyGBP: 99,
    paymentLink: "https://buy.stripe.com/fZu00j0hr8354984w94Vy02",
  },
  {
    slug: "custom",
    title: "Something else",
    depositGBP: 99,
    monthlyGBP: 149,
    paymentLink: "https://buy.stripe.com/4gM4gz6FP2ILcFE8Mp4Vy03",
  },
];

export function roleByTitle(title: string): Role | undefined {
  return ROLES.find((r) => r.title === title) ?? ROLES.find((r) => r.slug === "custom");
}

// One question per screen (conversational). Personal question (email) is last.
export const SURVEY: SurveyQuestion[] = [
  {
    id: "role",
    kind: "single",
    label: "Which AI employee would help your business most?",
    help: "Pick the one that would take the most off your plate.",
    options: ROLES.map((r) => r.title),
  },
  {
    id: "firm",
    kind: "single",
    label: "What does your business do?",
    options: [
      "Structural engineering",
      "MEP / building services",
      "Civil engineering",
      "Architecture",
      "Other engineering",
      "Agency / services",
      "Other",
    ],
  },
  {
    id: "size",
    kind: "single",
    label: "How many people work there?",
    options: ["Just me", "2–10", "11–30", "31–100", "100+"],
  },
  {
    id: "who",
    kind: "single",
    label: "Who handles this work today?",
    options: [
      "A senior (expensive)",
      "A junior",
      "Outsourced / freelancer",
      "Me, the owner",
      "No one yet (it’s a gap)",
    ],
  },
  {
    id: "hours",
    kind: "single",
    label: "Roughly how many hours a week does it eat up?",
    options: ["<2", "2–5", "5–10", "10–20", "20+"],
  },
  {
    id: "cost",
    kind: "single",
    label: "Roughly what does that cost you per month?",
    options: ["<£500", "£500–1,500", "£1,500–4,000", "£4,000+", "Not sure"],
  },
  {
    id: "pain",
    kind: "scale",
    label: "How big a problem is this, honestly?",
    help: "1 = minor annoyance, 5 = real bottleneck.",
  },
  {
    id: "tried",
    kind: "yesno",
    label: "Have you tried to solve this before?",
  },
  {
    id: "trust",
    kind: "single",
    label: "Would you let an AI do it, with a human reviewing at first?",
    options: ["Yes", "Maybe, need to see it", "No"],
  },
  {
    id: "email",
    kind: "email",
    label: "Where should we reach you?",
    help: "We’ll only use this to follow up about your AI employee.",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Is it built yet?",
    answer:
      "It’s in early access. The role you reserve launches soon. We’re transparent: you’re a founding customer shaping it, and your deposit is fully refundable.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Each AI employee runs on its own, with access only to what you explicitly grant. Nothing more.",
  },
  {
    question: "How is this different from Copilot?",
    answer:
      "Copilot is an assistant you have to drive. An autari employee owns a task end-to-end and only comes to you when it’s blocked.",
  },
  {
    question: "What if it gets something wrong?",
    answer:
      "Early on, a human reviews its output. It improves as it learns your standards.",
  },
  {
    question: "Can I cancel?",
    answer:
      "Your deposit is fully refundable before launch. After launch it’s monthly, and you can cancel anytime.",
  },
];
