import { NextResponse } from 'next/server'
import { z } from 'zod'
import { createServerSupabaseClient } from '@/lib/supabase-server'

const schemas = {
  clients: z.object({
    name: z.string().trim().min(2, 'Enter your full name.').max(120),
    email: z.string().trim().email('Enter a valid email address.'),
    phone: z.string().trim().min(7, 'Enter a valid phone number.').max(30),
  }),
  contact: z.object({
    name: z.string().trim().min(2, 'Enter your full name.').max(120),
    email: z.string().trim().email('Enter a valid email address.'),
    phone: z.string().trim().max(30).optional(),
    subject: z.string().trim().min(2, 'Choose a subject.').max(160),
    message: z.string().trim().min(10, 'Please enter at least 10 characters.').max(2_000),
  }),
  appointments: z.object({
    name: z.string().trim().min(2, 'Enter your full name.').max(120),
    email: z.string().trim().email('Enter a valid email address.'),
    phone: z.string().trim().min(7, 'Enter a valid phone number.').max(30),
    appointment_date: z.string().date('Choose a valid date.'),
    appointment_time: z.string().regex(/^\d{2}:\d{2}$/, 'Choose a valid time.'),
    service: z.string().trim().min(2, 'Choose a service.').max(120),
    notes: z.string().trim().max(1_000).optional(),
  }),
}

const tableByForm = {
  clients: 'clients',
  contact: 'contact_messages',
  appointments: 'appointments',
} as const

export async function POST(request: Request, { params }: { params: Promise<{ form: string }> }) {
  const { form } = await params

  if (!(form in schemas)) {
    return NextResponse.json({ error: 'Unknown form.' }, { status: 404 })
  }

  const result = schemas[form as keyof typeof schemas].safeParse(await request.json())
  if (!result.success) {
    return NextResponse.json({ error: result.error.issues[0]?.message ?? 'Please check the form fields.' }, { status: 422 })
  }

  try {
    const supabase = createServerSupabaseClient()
    const table = tableByForm[form as keyof typeof tableByForm]
    const { error } = await (supabase.from(table) as any).insert(result.data)

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ success: true }, { status: 201 })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unable to submit the form.'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
