'use client'

import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

type ProgressPoint = { label: string; value: number }

export function ProgressChart({ title, data, color = '#006d38' }: { title: string; data: ProgressPoint[]; color?: string }) {
  return <section className="rounded-2xl border border-[#e1e2e4]/50 bg-white p-6 shadow-sm"><div className="mb-5"><h3 className="font-bold text-[#00020d]">{title}</h3><p className="text-xs text-[#75777f]">Progress overview</p></div><div className="h-64"><ResponsiveContainer width="100%" height="100%"><LineChart data={data} margin={{ top: 5, right: 8, left: -18, bottom: 0 }}><CartesianGrid strokeDasharray="3 3" stroke="#e7e8ea" /><XAxis dataKey="label" tick={{ fontSize: 12 }} /><YAxis tick={{ fontSize: 12 }} /><Tooltip formatter={(value) => [`KES ${Number(value).toLocaleString()}`, 'Amount']} /><Line type="monotone" dataKey="value" stroke={color} strokeWidth={3} dot={{ r: 4, fill: color }} activeDot={{ r: 6 }} /></LineChart></ResponsiveContainer></div></section>
}
