'use client';

import { ProgressChart } from '@/components/dashboard/ProgressChart';

const savingsProgress = [
  { label: 'Jan', value: 0 }, { label: 'Feb', value: 0 }, { label: 'Mar', value: 0 },
  { label: 'Apr', value: 0 }, { label: 'May', value: 0 }, { label: 'Jun', value: 0 },
];

export default function DashboardOverviewPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-[#00020d]">Overview</h2>
          <p className="text-[#45464e] text-sm mt-1">Here&apos;s a summary of your account</p>
        </div>
        <button className="bg-[#006d38] text-white px-4 py-2 rounded-xl text-sm font-bold shadow hover:bg-[#005229] transition-colors flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px]">add</span>
          Deposit Funds
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e1e2e4]/50">
          <div className="flex items-center gap-3 text-[#45464e] mb-4">
            <span className="material-symbols-outlined text-[#006d38] bg-[#E7F5EC] p-2 rounded-lg">account_balance_wallet</span>
            <span className="font-semibold text-sm uppercase tracking-wide">Total Savings</span>
          </div>
          <div className="text-3xl font-extrabold text-[#00020d]">KES 0.00</div>
          <p className="text-[#006d38] text-xs font-semibold mt-2 flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">trending_up</span>
            +0.00% this month
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e1e2e4]/50">
          <div className="flex items-center gap-3 text-[#45464e] mb-4">
            <span className="material-symbols-outlined text-[#b27a01] bg-[#FFF8E8] p-2 rounded-lg">real_estate_agent</span>
            <span className="font-semibold text-sm uppercase tracking-wide">Active Loans</span>
          </div>
          <div className="text-3xl font-extrabold text-[#00020d]">KES 0.00</div>
          <p className="text-[#45464e] text-xs mt-2">
            No active loans
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e1e2e4]/50">
          <div className="flex items-center gap-3 text-[#45464e] mb-4">
            <span className="material-symbols-outlined text-[#0b1b3f] bg-[#EAF0FA] p-2 rounded-lg">workspace_premium</span>
            <span className="font-semibold text-sm uppercase tracking-wide">Dividends Earned</span>
          </div>
          <div className="text-3xl font-extrabold text-[#00020d]">KES 0.00</div>
          <p className="text-[#45464e] text-xs mt-2">
            For the year 2024
          </p>
        </div>
      </div>

      <ProgressChart title="Your savings progress" data={savingsProgress} />

      {/* Recent Transactions */}
      <div className="bg-white rounded-2xl shadow-sm border border-[#e1e2e4]/50 overflow-hidden mt-8">
        <div className="px-6 py-5 border-b border-[#e1e2e4]/50 flex justify-between items-center">
          <h3 className="font-bold text-[#00020d]">Recent Transactions</h3>
          <button className="text-[#006d38] text-sm font-semibold hover:underline">View All</button>
        </div>
        <div className="p-8 text-center flex flex-col items-center">
          <span className="material-symbols-outlined text-4xl text-[#75777f] mb-3">receipt_long</span>
          <p className="text-[#45464e] text-sm">No recent transactions found.</p>
        </div>
      </div>
    </div>
  );
}
