import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Us — Hoechem SACCO Ltd.',
  description:
    'Learn about Hoechem SACCO Ltd., a member-driven financial cooperative rooted in cooperative principles since 1979. Our history, mission, and values.',
}

const milestones = [
  { year: '1979', title: 'Founded', description: 'Hoechem SACCO was registered as a cooperative society.' },
  { year: '1990s', title: 'Growth Phase', description: 'Expanded membership and introduced new loan products.' },
  { year: '2000s', title: 'Digital Era', description: 'Adopted technology to improve service delivery to members.' },
  { year: '2024', title: 'Digital Platform', description: 'Launched full online member portal and digital services.' },
]

const values = [
  { icon: 'handshake', title: 'Integrity', description: 'We uphold the highest ethical standards in all our dealings.' },
  { icon: 'group', title: 'Community', description: 'Members are at the heart of everything we do.' },
  { icon: 'trending_up', title: 'Growth', description: 'We are committed to the financial growth of every member.' },
  { icon: 'security', title: 'Security', description: 'Your savings and data are always protected.' },
  { icon: 'balance', title: 'Transparency', description: 'Open and honest communication with all stakeholders.' },
  { icon: 'diversity_3', title: 'Inclusion', description: 'Financial services accessible to all our members.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-16 pb-24 px-4 md:px-16 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-[#EAF0FA] to-transparent opacity-50 pointer-events-none rounded-bl-[100px]" />
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col items-start gap-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E7F5EC] text-[#006d38] text-xs font-bold tracking-wide uppercase">
              <span className="material-symbols-outlined text-sm">corporate_fare</span>
              WHO WE ARE
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#00020d] leading-tight tracking-tight">
              About <span className="text-[#006d38]">Hoechem</span> SACCO
            </h1>
            <p className="text-lg text-[#45464e] max-w-lg leading-relaxed">
              Rooted in cooperative principles since 1979, we are a member-driven financial institution
              dedicated to empowering our community through secure savings, affordable credit, and
              sustainable growth.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <Link href="/membership" className="bg-[#006d38] hover:bg-[#005229] text-white text-sm font-bold px-8 py-3.5 rounded-xl transition-colors shadow inline-flex items-center gap-2">
                Join Us Today <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
              <Link href="/contact" className="bg-white border border-[#c5c6cf] hover:border-[#00020d] text-[#00020d] text-sm font-bold px-8 py-3.5 rounded-xl transition-colors shadow inline-flex items-center gap-2">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Image with Floating Badges */}
          <div className="relative w-full h-[400px] lg:h-[500px]">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDR48VPaKYKu8rRgIrpQe0bzAmd6f2xBRTBtPMqotRO8AW34Mx0oYShwhwukVSL82fv6D3qC6QeTkypkg2s8o2b3SwiMraXg5aWhvXmPzsS224gR8e7emia5b_RQxH33vS69pJ-QHFocifg6dFELSOLJjNJWtzXXP9l3EUbQgcZs_-hkeGUxISvI7loyBk8oHF7_UozIUbGrIc6j9YMde65xNEgbsYfvkBm6cQVril0KJmOzoCbn79W"
              alt="Hoechem SACCO modern corporate office building"
              fill
              className="object-cover rounded-2xl"
            />
            {/* Floating Badge 1 */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl card-shadow-lg border border-[#e1e2e4] flex items-center gap-4 w-64 animate-float">
              <div className="w-12 h-12 rounded-full bg-[#EAF0FA] flex items-center justify-center text-[#0b1b3f]">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>history_edu</span>
              </div>
              <div>
                <p className="text-xs text-[#45464e] uppercase tracking-wider">Established</p>
                <p className="text-lg font-bold text-[#00020d]">Registered 1979</p>
              </div>
            </div>
            {/* Floating Badge 2 */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl card-shadow-lg border border-[#e1e2e4] flex items-center gap-4 w-64 animate-float-reverse">
              <div className="w-12 h-12 rounded-full bg-[#E7F5EC] flex items-center justify-center text-[#006d38]">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
              </div>
              <div>
                <p className="text-xs text-[#45464e] uppercase tracking-wider">Compliance</p>
                <p className="text-lg font-bold text-[#00020d]">Regulated by SASRA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#0b1b3f] py-8 px-4 md:px-16">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 text-center divide-x divide-white/10">
          {[
            { value: '1,000+', label: 'Members' },
            { value: '45+', label: 'Years' },
            { icon: 'handshake', label: 'Driven by Values' },
            { icon: 'group', label: 'Member Focused' },
            { icon: 'trending_up', label: 'Sustainable Growth' },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center justify-center gap-2 p-2">
              {item.value ? (
                <span className="text-3xl md:text-4xl font-bold text-[#94f8af]">{item.value}</span>
              ) : (
                <span className="material-symbols-outlined text-3xl text-[#94f8af]">{item.icon}</span>
              )}
              <span className="text-xs font-semibold text-[#dae2ff] uppercase tracking-wider">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#0b1b3f] rounded-2xl p-10 text-white">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-[#94f8af] text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>flag</span>
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-[#dae2ff] leading-relaxed">
              To mobilize savings and provide affordable financial services that improve the economic welfare
              of our members through innovation, integrity, and excellence in service delivery.
            </p>
          </div>
          <div className="bg-[#006d38] rounded-2xl p-10 text-white">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-[#94f8af] text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>visibility</span>
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-[#94f8af] leading-relaxed">
              To be the premier savings and credit cooperative, recognized for empowering members with
              world-class financial solutions that drive sustainable community development.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#f2f4f6] py-20 px-4 md:px-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#00020d] tracking-tight">
              Our Core <span className="text-[#006d38]">Values</span>
            </h2>
            <p className="text-[#45464e] mt-3 max-w-xl mx-auto">
              The principles that guide everything we do for our members and community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 card-shadow hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 rounded-full bg-[#E7F5EC] flex items-center justify-center text-[#006d38] mb-4">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>{value.icon}</span>
                </div>
                <h3 className="font-bold text-[#00020d] mb-2">{value.title}</h3>
                <p className="text-[#45464e] text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-16 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[#00020d] tracking-tight">
            Our <span className="text-[#006d38]">Journey</span>
          </h2>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#e1e2e4] hidden md:block" />
          <div className="space-y-8">
            {milestones.map((m, i) => (
              <div key={i} className={`flex items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-white rounded-2xl p-6 card-shadow inline-block max-w-sm">
                    <span className="text-xs font-bold text-[#006d38] uppercase tracking-wide">{m.year}</span>
                    <h3 className="font-bold text-[#00020d] mt-1 mb-2">{m.title}</h3>
                    <p className="text-[#45464e] text-sm">{m.description}</p>
                  </div>
                </div>
                <div className="w-4 h-4 rounded-full bg-[#006d38] border-4 border-white card-shadow flex-shrink-0 hidden md:block" />
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
