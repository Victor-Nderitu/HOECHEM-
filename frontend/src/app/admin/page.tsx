import { ProgressChart } from '@/components/dashboard/ProgressChart'
import { ContactInbox } from '@/components/admin/ContactInbox'

const portfolioProgress = [{ label: 'Jan', value: 420000 }, { label: 'Feb', value: 510000 }, { label: 'Mar', value: 590000 }, { label: 'Apr', value: 670000 }, { label: 'May', value: 750000 }, { label: 'Jun', value: 840000 }]

export default function AdminPage() {
  return <div className="space-y-6"><div><p className="text-sm font-bold text-[#006d38]">ADMINISTRATION</p><h1 className="text-3xl font-extrabold text-[#00020d]">SACCO performance</h1><p className="mt-1 text-sm text-[#45464e]">Portfolio progress and member activity overview.</p></div><div className="grid gap-4 md:grid-cols-3"><Metric label="Active members" value="1,000" icon="group" /><Metric label="Loan portfolio" value="KES 840K" icon="payments" /><Metric label="Savings growth" value="+12.4%" icon="trending_up" /></div><ProgressChart title="Loan portfolio progress" data={portfolioProgress} color="#0b1b3f" /><ContactInbox /></div>
}

function Metric({ label, value, icon }: { label: string; value: string; icon: string }) { return <div className="rounded-2xl border border-[#e1e2e4]/50 bg-white p-5 shadow-sm"><span className="material-symbols-outlined rounded-lg bg-[#E7F5EC] p-2 text-[#006d38]">{icon}</span><p className="mt-4 text-sm text-[#45464e]">{label}</p><p className="text-2xl font-extrabold text-[#00020d]">{value}</p></div> }
