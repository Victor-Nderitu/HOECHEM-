import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Membership — Hoechem SACCO Ltd.',
  description: 'Join Hoechem SACCO. Learn the eligibility requirements, application process, and benefits of becoming a member of our financial cooperative.',
}

const steps = [
  { step: '01', title: 'Check Eligibility', description: 'Ensure you meet the basic membership requirements.' },
  { step: '02', title: 'Submit Application', description: 'Fill out the online membership form with your personal details.' },
  { step: '03', title: 'Upload Documents', description: 'Provide your ID, passport photo, and any required documents.' },
  { step: '04', title: 'Pay Admission Fee', description: 'Pay the one-time registration and share capital fees.' },
  { step: '05', title: 'Get Approved', description: 'Our team reviews your application within 5 business days.' },
  { step: '06', title: 'Start Saving', description: 'Begin your monthly contributions and access all member benefits.' },
]

const requirements = [
  'Must be 18 years of age or older',
  'Valid National ID or Passport',
  'Recent passport-size photograph',
  'Proof of income or employment',
  'Completed membership application form',
  'Payment of admission fee (KES 1,000)',
  'Minimum share capital of KES 5,000',
]

const benefits = [
  { icon: 'savings', title: 'Savings Account', description: 'Access a secure savings account with competitive interest rates.' },
  { icon: 'payments', title: 'Loan Access', description: 'Qualify for loans up to 3x your savings balance.' },
  { icon: 'redeem', title: 'Annual Dividends', description: 'Earn dividends on your shares at the end of every financial year.' },
  { icon: 'group', title: 'Community', description: 'Join a growing community of like-minded savers and investors.' },
  { icon: 'local_hospital', title: 'Welfare Support', description: 'Access welfare benefits including funeral grants and emergency support.' },
  { icon: 'school', title: 'Financial Education', description: 'Attend member workshops and financial literacy sessions.' },
]

export default function MembershipPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white px-4 md:px-16 py-16 max-w-[1200px] mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E7F5EC] text-[#006d38] text-xs font-bold tracking-wide uppercase mb-6">
            <span className="material-symbols-outlined text-sm">group_add</span>
            JOIN OUR COOPERATIVE
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#00020d] tracking-tight mb-6">
            Become a <span className="text-[#006d38]">Member</span>
          </h1>
          <p className="text-lg text-[#45464e] leading-relaxed mb-8">
            Joining Hoechem SACCO is your first step toward financial freedom. As a member-owned
            cooperative, every voice matters and every member benefits.
          </p>
          <Link
            href="/register"
            className="bg-[#006d38] text-white px-10 py-4 rounded-xl text-sm font-bold hover:bg-[#005229] transition-colors shadow-lg inline-flex items-center gap-2"
          >
            Apply for Membership <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#f2f4f6] py-20 px-4 md:px-16">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-2xl font-bold text-[#00020d] text-center mb-10">
            Member <span className="text-[#006d38]">Benefits</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 card-shadow hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 rounded-full bg-[#E7F5EC] flex items-center justify-center text-[#006d38] mb-4">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>{b.icon}</span>
                </div>
                <h3 className="font-bold text-[#00020d] mb-2">{b.title}</h3>
                <p className="text-[#45464e] text-sm leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements + Steps */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-16 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Requirements */}
          <div>
            <h2 className="text-2xl font-bold text-[#00020d] mb-6">Eligibility <span className="text-[#006d38]">Requirements</span></h2>
            <div className="bg-white rounded-2xl p-8 card-shadow border border-[#e1e2e4]/50">
              <ul className="space-y-3">
                {requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#45464e]">
                    <span className="material-symbols-outlined text-[#006d38] text-sm mt-0.5 flex-shrink-0">check_circle</span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Process */}
          <div>
            <h2 className="text-2xl font-bold text-[#00020d] mb-6">How to <span className="text-[#006d38]">Join</span></h2>
            <div className="space-y-4">
              {steps.map((s, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-2xl p-5 card-shadow border border-[#e1e2e4]/50">
                  <div className="w-10 h-10 rounded-full bg-[#0b1b3f] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {s.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#00020d] mb-1">{s.title}</h4>
                    <p className="text-[#45464e] text-sm">{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0b1b3f] py-16 text-white text-center px-4">
        <h2 className="text-3xl font-extrabold mb-4">Ready to Join?</h2>
        <p className="text-[#7684ae] mb-8 max-w-xl mx-auto">
          Start your application online today. Our team will review it within 5 business days.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/register" className="bg-[#94f8af] text-[#00210d] px-8 py-3.5 rounded-xl text-sm font-bold hover:bg-[#78db95] transition-colors shadow">
            Apply Online
          </Link>
          <Link href="/contact" className="border border-white/30 text-white px-8 py-3.5 rounded-xl text-sm font-bold hover:bg-white/10 transition-colors">
            Ask a Question
          </Link>
        </div>
      </section>
    </>
  )
}
