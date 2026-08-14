import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Savings Products — Hoechem SACCO Ltd.',
  description: 'Grow your money with Hoechem SACCO savings accounts. Regular savings, fixed deposits, and more with competitive interest rates.',
}

const savingsProducts = [
  {
    icon: 'savings',
    title: 'Regular Savings',
    description: 'Build a habit of saving with our regular savings account. Contribute monthly and earn interest on your balance.',
    features: ['Minimum KES 1,000/month', 'Competitive interest rates', 'Loan collateral eligible', 'Dividend-earning shares'],
    color: 'bg-[#E7F5EC] text-[#006d38]',
    badge: 'Most Popular',
  },
  {
    icon: 'lock',
    title: 'Fixed Deposit',
    description: 'Lock in your savings for a fixed period and earn higher interest rates than regular savings accounts.',
    features: ['Minimum KES 50,000', 'Up to 15% p.a interest', '3 to 24 months terms', 'Guaranteed returns'],
    color: 'bg-[#EAF0FA] text-[#0b1b3f]',
    badge: 'Higher Returns',
  },
  {
    icon: 'account_balance_wallet',
    title: 'Holiday Savings',
    description: 'Save specifically for holidays, school fees, or special events with a dedicated account.',
    features: ['Goal-based savings', 'Flexible contributions', 'Interest on balance', 'Access at target date'],
    color: 'bg-[#FFF8E8] text-[#b27a01]',
    badge: 'Goal-Based',
  },
  {
    icon: 'school',
    title: 'Junior Savings',
    description: 'Open a savings account for your child and build their financial future from day one.',
    features: ['No monthly minimum', 'Protected until 18', 'Bonus interest rate', 'Financial literacy'],
    color: 'bg-[#E7F5EC] text-[#006d38]',
    badge: 'For Children',
  },
]

const savingsBenefits = [
  { icon: 'trending_up', title: 'Earn Dividends', description: 'Active members earn annual dividends based on their shareholding.' },
  { icon: 'security', title: 'Guaranteed Safety', description: 'Your savings are protected under SASRA regulations.' },
  { icon: 'credit_score', title: 'Loan Access', description: 'Savings qualify you for loans up to 3x your deposit amount.' },
  { icon: 'volunteer_activism', title: 'Community Impact', description: 'Your savings help fund other members\' goals and dreams.' },
]

export default function SavingsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white px-4 md:px-16 py-16 max-w-[1200px] mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E7F5EC] text-[#006d38] text-xs font-bold tracking-wide uppercase mb-6">
            <span className="material-symbols-outlined text-sm">savings</span>
            SAVINGS PRODUCTS
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#00020d] tracking-tight mb-6">
            Grow Your <span className="text-[#006d38]">Savings</span> With Us
          </h1>
          <p className="text-lg text-[#45464e] leading-relaxed mb-8">
            Choose from a range of savings products designed to match your financial goals.
            Every shilling saved with Hoechem SACCO works harder for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/membership" className="bg-[#0b1b3f] text-white px-8 py-3.5 rounded-xl text-sm font-bold hover:bg-[#1a3060] transition-colors shadow">
              Open an Account
            </Link>
            <Link href="/login" className="border border-[#006d38] text-[#006d38] px-8 py-3.5 rounded-xl text-sm font-bold hover:bg-[#E7F5EC] transition-colors">
              Member Portal
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#0b1b3f] py-10 px-4 md:px-16">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: 'KES 85M+', label: 'Total Savings' },
            { value: '12%', label: 'Max Interest p.a' },
            { value: '1,000+', label: 'Savers' },
            { value: 'SASRA', label: 'Regulated & Insured' },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-2xl font-bold text-[#94f8af]">{s.value}</span>
              <span className="text-xs font-semibold text-[#dae2ff] mt-2 uppercase tracking-wider">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-16 py-20">
        <h2 className="text-2xl font-bold text-[#00020d] text-center mb-10">Our Savings Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {savingsProducts.map((product, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 card-shadow border border-[#e1e2e4]/50 hover:-translate-y-1 transition-transform duration-300 relative">
              {product.badge && (
                <span className="absolute top-4 right-4 bg-[#94f8af] text-[#00210d] text-xs font-bold px-2.5 py-1 rounded-full">
                  {product.badge}
                </span>
              )}
              <div className={`w-14 h-14 rounded-2xl ${product.color} flex items-center justify-center mb-5`}>
                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>{product.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-[#00020d] mb-3">{product.title}</h3>
              <p className="text-[#45464e] text-sm mb-5 leading-relaxed">{product.description}</p>
              <ul className="space-y-2">
                {product.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-[#45464e]">
                    <span className="material-symbols-outlined text-[#006d38] text-sm">check_circle</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/membership" className="mt-6 block text-center bg-[#0b1b3f] text-white px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-[#1a3060] transition-colors">
                Open Account
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#f2f4f6] py-20 px-4 md:px-16">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-2xl font-bold text-[#00020d] text-center mb-10">
            Why Save with <span className="text-[#006d38]">Hoechem SACCO?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {savingsBenefits.map((b, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 card-shadow text-center">
                <div className="w-14 h-14 rounded-full bg-[#E7F5EC] flex items-center justify-center text-[#006d38] mx-auto mb-4">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>{b.icon}</span>
                </div>
                <h3 className="font-bold text-[#00020d] mb-2">{b.title}</h3>
                <p className="text-[#45464e] text-sm leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#006d38] py-16 text-white text-center px-4">
        <h2 className="text-3xl font-extrabold mb-4 tracking-tight">Start Saving Today</h2>
        <p className="text-[#94f8af] mb-8 max-w-xl mx-auto">
          Every financial journey starts with a single step. Open a savings account with Hoechem SACCO today.
        </p>
        <Link href="/membership" className="bg-white text-[#006d38] px-8 py-3.5 rounded-xl text-sm font-bold hover:bg-[#f0f1f3] transition-colors shadow-lg inline-block">
          Become a Member
        </Link>
      </section>
    </>
  )
}
