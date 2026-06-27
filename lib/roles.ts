export type Question = {
  id: string
  label: string
  type: 'single' | 'scale' | 'yesno'
  options?: string[]
}

export type Role = {
  slug: string
  icon: string
  title: string
  tagline: string
  featured?: boolean
  /** Fully-refundable deposit in GBP. EXAMPLE numbers — set your real figures. */
  depositGBP: number
  /** Example founder monthly price (shown as a starting point only). */
  monthlyGBP: number
  survey: Question[]
}

// All prices are EXAMPLES (brand rule: always frame pricing as a starting point).
function commonSurvey(taskStem: string): Question[] {
  return [
    {
      id: 'firm',
      label: 'What does your firm do?',
      type: 'single',
      options: [
        'Structural engineering',
        'MEP / building services',
        'Civil engineering',
        'Architecture',
        'Other engineering',
        'Agency / services',
        'Other',
      ],
    },
    {
      id: 'size',
      label: 'How many people work there?',
      type: 'single',
      options: ['Just me', '2–10', '11–30', '31–100', '100+'],
    },
    {
      id: 'who',
      label: `Today, who ${taskStem}?`,
      type: 'single',
      options: [
        'A senior (expensive)',
        'A junior',
        'Outsourced / freelancer',
        'Me, the owner',
        "Nobody — it's a gap",
      ],
    },
    {
      id: 'hours',
      label: 'Roughly how many hours a week go into it?',
      type: 'single',
      options: ['<2', '2–5', '5–10', '10–20', '20+'],
    },
    {
      id: 'cost',
      label: 'Roughly what does that cost per month?',
      type: 'single',
      options: ['<£500', '£500–1,500', '£1,500–4,000', '£4,000+', 'Not sure'],
    },
    { id: 'pain', label: 'How big a problem is this, honestly?', type: 'scale' },
    {
      id: 'tried',
      label: 'Have you tried to fix or automate it before?',
      type: 'yesno',
    },
    {
      id: 'trust',
      label: 'Would you let an AI do it, with a human reviewing at first?',
      type: 'single',
      options: ['Yes', 'Maybe, need to see it', 'No'],
    },
  ]
}

export const roles: Role[] = [
  {
    slug: 'draft-reviewer',
    icon: '🛠',
    title: 'AI Draft Reviewer / Draftsman',
    tagline:
      'Reviews junior AutoCAD drafts against your standards before they reach a senior — or drafts the basics itself. Stop burning senior hours on basic corrections.',
    featured: true,
    depositGBP: 99,
    monthlyGBP: 149,
    survey: commonSurvey('reviews junior drafts'),
  },
  {
    slug: 'bookkeeper',
    icon: '📊',
    title: 'AI Bookkeeper',
    tagline:
      'Chases invoices, reconciles, updates Jira, prepares monthly reports — inside the tools you already use.',
    depositGBP: 99,
    monthlyGBP: 99,
    survey: commonSurvey('does the bookkeeping'),
  },
  {
    slug: 'support',
    icon: '🎧',
    title: 'AI Support Agent',
    tagline:
      'Triages tickets, drafts responses, escalates the hard ones. Never off.',
    depositGBP: 99,
    monthlyGBP: 99,
    survey: commonSurvey('handles support tickets'),
  },
  {
    slug: 'custom',
    icon: '✨',
    title: 'Something else — tell us the role',
    tagline:
      "Got a job the list doesn't cover? Describe it and we'll build an AI employee for it.",
    depositGBP: 99,
    monthlyGBP: 149,
    survey: commonSurvey('does that job'),
  },
]

export function getRole(slug: string): Role | undefined {
  return roles.find((r) => r.slug === slug)
}
