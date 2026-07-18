import type { FAQItem, Step, UseCase, Stat, SurveyQuestion } from "@/types";

export const BOOK_EMAIL = "noor@autari.co.uk";

/** Build a pre-filled mailto for "Book a call". */
export function bookACallHref(answers?: Record<string, string>): string {
  const subject = "Book a call — Autari automation";
  let body =
    "Hi Autari,\n\nI'd like to book a call about automating some of our work.\n\n";
  if (answers && Object.keys(answers).length) {
    body += "A bit about us:\n";
    const order = ["role", "firm", "size", "who", "hours", "cost", "pain", "tried", "trust"];
    for (const k of order) {
      if (answers[k]) body += `- ${k}: ${answers[k]}\n`;
    }
    body += "\n";
  }
  body += "Best,\n";
  return `mailto:${BOOK_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export const NAV_LINKS = [
  { label: "What we do", href: "#what-we-do" },
  { label: "How it works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

export const HERO = {
  label: "AUTOMATION, DONE FOR YOU",
  headline: "Get your time back.",
  subtext:
    "We automate the repetitive work your business does every day, invoices, data entry, reports, chasing updates, so your team stops doing it by hand.",
  cta: "Book a call",
  secondary: "See how it works",
};

// Floating glass stat chips over the hero (t22 / t28 / t38).
export const STATS: Stat[] = [
  { value: "40+", unit: "hrs/mo", label: "handed back to your team" },
  { value: "24/7", label: "runs on its own" },
  { value: "0", label: "manual steps left for you" },
];

// Tools it works inside (marquee) — broadens us past any single field.
export const TOOLS: string[] = [
  "Microsoft Teams",
  "Slack",
  "Jira",
  "Gmail",
  "Google Sheets",
  "QuickBooks",
  "Xero",
  "HubSpot",
  "Notion",
  "Outlook",
];

// The automation areas — the "What we do, across your business" grid.
export const USE_CASES: UseCase[] = [
  {
    slug: "finance",
    title: "Finance & bookkeeping",
    blurb: "Invoices, reconciliations, expense entry, and chasing late payments.",
    tools: "QuickBooks · Xero · Sheets",
  },
  {
    slug: "support",
    title: "Customer support",
    blurb: "First replies, ticket triage, FAQs, and following up so nothing slips.",
    tools: "Gmail · Slack · Zendesk",
  },
  {
    slug: "ops",
    title: "Ops & admin",
    blurb: "Data entry, scheduling, reporting, and the onboarding checklist.",
    tools: "Sheets · Notion · Teams",
  },
  {
    slug: "sales",
    title: "Sales & CRM",
    blurb: "Lead capture, keeping the CRM clean, follow-ups, and quotes.",
    tools: "HubSpot · Gmail",
  },
  {
    slug: "engineering",
    title: "Engineering & docs",
    blurb: "Draft review, drawing checks, and prepping documents.",
    tools: "Jira · Teams",
  },
  {
    slug: "custom",
    title: "Something else",
    blurb: "If your team repeats it every week, we can probably automate it.",
    tools: "Your stack",
  },
];

export const STEPS: Step[] = [
  {
    number: 1,
    title: "Tell us the process",
    description:
      "Book a call and walk us through the repetitive work you want gone. We learn how your business actually runs.",
  },
  {
    number: 2,
    title: "We build the automation",
    description:
      "Mapped to your tools and your rules. You see it working and sign off before it goes anywhere near your customers.",
  },
  {
    number: 3,
    title: "It runs on its own",
    description:
      "It handles the work day and night, and flags a person only when something genuinely needs a human decision.",
  },
];

// One question per screen (conversational). Field-agnostic. Email is last.
export const SURVEY: SurveyQuestion[] = [
  {
    id: "role",
    kind: "single",
    label: "What work would you love to stop doing by hand?",
    help: "Pick the one that eats the most time.",
    options: USE_CASES.map((u) => u.title),
  },
  {
    id: "firm",
    kind: "single",
    label: "What does your business do?",
    options: [
      "Agency / services",
      "Professional services",
      "E-commerce / retail",
      "SaaS / tech",
      "Construction / engineering",
      "Healthcare",
      "Finance",
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
    label: "Happy for software to handle it, with a person checking at first?",
    options: ["Yes", "Maybe, need to see it", "No"],
  },
  {
    id: "email",
    kind: "email",
    label: "Where should we reach you?",
    help: "Only to follow up about automating your work.",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How does this start?",
    answer:
      "With a quick call. You show us the repetitive work you want gone, we scope it, then we build the automation for your business. You see it working before it goes live.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Each automation runs with access only to what you explicitly grant it, and nothing more.",
  },
  {
    question: "How is this different from buying software?",
    answer:
      "Off-the-shelf tools make you do the setup and the work. We build the automation around your process and run it for you, done for you, not another dashboard to learn.",
  },
  {
    question: "What if it gets something wrong?",
    answer:
      "At first a person reviews the output, and the automation flags anything that needs a human decision. It gets more hands-off as it earns your trust.",
  },
  {
    question: "How much does it cost?",
    answer:
      "It depends on the work involved, so we price it on the call once we understand the process. Booking a call costs nothing and there’s no commitment.",
  },
];
