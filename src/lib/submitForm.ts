import type { SurveyResponse } from "@/types";

// Same mechanism as the partners site: POST JSON to a Google Apps Script
// Web App, which appends a row to a Google Sheet. No backend required —
// works with a static export. Set NEXT_PUBLIC_GOOGLE_SCRIPT_URL in .env.local.
const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL ?? "";

export async function submitSurvey(
  data: SurveyResponse
): Promise<{ success: boolean }> {
  if (!GOOGLE_SCRIPT_URL) {
    // Not configured yet — log so nothing is silently lost in dev.
    // eslint-disable-next-line no-console
    console.warn("[autari] NEXT_PUBLIC_GOOGLE_SCRIPT_URL not set — survey:", data);
    return { success: true };
  }

  await fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ submittedAt: new Date().toISOString(), ...data }),
  });

  return { success: true };
}
