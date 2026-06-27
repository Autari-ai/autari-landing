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

## Save responses to a Google Sheet (turnkey — same mechanism as partners)
The full script is in **`google-apps-script.gs`** and it **creates its own header columns** on the first submission — you don't set up the sheet manually.

1. Create a blank Google Sheet.
2. Extensions → **Apps Script**, delete the placeholder, paste all of `google-apps-script.gs`.
3. **Deploy → New deployment → Web app** — "Execute as: Me", "Who has access: Anyone". Authorize, copy the `/exec` URL.
4. Put it in `.env.local` as `NEXT_PUBLIC_GOOGLE_SCRIPT_URL`, restart `npm run dev`.

Submissions append rows in this order: `submittedAt | role | firm | size | who | hours | cost | pain | tried | trust | email`. (Requests use `mode:"no-cors"`, so the browser can't read the response — expected; the row still lands. Open the `/exec` URL in a browser to confirm the endpoint is live.)

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
