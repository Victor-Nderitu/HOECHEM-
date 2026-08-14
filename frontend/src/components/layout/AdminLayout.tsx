import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <div className="flex min-h-screen bg-[#f2f4f6]"><aside className="hidden w-64 flex-col bg-[#0b1b3f] p-6 text-white md:flex"><p className="text-xl font-bold">HOECHEM SACCO</p><p className="mt-1 text-xs font-bold uppercase text-[#94f8af]">Administration</p><nav className="mt-10 space-y-2"><Link href="/admin" className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 font-medium"><span className="material-symbols-outlined">dashboard</span>Overview</Link><Link href="/admin" className="flex items-center gap-3 rounded-xl px-4 py-3 text-white/75 hover:bg-white/10"><span className="material-symbols-outlined">group</span>Members</Link><Link href="/admin" className="flex items-center gap-3 rounded-xl px-4 py-3 text-white/75 hover:bg-white/10"><span className="material-symbols-outlined">monitoring</span>Reports</Link></nav></aside><main className="flex-1 p-6 lg:p-10"><div className="mb-6 flex justify-end"><ThemeToggle /></div>{children}</main></div>
}
