import { NextRequest, NextResponse } from 'next/server'

/**
 * Captures every survey submission — including people who DON'T pay.
 * Those non-payers are your best objection-interview leads.
 *
 * For the validation sprint this just logs. To persist, wire one of:
 *  - a Google Sheet (via a webhook / Apps Script URL)
 *  - Airtable / Notion API
 *  - a row in a DB
 * Replace the console.log below with your forwarder.
 */
export async function POST(req: NextRequest) {
  let data: unknown
  try {
    data = await req.json()
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 })
  }

  // eslint-disable-next-line no-console
  console.log('[autari lead]', JSON.stringify(data))

  // TODO: forward `data` to your sheet/CRM/webhook here.

  return NextResponse.json({ ok: true })
}
