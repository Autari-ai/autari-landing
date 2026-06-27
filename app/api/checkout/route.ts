import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { getRole } from '@/lib/roles'

export async function POST(req: NextRequest) {
  const key = process.env.STRIPE_SECRET_KEY
  if (!key) {
    return NextResponse.json(
      { error: 'Payments not configured yet. Add STRIPE_SECRET_KEY to .env.local.' },
      { status: 500 },
    )
  }

  const stripe = new Stripe(key)

  let body: { roleSlug?: string; email?: string; answers?: Record<string, string> }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const role = getRole(body.roleSlug ?? '')
  if (!role) {
    return NextResponse.json({ error: 'Unknown role.' }, { status: 400 })
  }

  const origin = req.headers.get('origin') ?? 'http://localhost:3000'

  // Survey answers ride along as metadata so each payment is fully contextualised.
  const metadata: Record<string, string> = { role: role.slug }
  if (body.answers) {
    for (const [k, v] of Object.entries(body.answers)) {
      metadata[`q_${k}`] = String(v).slice(0, 480)
    }
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'gbp',
            product_data: {
              name: `autari founding reservation — ${role.title}`,
              description: 'Fully refundable deposit. Launching soon — you shape the build.',
            },
            unit_amount: role.depositGBP * 100,
          },
          quantity: 1,
        },
      ],
      customer_email: body.email || undefined,
      metadata,
      success_url: `${origin}/success`,
      cancel_url: `${origin}/cancel`,
    })

    return NextResponse.json({ url: session.url })
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Stripe error.'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
