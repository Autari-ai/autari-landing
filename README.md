# autari — validation landing page

A Next.js landing page to **test real demand** for autari AI employees: multi-role "doors", a short multiple-choice survey per role, and a **fully-refundable Stripe deposit** as the call to action. The page is the validation instrument — no product is built yet.

## Stack
Next.js 14 (App Router) · TypeScript · Tailwind · Stripe Checkout. Brand: Pine `#0E7C66`, Spark `#19D3A2`, Ink `#14181F`, Mist `#F5F7F6`, Fog `#E4E9E7`; Space Grotesk + Inter.

## Run locally
```bash
npm install
cp .env.local.example .env.local   # then paste your Stripe TEST secret key
npm run dev                         # http://localhost:3000
```
Without a Stripe key the page still runs and captures leads; the Reserve button just reports "payments not configured".

## Stripe
1. Create a Stripe account → Developers → API keys → copy the **test** secret key into `.env.local` as `STRIPE_SECRET_KEY`.
2. The deposit amount per role lives in `lib/roles.ts` (`depositGBP`). Edit roles/prices/surveys there — single source of truth.
3. Checkout is created server-side in `app/api/checkout/route.ts`. Survey answers + email ride along as session metadata, so every payment is fully contextualised.
4. Test card: `4242 4242 4242 4242`, any future expiry, any CVC.
5. Go live: swap to live keys, set a real refund policy, and (optional) add a webhook to confirm payments.

## Leads (non-payers too)
`app/api/lead/route.ts` logs every survey submission — including people who choose "keep me posted". Those are your objection-interview leads. Wire it to a Google Sheet / Airtable / DB by replacing the `console.log`.

## Edit the offer
- **Roles, prices, surveys** → `lib/roles.ts`
- **Hero / copy** → `components/*.tsx`
- **Brand tokens** → `tailwind.config.ts`

## Deploy
Vercel (easiest): push this repo, import, add `STRIPE_SECRET_KEY` env var, point `autari.com` at it.

---
*Rule of the sprint: no autari product code until a stranger pays. This page is how you find that stranger.*
