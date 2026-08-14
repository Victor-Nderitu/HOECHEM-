import Image from 'next/image'
import Link from 'next/link'

const quickLinks = [
  { href: '/', label: 'Home' }, { href: '/about', label: 'About Us' },
  { href: '/membership', label: 'Membership' }, { href: '/loans', label: 'Loans' },
  { href: '/savings', label: 'Savings' }, { href: '/downloads', label: 'Downloads' },
  { href: '/news', label: 'News' }, { href: '/contact', label: 'Contact Us' }, { href: '/appointments', label: 'Book Appointment' },
]

export function Footer() {
  return <footer className="bg-[#0b1b3f] text-white"><div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 px-4 py-14 md:grid-cols-3 md:px-16">
    <div className="flex flex-col gap-4"><div className="relative h-20 w-64 overflow-hidden"><Image src="/hoechem-logo-transparent.png" alt="Hoechem SACCO Ltd." width={1024} height={1024} className="absolute left-1/2 top-1/2 w-[260px] max-w-none -translate-x-1/2 -translate-y-1/2" /></div><p className="max-w-xs text-sm leading-relaxed text-[#e1e2e4]">Together, We Build Better Futures. Empowering our members through reliable financial services.</p><div><h4 className="mb-3 font-bold">Follow Us</h4><div className="flex flex-wrap gap-2">{['Facebook', 'Instagram', 'LinkedIn', 'TikTok'].map((platform) => <a key={platform} href="#" aria-label={platform} className="rounded-full bg-white/10 px-3 py-1.5 text-xs hover:bg-white/20">{platform}</a>)}</div></div></div>
    <div><h4 className="mb-4 font-bold">Quick Links</h4><nav className="grid grid-cols-2 gap-x-4 gap-y-3">{quickLinks.map((link) => <Link key={link.href} href={link.href} className="text-sm text-[#e1e2e4] hover:text-[#94f8af]">{link.label}</Link>)}</nav></div>
    <div className="space-y-3"><h4 className="font-bold">Contact</h4><p className="text-sm text-[#e1e2e4]">Hoechem SACCO Ltd</p><a href="tel:+254703753777" className="block text-sm text-[#e1e2e4] hover:text-[#94f8af]">+254 703 753 777</a><a href="mailto:info@hoechemsacco.co.ke" className="block text-sm text-[#e1e2e4] hover:text-[#94f8af]">info@hoechemsacco.co.ke</a><a href="mailto:hoechem@gmail.com" className="block text-sm text-[#e1e2e4] hover:text-[#94f8af]">hoechem@gmail.com</a><p className="text-sm text-[#e1e2e4]">Mon–Fri, 8:00am–4:45pm</p></div>
  </div><div className="border-t border-white/10 py-5 text-center text-xs text-[#e1e2e4]">© 2026 Hoechem SACCO Ltd.</div></footer>
}
