# autari landing — go-live runbook

Everything needed to take this from local code to **live on autari.co.uk**, collecting survey responses and refundable deposits. Steps marked 🔒 are external dashboards only you can do.

---

## 0. Local sanity check
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to out/ — must succeed before deploying
```

## 1. 🔒 Google Sheet (one endpoint for partners + survey)
Reuses your existing partners Apps Script + spreadsheet. The merged script keeps the
partners form working and routes survey rows to their own **"Survey" tab** (it
tells them apart by the `role` field survey payloads carry).

1. Open the partners Apps Script: partners Google Sheet → **Extensions → Apps Script**.
2. **Replace all the code** with **`google-apps-script.gs`** from this repo.
3. **Deploy → Manage deployments → Edit (pencil) the existing deployment → Version: New version → Deploy.** Keeps the **same `/exec` URL**. (Do NOT choose "New deployment" — that creates a different URL.)
4. Open the `/exec` URL in a browser — it should say *"autari survey endpoint is live."* (the old code wouldn't — that's your confirmation the new code is live).

## 2. 🔒 Stripe (refundable deposit)
1. [dashboard.stripe.com](https://dashboard.stripe.com) → **Payment Links** → create one per role (one-time deposit, e.g. £99, collect email + name). Add your refund policy text.
2. Paste each URL into `src/lib/constants.ts` → `ROLES[].paymentLink`.
3. Set your real `depositGBP` / `monthlyGBP` in the same file (currently example placeholders).
4. Commit + push.

## 3. 🔒 Deploy to Netlify
1. Push this repo to GitHub (done — see §6).
2. Netlify → **Add new site → Import an existing project** → pick this repo. Build/publish are read from `netlify.toml` (`npm run build` → `out/`).
3. Netlify → Site settings → Environment → add `NEXT_PUBLIC_GOOGLE_SCRIPT_URL` = the `/exec` URL from §1. Trigger a redeploy.
4. Note the generated `your-site-xxxx.netlify.app` URL and confirm the site works there.

## 4. 🔒 Point autari.co.uk at it (Cloudflare)
In Netlify → **Domain management** → add `autari.co.uk` and `www.autari.co.uk`.
In Cloudflare DNS **add** (set both **DNS only / grey cloud** so Netlify owns SSL):

| Type | Name | Target | Proxy |
|------|------|--------|-------|
| CNAME | `autari.co.uk` (apex) | `your-site-xxxx.netlify.app` | DNS only |
| CNAME | `www` | `your-site-xxxx.netlify.app` | DNS only |

If Cloudflare rejects a CNAME at the apex, use **A record `autari.co.uk → 75.2.60.5`** (Netlify IP).
**Do NOT touch the MX / TXT records** — those are email (Brevo / Cloudflare) and must stay.
**Confirm the apex loads the new landing before step 5.**

## 5. 🔒 Retire the partners site (destructive — confirmed)
Once the apex is verified live:
1. Cloudflare DNS → **delete** `partners.autari.co.uk CNAME → rainbow-kheer-aefbc8.netlify.app`. The partners site goes offline.
2. (Optional) In Netlify, unpublish/delete the old `rainbow-kheer-aefbc8` site so it's not reachable via its raw `.netlify.app` URL.
3. The partners **spreadsheet and Apps Script are unaffected** — only the web frontend is retired.

## 6. GitHub
Repo: **`Autari-ai/autari-landing`** (private). To push future changes:
```bash
git add -A
git commit -m "…"
git push
```

---

## The rule
**No autari product code until a stranger pays.** This page is how you find that stranger. When deposits come in: re-read `../Autari_ai_employees/docs/validation/` for the next move, and the parked build spec at `docs/superpowers/specs/2026-06-08-autari-ai-employee-platform-design.md`.
