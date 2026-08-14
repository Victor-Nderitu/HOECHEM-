'use client'

import { useState } from 'react'
import Link from 'next/link'
import toast from 'react-hot-toast'
import apiClient, { getErrorMessage } from '@/lib/api'

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await apiClient.post('/contact', form)
      setSubmitted(true)
      toast.success('Message sent! We\'ll get back to you within 24 hours.')
    } catch (err) {
      toast.error(getErrorMessage(err))
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-white px-4 md:px-16 py-16 max-w-[1200px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E7F5EC] text-[#006d38] text-xs font-bold tracking-wide uppercase mb-6">
            <span className="material-symbols-outlined text-sm">mail</span>
            GET IN TOUCH
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#00020d] tracking-tight mb-4">
            Contact <span className="text-[#006d38]">Us</span>
          </h1>
          <p className="text-lg text-[#45464e] leading-relaxed">
            We&apos;re here to help. Send us a message and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-[#f2f4f6] rounded-2xl p-6">
              <div className="w-12 h-12 rounded-full bg-[#EAF0FA] flex items-center justify-center text-[#0b1b3f] mb-4">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              </div>
              <h3 className="font-bold text-[#00020d] mb-1">Our Office</h3>
              <p className="text-[#45464e] text-sm">Nairobi, Kenya</p>
            </div>
            <div className="bg-[#f2f4f6] rounded-2xl p-6">
              <div className="w-12 h-12 rounded-full bg-[#E7F5EC] flex items-center justify-center text-[#006d38] mb-4">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
              </div>
              <h3 className="font-bold text-[#00020d] mb-1">Phone</h3>
              <a href="tel:+254700000000" className="text-[#006d38] text-sm hover:underline">+254 700 000 000</a>
            </div>
            <div className="bg-[#f2f4f6] rounded-2xl p-6">
              <div className="w-12 h-12 rounded-full bg-[#FFF8E8] flex items-center justify-center text-[#b27a01] mb-4">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
              </div>
              <h3 className="font-bold text-[#00020d] mb-1">Email</h3>
              <a href="mailto:info@hoechemsacco.com" className="text-[#006d38] text-sm hover:underline">info@hoechemsacco.com</a>
            </div>
            <div className="bg-[#0b1b3f] rounded-2xl p-6 text-white">
              <h3 className="font-bold mb-2">Office Hours</h3>
              <p className="text-[#dae2ff] text-sm">Mon–Fri: 8:00 AM – 5:00 PM</p>
              <p className="text-[#dae2ff] text-sm">Saturday: 9:00 AM – 1:00 PM</p>
              <p className="text-[#7684ae] text-sm mt-2">Closed on Sundays & Public Holidays</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-8 card-shadow border border-[#e1e2e4]/50">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center">
                <div className="w-20 h-20 rounded-full bg-[#E7F5EC] flex items-center justify-center text-[#006d38] mb-6">
                  <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                </div>
                <h3 className="text-2xl font-bold text-[#00020d] mb-3">Message Sent!</h3>
                <p className="text-[#45464e] mb-6">Thank you for reaching out. Our team will respond within 24 hours.</p>
                <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }) }}
                  className="text-[#006d38] font-semibold text-sm hover:underline">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-[#00020d] mb-6">Send a Message</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-[#45464e] uppercase tracking-wide mb-2">Full Name *</label>
                    <input type="text" required value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-[#c5c6cf] rounded-xl text-sm focus:border-[#006d38] focus:ring-2 focus:ring-[#006d38]/20 outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#45464e] uppercase tracking-wide mb-2">Email Address *</label>
                    <input type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border border-[#c5c6cf] rounded-xl text-sm focus:border-[#006d38] focus:ring-2 focus:ring-[#006d38]/20 outline-none transition-colors" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-[#45464e] uppercase tracking-wide mb-2">Phone Number</label>
                    <input type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
                      placeholder="+254 700 000 000"
                      className="w-full px-4 py-3 border border-[#c5c6cf] rounded-xl text-sm focus:border-[#006d38] focus:ring-2 focus:ring-[#006d38]/20 outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#45464e] uppercase tracking-wide mb-2">Subject *</label>
                    <select required value={form.subject} onChange={e => setForm({...form, subject: e.target.value})}
                      className="w-full px-4 py-3 border border-[#c5c6cf] rounded-xl text-sm focus:border-[#006d38] focus:ring-2 focus:ring-[#006d38]/20 outline-none transition-colors bg-white">
                      <option value="">Select a topic</option>
                      <option>Membership Inquiry</option>
                      <option>Loan Information</option>
                      <option>Savings Account</option>
                      <option>Account Issues</option>
                      <option>General Inquiry</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#45464e] uppercase tracking-wide mb-2">Message *</label>
                  <textarea required rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 border border-[#c5c6cf] rounded-xl text-sm focus:border-[#006d38] focus:ring-2 focus:ring-[#006d38]/20 outline-none transition-colors resize-none" />
                </div>
                <button type="submit" disabled={loading}
                  className="w-full bg-[#006d38] text-white py-3.5 rounded-xl text-sm font-bold hover:bg-[#005229] transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                  {loading ? (
                    <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                  ) : (
                    <><span className="material-symbols-outlined text-base">send</span> Send Message</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
