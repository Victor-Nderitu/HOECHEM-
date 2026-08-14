'use client'

import { useEffect, useState } from 'react'
import apiClient from '@/lib/api'

type ContactMessage = { id: string; name: string; email: string; phone: string | null; subject: string; message: string; createdAt: string }

export function ContactInbox() {
  const [messages, setMessages] = useState<ContactMessage[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    void apiClient.get<ContactMessage[]>('/contact').then((response) => setMessages(response.data)).catch(() => setError('Messages will appear here once the backend is running and the database migration is applied.'))
  }, [])

  return <section className="rounded-2xl border border-[#e1e2e4]/50 bg-white p-6 shadow-sm"><div className="mb-5 flex items-center justify-between"><div><h2 className="font-bold text-[#00020d]">Member & contact messages</h2><p className="text-xs text-[#75777f]">Latest submissions for review</p></div><span className="rounded-full bg-[#E7F5EC] px-3 py-1 text-xs font-bold text-[#006d38]">{messages.length} received</span></div>{error ? <p className="text-sm text-[#75777f]">{error}</p> : messages.length === 0 ? <p className="text-sm text-[#75777f]">No messages yet.</p> : <div className="space-y-3">{messages.map((item) => <article key={item.id} className="rounded-xl border border-[#e1e2e4] p-4"><div className="flex flex-wrap justify-between gap-2"><h3 className="font-bold text-[#00020d]">{item.subject}</h3><time className="text-xs text-[#75777f]">{new Date(item.createdAt).toLocaleDateString()}</time></div><p className="mt-1 text-sm text-[#45464e]">{item.name} · {item.email}{item.phone ? ` · ${item.phone}` : ''}</p><p className="mt-2 text-sm text-[#45464e]">{item.message}</p></article>)}</div>}</section>
}
