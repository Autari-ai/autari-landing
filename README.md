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

## Deploy to autari.co.uk (Netlify + Cloudflare)
Static export (`output: "export"`) + `netlify.toml` is included (publishes `out/`).

**1. Deploy to Netlify**
- Push this repo to GitHub, then Netlify → "Add new site" → import it. Build/publish are read from `netlify.toml`.
- Add env var in Netlify → Site settings → Environment: `NEXT_PUBLIC_GOOGLE_SCRIPT_URL`.
- Note the generated site name, e.g. `your-site-1234.netlify.app`.

**2. Add the custom domain in Netlify**
- Netlify → Domain management → Add domain → `autari.co.uk` (and `www.autari.co.uk`).

**3. Cloudflare DNS — point the apex at Netlify** (do NOT touch the MX/TXT email records)
Add two records (set both to **DNS only / grey cloud** so Netlify manages SSL, like the `partners` record):

| Type  | Name | Target | Proxy |
|-------|------|--------|-------|
| CNAME | `autari.co.uk` (apex — Cloudflare flattens it) | `your-site-1234.netlify.app` | DNS only |
| CNAME | `www` | `your-site-1234.netlify.app` | DNS only |

(If Cloudflare won't accept a CNAME at the apex, use an A record `autari.co.uk → 75.2.60.5` instead — Netlify's load-balancer IP.)

**Leave `partners.autari.co.uk` alone** unless you intend to take the partners site offline — the apex and that subdomain are independent.

---
*Rule of the sprint: no autari product code until a stranger pays. This page is how you find that stranger.*
