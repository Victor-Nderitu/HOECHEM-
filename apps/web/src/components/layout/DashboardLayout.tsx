import React from 'react';
import Link from 'next/link';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-[#f2f4f6]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0b1b3f] text-white flex flex-col hidden md:flex">
        <div className="p-6">
          <h2 className="text-xl font-bold tracking-tight">HOECHEM SACCO</h2>
          <p className="text-[#94f8af] text-xs mt-1 uppercase">Member Portal</p>
        </div>
        
        <nav className="flex-1 px-4 py-4 space-y-2">
          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 text-white font-medium hover:bg-white/20 transition-colors">
            <span className="material-symbols-outlined text-[20px]">dashboard</span>
            Overview
          </Link>
          <Link href="/dashboard/savings" className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-colors font-medium">
            <span className="material-symbols-outlined text-[20px]">savings</span>
            Savings
          </Link>
          <Link href="/dashboard/loans" className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-colors font-medium">
            <span className="material-symbols-outlined text-[20px]">payments</span>
            Loans
          </Link>
          <Link href="/dashboard/transactions" className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-colors font-medium">
            <span className="material-symbols-outlined text-[20px]">receipt_long</span>
            Transactions
          </Link>
        </nav>

        <div className="p-4 border-t border-white/10">
          <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-white/70 hover:text-red-400 hover:bg-white/5 transition-colors font-medium text-left">
            <span className="material-symbols-outlined text-[20px]">logout</span>
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-[#e1e2e4] h-16 flex items-center justify-between px-6 lg:px-10 flex-shrink-0">
          <div className="flex items-center gap-4">
            <button className="md:hidden text-[#45464e] hover:text-[#0b1b3f]">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <h1 className="text-xl font-bold text-[#00020d]">Welcome back</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full bg-[#f2f4f6] flex items-center justify-center text-[#45464e] hover:bg-[#e1e2e4] transition-colors relative">
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            <div className="w-10 h-10 rounded-full bg-[#006d38] text-white flex items-center justify-center font-bold">
              JD
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-10">
          {children}
        </main>
      </div>
    </div>
  );
}
