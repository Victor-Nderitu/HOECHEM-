'use client'

import { useState } from 'react'
import toast from 'react-hot-toast'

const initialForm = { name: '', email: '', phone: '', appointment_date: '', appointment_time: '', service: '', notes: '' }

export function AppointmentForm() {
  const [form, setForm] = useState(initialForm)
  const [loading, setLoading] = useState(false)

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    try {
      const response = await fetch('/api/forms/appointments', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      const result = await response.json()
      if (!response.ok) throw new Error(result.error)
      setForm(initialForm)
      toast.success('Appointment request sent. We will confirm your booking shortly.')
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Unable to book your appointment.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass = 'w-full rounded-xl border border-[#c5c6cf] px-4 py-3 text-sm outline-none transition-colors focus:border-[#006d38] focus:ring-2 focus:ring-[#006d38]/20'

  return <form onSubmit={submit} className="grid gap-5 rounded-2xl border border-[#e1e2e4] bg-white p-6 card-shadow md:grid-cols-2">
    <label className="grid gap-2 text-sm font-semibold text-[#45464e] md:col-span-2">Full name<input required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} className={inputClass} /></label>
    <label className="grid gap-2 text-sm font-semibold text-[#45464e]">Email address<input required type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} className={inputClass} /></label>
    <label className="grid gap-2 text-sm font-semibold text-[#45464e]">Phone number<input required type="tel" value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} className={inputClass} /></label>
    <label className="grid gap-2 text-sm font-semibold text-[#45464e]">Preferred date<input required min={new Date().toISOString().slice(0, 10)} type="date" value={form.appointment_date} onChange={(event) => setForm({ ...form, appointment_date: event.target.value })} className={inputClass} /></label>
    <label className="grid gap-2 text-sm font-semibold text-[#45464e]">Preferred time<input required type="time" value={form.appointment_time} onChange={(event) => setForm({ ...form, appointment_time: event.target.value })} className={inputClass} /></label>
    <label className="grid gap-2 text-sm font-semibold text-[#45464e] md:col-span-2">Service<select required value={form.service} onChange={(event) => setForm({ ...form, service: event.target.value })} className={inputClass}><option value="">Select a service</option><option value="Membership">Membership</option><option value="Savings">Savings</option><option value="Loans">Loans</option><option value="Account support">Account support</option></select></label>
    <label className="grid gap-2 text-sm font-semibold text-[#45464e] md:col-span-2">Notes (optional)<textarea value={form.notes} onChange={(event) => setForm({ ...form, notes: event.target.value })} rows={4} className={inputClass} placeholder="Tell us how we can help." /></label>
    <button disabled={loading} className="md:col-span-2 rounded-xl bg-[#006d38] px-5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#005229] disabled:cursor-not-allowed disabled:opacity-60">{loading ? 'Sending request…' : 'Request appointment'}</button>
  </form>
}
