# autari — validation landing page

A Next.js landing page to **test real demand** for autari AI employees. A conversational, one-question-per-screen **survey** (UX modelled on Typeform / IxDF survey guidance) captures qualifying answers, saves them to a **Google Sheet**, then offers a **fully-refundable Stripe deposit** to reserve a founding spot. No product is built — the page is the validation instrument.

Theme + save mechanism match the autari **partners** site: warm ember/cream palette, DM Sans, and a client-side POST to a Google Apps Script (works with a static export — no backend).

## Stack
Next.js 15 (App Router, static export) · React 19 · Tailwind 4 · framer-motion · lucide-react · DM Sans. Brand: Bark `#1A1208`, Ember `#C84B0F`, Terracotta `#E8A87C`, Cream `#F7F4EF`, Linen `#EDE8E0`.

## Run locally
```bash
npm install
cp .env.local.example .env.local   # add your Google Apps Script URL (optional in dev)
npm run dev                        # http://localhost:3000
```
Without the env var the survey still works and logs responses to the console.

## Save responses to your EXISTING partners spreadsheet
The full script is in **`google-apps-script.gs`**. It writes survey rows into a
dedicated **"Survey" tab** of the same Google Sheet you already use for the
partners form — no clash with the partners columns, everything in one file. It
**creates the tab + header columns itself** on the first submission.

1. Open your partners Google Sheet, copy its ID from the URL
   (`/spreadsheets/d/<ID>/edit`), and paste it into `SPREADSHEET_ID` in `google-apps-script.gs`.
2. Go to [script.google.com](https://script.google.com) → **New project** (a *standalone* script — leave the partners' bound script untouched). Paste the whole file.
3. **Deploy → New deployment → Web app** — "Execute as: Me", "Who has access: Anyone". Authorize (it needs access to your sheet), copy the `/exec` URL.
4. Put it in `.env.local` as `NEXT_PUBLIC_GOOGLE_SCRIPT_URL`, restart `npm run dev`.

Survey rows append to the **Survey** tab in this order: `submittedAt | role | firm | size | who | hours | cost | pain | tried | trust | email`. (Requests use `mode:"no-cors"`, so the browser can't read the response — expected; the row still lands. Open the `/exec` URL in a browser to confirm the endpoint is live.)

## Stripe deposit (Payment Links — no backend)
1. Stripe Dashboard → **Payment Links** → create one per role (one-time deposit, e.g. £99, collect email).
2. Paste each URL into `src/lib/constants.ts` → `ROLES[].paymentLink`.
3. The survey's final screen routes the chosen role to its link. Test card: `4242 4242 4242 4242`.
4. Add your refund policy text before going live.

## Edit the offer
- **Survey questions, roles, prices, FAQ, copy** → `src/lib/constants.ts`
- **Sections** → `src/components/sections/*`
- **Brand tokens** → `src/app/globals.css` (`@theme`)

## Deploy
Static export (`output: "export"`). `npm run build` → deploy the `out/` folder to Netlify/Vercel/any static host. Point a domain at it.

---
*Rule of the sprint: no autari product code until a stranger pays. This page is how you find that stranger.*
