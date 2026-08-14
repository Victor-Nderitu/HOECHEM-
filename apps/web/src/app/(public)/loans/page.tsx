import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Loan Products — Hoechem SACCO Ltd.',
  description:
    'Explore Hoechem SACCO loan products: Development loans, School Fees, Emergency, M-Pesa, Digital loans and more. Competitive rates from 12% p.a.',
}

const loanProducts = [
  {
    icon: 'foundation',
    title: 'Development Loan',
    description: 'Long-term financing for major projects, investments, or asset acquisition.',
    rate: '12% p.a',
    maxPeriod: '60 Months',
    color: 'bg-[#E7F5EC] text-[#006d38]',
    maxMultiplier: '3x savings',
  },
  {
    icon: 'school',
    title: 'School Fees Loan',
    description: 'Secure your children\'s future with affordable education financing.',
    rate: '12% p.a',
    maxPeriod: '12 Months',
    color: 'bg-[#EAF0FA] text-[#0b1b3f]',
    maxMultiplier: '2x savings',
  },
  {
    icon: 'medical_services',
    title: 'Emergency Loan',
    description: 'Quick access to funds for unforeseen urgent situations.',
    rate: '12% p.a',
    maxPeriod: '12 Months',
    color: 'bg-[#ffdad6] text-[#ba1a1a]',
    maxMultiplier: '1x savings',
  },
  {
    icon: 'sync',
    title: 'Refinancing Loan',
    description: 'Consolidate existing debts to better manage your cash flow.',
    rate: '12% p.a',
    maxPeriod: 'Varies',
    color: 'bg-[#E7F5EC] text-[#006d38]',
    maxMultiplier: 'Case by case',
  },
  {
    icon: 'account_tree',
    title: 'Restructuring Loan',
    description: 'Adjust your current loan terms to suit changing financial circumstances.',
    rate: '12% p.a',
    maxPeriod: 'Varies',
    color: 'bg-[#EAF0FA] text-[#0b1b3f]',
    maxMultiplier: 'Case by case',
  },
]

const mobileLoanProducts = [
  {
    title: 'M-Pesa Loan',
    description: 'Instant mobile money loan disbursed directly to your M-Pesa.',
    rate: '5% p.m',
    term: '1 Month',
    color: 'bg-[#0b1b3f]',
    icon: 'smartphone',
  },
  {
    title: 'Digital Loan',
    description: 'Fast online loan for emergency needs, applied through our portal.',
    rate: '7.5% p.m',
    term: '1 Month',
    color: 'bg-[#006d38]',
    icon: 'wifi',
  },
]

export default function LoansPage() {
  return (
    <>
      {/* Hero */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 max-w-[1200px] mx-auto px-4 md:px-16 py-16">
        <div>
          <div className="flex items-center gap-2 text-[#45464e] text-xs font-semibold mb-6">
            <Link href="/" className="hover:text-[#00020d]">Home</Link>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <span className="text-[#00020d] font-bold">Loans</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#00020d] tracking-tight mb-3">
            Loan Products
          </h1>
          <h2 className="text-2xl font-semibold text-[#006d38] mb-6">Solutions that fit your life</h2>
          <p className="text-lg text-[#45464e] mb-8 max-w-lg leading-relaxed">
            Whether you are building a home, educating your children, or managing an emergency, 
            Hoechem SACCO provides affordable and flexible credit facilities tailored to support 
            your financial journey.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/login" className="bg-[#0b1b3f] text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-[#1a3060] transition-colors shadow">
              Apply Now
            </Link>
            <a href="#calculator" className="border border-[#006d38] text-[#006d38] px-6 py-3 rounded-xl text-sm font-bold hover:bg-[#E7F5EC] transition-colors">
              Loan Calculator
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-[#b7c5f3] rounded-2xl transform translate-x-4 translate-y-4" />
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtqc5iaNNyfu_8ihVDJaLSNeWmaMdKAXflOeW4nbmsKVcyNGIy4_FMYaSzsT462lELT9zshENIaxSkh40q_3583ETiEtb4et2E_9G3vnU1mTN8AMjZ33Xt3QgtR19GD0q-amgT9y60YmQ7x6MWSq9twMAFK8HKGsSt9CV6A4ORzglcjrFtzuLgzw5hOSfo2s7ZyNbKEbuYss5pS6RxOXPDXlZjXpB2KDymxqN3ByZJ_BXilttAM8bY"
              alt="Professional woman reviewing loan options on a tablet"
              width={600}
              height={500}
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div className="absolute top-10 -left-6 bg-white p-4 rounded-xl card-shadow z-20 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#E7F5EC] flex items-center justify-center">
              <span className="material-symbols-outlined text-[#006d38]">percent</span>
            </div>
            <div>
              <p className="text-xs font-bold text-[#00020d]">Affordable</p>
              <p className="text-xs text-[#45464e]">Low Rates</p>
            </div>
          </div>
          <div className="absolute bottom-10 -right-6 bg-white p-4 rounded-xl card-shadow z-20 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#EAF0FA] flex items-center justify-center">
              <span className="material-symbols-outlined text-[#0b1b3f]">calendar_month</span>
            </div>
            <div>
              <p className="text-xs font-bold text-[#00020d]">Flexible</p>
              <p className="text-xs text-[#45464e]">Up to 60 Months</p>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Products Grid */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-16 mb-20">
        <h2 className="text-2xl font-bold text-[#00020d] mb-8 text-center">Our Loan Facilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loanProducts.map((loan, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 card-shadow border border-[#e1e2e4]/50 hover:-translate-y-1 transition-transform duration-300">
              <div className={`w-12 h-12 rounded-full ${loan.color} flex items-center justify-center mb-4`}>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>{loan.icon}</span>
              </div>
              <h3 className="font-bold text-[#00020d] mb-2 text-lg">{loan.title}</h3>
              <p className="text-[#45464e] text-sm mb-4 leading-relaxed">{loan.description}</p>
              <div className="flex justify-between items-center border-t border-[#e7e8ea] pt-4">
                <div>
                  <p className="text-xs text-[#45464e] uppercase tracking-wide">Rate</p>
                  <p className="font-bold text-[#00020d] text-sm">{loan.rate}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-[#45464e] uppercase tracking-wide">Max Period</p>
                  <p className="font-bold text-[#00020d] text-sm">{loan.maxPeriod}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Mobile/Short-term Loans */}
          <div className="grid grid-rows-2 gap-6">
            {mobileLoanProducts.map((loan, i) => (
              <div key={i} className={`${loan.color} rounded-2xl p-6 shadow-card-md text-white`}>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-lg">{loan.title}</h4>
                  <span className="material-symbols-outlined text-[#94f8af]">{loan.icon}</span>
                </div>
                <p className="text-white/80 text-sm mb-3">{loan.description}</p>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs uppercase tracking-wide opacity-70">Rate</p>
                    <p className="font-bold">{loan.rate}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs uppercase tracking-wide opacity-70">Term</p>
                    <p className="font-bold">{loan.term}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Strip */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-16 mb-20 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#f2f4f6] rounded-2xl p-8 border border-[#e7e8ea]">
          <div className="flex items-center mb-4">
            <span className="material-symbols-outlined text-[#0b1b3f] mr-3">info</span>
            <h4 className="text-xl font-bold text-[#00020d]">Important Info</h4>
          </div>
          <ul className="space-y-3 text-sm text-[#45464e]">
            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[#006d38] text-sm mt-0.5">check_circle</span>Maximum repayment period for major loans is 60 months.</li>
            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[#006d38] text-sm mt-0.5">check_circle</span>Loans are granted up to 3 times your core deposits.</li>
            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[#006d38] text-sm mt-0.5">check_circle</span>Guarantors or collaterals may be required based on loan type.</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl p-8 card-shadow border border-[#e1e2e4]/50">
          <div className="flex items-center mb-4">
            <span className="material-symbols-outlined text-[#006d38] mr-3">verified</span>
            <h4 className="text-xl font-bold text-[#00020d]">Why Borrow With Us?</h4>
          </div>
          <ul className="space-y-3 text-sm text-[#45464e]">
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[#0b1b3f] text-sm">done</span>Competitive, flat interest rates.</li>
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[#0b1b3f] text-sm">done</span>Fast processing and disbursement.</li>
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[#0b1b3f] text-sm">done</span>No hidden charges or early repayment penalties.</li>
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[#0b1b3f] text-sm">done</span>Flexible restructuring options.</li>
          </ul>
        </div>

        <div className="bg-[#0b1b3f] rounded-2xl p-8 text-white flex flex-col justify-center items-center text-center">
          <span className="material-symbols-outlined text-5xl text-[#94f8af] mb-4">support_agent</span>
          <h4 className="text-xl font-bold mb-2">Need Guidance?</h4>
          <p className="text-[#7684ae] text-sm mb-6">Speak to our loan officers to find the perfect facility for your needs.</p>
          <Link href="/contact" className="bg-white text-[#0b1b3f] px-6 py-2.5 rounded-xl text-sm font-bold w-full text-center hover:bg-[#f2f4f6] transition-colors">
            Contact Us
          </Link>
        </div>
      </section>

      {/* Loan Calculator */}
      <section id="calculator" className="max-w-[1200px] mx-auto px-4 md:px-16 mb-20">
        <div className="bg-white rounded-2xl p-10 card-shadow border border-[#e1e2e4]/50">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#00020d]">Loan <span className="text-[#006d38]">Calculator</span></h2>
            <p className="text-[#45464e] text-sm mt-2">Estimate your monthly repayments</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-xs font-bold text-[#45464e] uppercase tracking-wide mb-2">Loan Amount (KES)</label>
              <input
                type="number"
                id="calc-amount"
                placeholder="e.g. 100,000"
                className="w-full px-4 py-3 border border-[#c5c6cf] rounded-xl text-sm focus:border-[#006d38] focus:ring-2 focus:ring-[#006d38]/20 outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#45464e] uppercase tracking-wide mb-2">Interest Rate (% p.a)</label>
              <input
                type="number"
                id="calc-rate"
                placeholder="e.g. 12"
                defaultValue="12"
                className="w-full px-4 py-3 border border-[#c5c6cf] rounded-xl text-sm focus:border-[#006d38] focus:ring-2 focus:ring-[#006d38]/20 outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#45464e] uppercase tracking-wide mb-2">Term (Months)</label>
              <input
                type="number"
                id="calc-term"
                placeholder="e.g. 24"
                className="w-full px-4 py-3 border border-[#c5c6cf] rounded-xl text-sm focus:border-[#006d38] focus:ring-2 focus:ring-[#006d38]/20 outline-none transition-colors"
              />
            </div>
          </div>
          <div className="text-center">
            <Link href="/login" className="bg-[#006d38] text-white px-8 py-3.5 rounded-xl text-sm font-bold hover:bg-[#005229] transition-colors">
              Use Full Calculator in Portal
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom Stats Bar */}
      <div className="w-full bg-[#0b1b3f] text-white py-12 px-4 md:px-16">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          <div className="py-4 md:py-0">
            <p className="text-4xl font-bold text-[#94f8af] mb-1">1,000+</p>
            <p className="text-xs font-semibold text-[#7684ae] uppercase tracking-wide">Active Members</p>
          </div>
          <div className="py-4 md:py-0">
            <p className="text-4xl font-bold text-white mb-1">KES 130M+</p>
            <p className="text-xs font-semibold text-[#7684ae] uppercase tracking-wide">Loans Disbursed</p>
          </div>
          <div className="py-4 md:py-0 flex flex-col justify-center">
            <h4 className="text-xl font-bold text-white">Together, We Build Better Futures</h4>
          </div>
        </div>
      </div>
    </>
  )
}
