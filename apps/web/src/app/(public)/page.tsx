import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Hoechem SACCO Ltd. — Empowering Members, Building Wealth',
  description:
    'Join Hoechem SACCO and access secure savings, affordable loans, and a community dedicated to your financial well-being. 1,000+ members strong since 1979.',
}

const stats = [
  { value: '1,000+', label: 'Members' },
  { value: 'KES 130M+', label: 'Loans Issued' },
  { value: 'Favourable', label: 'Dividends' },
  { value: 'Safe', label: '& Secure' },
  { value: '10+', label: 'Years Experience' },
]

const services = [
  {
    icon: 'savings',
    title: 'Savings Accounts',
    description: 'Grow your money with competitive interest rates and flexible savings plans designed for every financial goal.',
    href: '/savings',
    color: 'bg-[#E7F5EC] text-[#006d38]',
  },
  {
    icon: 'payments',
    title: 'Loan Products',
    description: 'Access affordable development, school fees, emergency, and mobile loans with transparent terms.',
    href: '/loans',
    color: 'bg-[#EAF0FA] text-[#0b1b3f]',
  },
  {
    icon: 'group',
    title: 'Membership',
    description: 'Join a thriving community of members building better futures together through cooperative finance.',
    href: '/membership',
    color: 'bg-[#E7F5EC] text-[#006d38]',
  },
  {
    icon: 'trending_up',
    title: 'Investment & Growth',
    description: 'Earn dividends and build long-term wealth through share ownership in a stable, regulated cooperative.',
    href: '/about',
    color: 'bg-[#FFF8E8] text-[#b27a01]',
  },
]

const whyUs = [
  { icon: 'verified_user', title: 'SASRA Regulated', description: 'Fully licensed and regulated by the Sacco Societies Regulatory Authority.' },
  { icon: 'history_edu', title: 'Since 1979', description: 'Over 45 years of empowering members with trusted financial services.' },
  { icon: 'handshake', title: 'Member-Owned', description: 'Governed by members for members — your voice matters in every decision.' },
  { icon: 'speed', title: 'Fast Processing', description: 'Quick loan approvals and disbursements when you need it most.' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-16 py-20 flex flex-col lg:flex-row items-center gap-12">
        {/* Text */}
        <div className="flex-1 flex flex-col items-start gap-6">
          <div className="bg-[#E7F5EC] text-[#006d38] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#006d38]" />
            TOGETHER, WE BUILD BETTER FUTURES
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-[#00020d] leading-tight tracking-tight">
            Empowering Members.<br />
            <span className="text-[#006d38]">Building Wealth.</span><br />
            Securing the Future.
          </h1>

          <p className="text-lg text-[#45464e] max-w-xl leading-relaxed">
            Join a community dedicated to your financial well-being. We provide secure savings,
            accessible loans, and a foundation for sustainable growth. Experience banking that
            puts you first.
          </p>

          <div className="flex flex-wrap gap-4 mt-2">
            <Link
              href="/membership"
              className="bg-[#0b1b3f] text-white px-8 py-3.5 rounded-xl text-sm font-bold hover:bg-[#1a3060] transition-all shadow-md"
            >
              Become a Member
            </Link>
            <Link
              href="/loans"
              className="bg-[#006d38] text-white px-8 py-3.5 rounded-xl text-sm font-bold hover:bg-[#005229] transition-all shadow-md"
            >
              Apply for a Loan
            </Link>
            <Link
              href="/contact"
              className="border border-[#75777f] text-[#00020d] px-8 py-3.5 rounded-xl text-sm font-bold hover:bg-[#e7e8ea] transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] w-full">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0eMraFKzWyJb_oNDLZJs1dNJvnMK3BnweA8XyuHtFa5M8F3dzlQ9E3ukCuOrn8R2GvVXTyWLgjf8YITigrszO2FVnkJLNUsvYse0gq2bsY1K8mPvZ4YixrdE8n7s5IfLxjUlTFoT7dBQUdhzOggmC1pIo_uBAbtmgjfh47gMwsacjfmjJkkRwcsukBy0P-GaK1-Z2ptW72zMUrdDKIKqEJOl54XwDl19rZ0DN9XYVdMB7z-l_z8UW"
              alt="A diverse family reviewing financial documents together in a modern living room, conveying trust and financial planning"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl card-shadow-lg flex items-center gap-4 animate-float">
            <div className="w-12 h-12 rounded-full bg-[#E7F5EC] flex items-center justify-center text-[#006d38]">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#00020d]">1,000+</div>
              <div className="text-xs font-semibold text-[#45464e]">Happy Members</div>
            </div>
          </div>

          {/* Floating Badge 2 */}
          <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl card-shadow-lg flex items-center gap-3 animate-float-reverse">
            <div className="w-10 h-10 rounded-full bg-[#EAF0FA] flex items-center justify-center text-[#0b1b3f]">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
            </div>
            <div>
              <div className="text-sm font-bold text-[#00020d]">12% p.a</div>
              <div className="text-xs text-[#45464e]">Interest Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="w-full bg-[#0b1b3f] text-white py-12">
        <div className="max-w-[1200px] mx-auto px-4 md:px-16 grid grid-cols-2 md:grid-cols-5 gap-6 text-center divide-x divide-white/10">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center px-4">
              <span className="text-2xl font-bold text-[#94f8af]">{stat.value}</span>
              <span className="text-xs font-semibold mt-2 opacity-80 uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-16 py-24">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E7F5EC] text-[#006d38] text-xs font-bold tracking-wide uppercase mb-4">
            <span className="material-symbols-outlined text-sm">star</span>
            OUR SERVICES
          </div>
          <h2 className="text-4xl font-extrabold text-[#00020d] tracking-tight">
            Everything You Need to <span className="text-[#006d38]">Thrive Financially</span>
          </h2>
          <p className="text-[#45464e] text-lg mt-4 max-w-2xl mx-auto">
            We offer a comprehensive suite of financial products designed to support every stage of your financial journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <Link
              key={i}
              href={service.href}
              className="bg-white rounded-2xl p-8 card-shadow border border-[#e1e2e4]/50 hover:-translate-y-1 hover:card-shadow-md transition-all duration-300 group flex gap-5"
            >
              <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center flex-shrink-0`}>
                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {service.icon}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#00020d] mb-2 group-hover:text-[#006d38] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#45464e] text-sm leading-relaxed">{service.description}</p>
                <span className="inline-flex items-center gap-1 text-[#006d38] text-sm font-semibold mt-3 group-hover:gap-2 transition-all">
                  Learn more <span className="material-symbols-outlined text-base">arrow_forward</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full bg-[#f2f4f6] py-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EAF0FA] text-[#0b1b3f] text-xs font-bold tracking-wide uppercase mb-4">
                <span className="material-symbols-outlined text-sm">verified</span>
                WHY CHOOSE US
              </div>
              <h2 className="text-4xl font-extrabold text-[#00020d] tracking-tight mb-6">
                Trusted by Thousands of{' '}
                <span className="text-[#006d38]">Kenyan Families</span>
              </h2>
              <p className="text-[#45464e] text-lg leading-relaxed mb-8">
                For over 45 years, Hoechem SACCO has been the cornerstone of financial empowerment for our members.
                We&apos;re not just a financial institution — we&apos;re your financial family.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[#006d38] text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-[#005229] transition-colors shadow"
              >
                Learn Our Story <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {whyUs.map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 card-shadow">
                  <div className="w-12 h-12 rounded-full bg-[#E7F5EC] flex items-center justify-center text-[#006d38] mb-4">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                  </div>
                  <h4 className="font-bold text-[#00020d] mb-2">{item.title}</h4>
                  <p className="text-[#45464e] text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="w-full bg-[#006d38] py-16">
        <div className="max-w-[1200px] mx-auto px-4 md:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Ready to Join Hoechem SACCO?
          </h2>
          <p className="text-[#94f8af] text-lg mb-8 max-w-xl mx-auto">
            Start your financial journey today. Join over 1,000 members building wealth and securing their futures together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/membership"
              className="bg-white text-[#006d38] px-8 py-3.5 rounded-xl text-sm font-bold hover:bg-[#f0f1f3] transition-colors shadow-lg"
            >
              Apply for Membership
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3.5 rounded-xl text-sm font-bold hover:bg-white/10 transition-colors"
            >
              Talk to Us First
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
