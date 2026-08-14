'use client'

import { useState } from 'react'
import toast from 'react-hot-toast'

const initialForm = { name: '', email: '', phone: '' }

export function ClientRegistrationForm() {
  const [form, setForm] = useState(initialForm)
  const [loading, setLoading] = useState(false)

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    try {
      const response = await fetch('/api/forms/clients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const result = await response.json()
      if (!response.ok) throw new Error(result.error)
      setForm(initialForm)
      toast.success('Registration received. We will contact you shortly.')
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Unable to submit your registration.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass = 'w-full rounded-xl border border-[#c5c6cf] px-4 py-3 text-sm outline-none transition-colors focus:border-[#006d38] focus:ring-2 focus:ring-[#006d38]/20'

  return (
    <form onSubmit={submit} className="grid gap-4 rounded-2xl border border-[#e1e2e4] bg-white p-6 card-shadow sm:grid-cols-2">
      <div className="sm:col-span-2"><h2 className="text-xl font-bold text-[#00020d]">Start your membership registration</h2><p className="mt-1 text-sm text-[#45464e]">Share your contact details and our team will guide you through the next steps.</p></div>
      <label className="grid gap-2 text-sm font-semibold text-[#45464e] sm:col-span-2">Full name<input required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} className={inputClass} placeholder="Jane Wanjiku" /></label>
      <label className="grid gap-2 text-sm font-semibold text-[#45464e]">Email address<input required type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} className={inputClass} placeholder="jane@example.com" /></label>
      <label className="grid gap-2 text-sm font-semibold text-[#45464e]">Phone number<input required type="tel" value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} className={inputClass} placeholder="+254 700 000 000" /></label>
      <button disabled={loading} className="sm:col-span-2 inline-flex items-center justify-center rounded-xl bg-[#006d38] px-5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#005229] disabled:cursor-not-allowed disabled:opacity-60">{loading ? 'Submitting…' : 'Register interest'}</button>
    </form>
  )
}
