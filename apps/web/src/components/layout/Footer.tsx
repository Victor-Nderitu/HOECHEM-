import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0b1b3f] text-white">
      <div className="max-w-[1200px] mx-auto px-4 md:px-16 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="col-span-1 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#94f8af] text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              account_balance
            </span>
            <span className="text-xl font-extrabold text-[#94f8af] tracking-tight">Hoechem SACCO Ltd.</span>
          </div>
          <p className="text-[#e1e2e4] text-sm leading-relaxed max-w-xs opacity-90">
            Together, We Build Better Futures. Empowering our members through reliable financial services since 1979.
          </p>
          <div className="flex gap-3 mt-2">
            <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Facebook">
              <span className="material-symbols-outlined text-sm">public</span>
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Twitter">
              <span className="material-symbols-outlined text-sm">alternate_email</span>
            </a>
            <a href="tel:+254700000000" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Phone">
              <span className="material-symbols-outlined text-sm">call</span>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3">
          <h4 className="text-base font-bold text-white mb-1">Quick Links</h4>
          {[
            { href: '/', label: 'Home' },
            { href: '/about', label: 'About Us' },
            { href: '/membership', label: 'Membership' },
            { href: '/faq', label: 'FAQ' },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="text-[#e1e2e4] text-sm hover:text-[#94f8af] transition-colors opacity-90 hover:opacity-100">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Services */}
        <div className="flex flex-col gap-3">
          <h4 className="text-base font-bold text-white mb-1">Services</h4>
          {[
            { href: '/loans', label: 'Loan Products' },
            { href: '/savings', label: 'Savings Accounts' },
            { href: '/news', label: 'News & Events' },
            { href: '/resources', label: 'Resources' },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="text-[#e1e2e4] text-sm hover:text-[#94f8af] transition-colors opacity-90 hover:opacity-100">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3">
          <h4 className="text-base font-bold text-white mb-1">Get In Touch</h4>
          <a href="tel:+254700000000" className="flex items-center gap-2 text-[#e1e2e4] text-sm hover:text-[#94f8af] transition-colors">
            <span className="material-symbols-outlined text-sm">call</span>
            +254 700 000 000
          </a>
          <a href="mailto:info@hoechemsacco.com" className="flex items-center gap-2 text-[#e1e2e4] text-sm hover:text-[#94f8af] transition-colors">
            <span className="material-symbols-outlined text-sm">mail</span>
            info@hoechemsacco.com
          </a>
          <p className="flex items-start gap-2 text-[#e1e2e4] text-sm">
            <span className="material-symbols-outlined text-sm mt-0.5">location_on</span>
            Nairobi, Kenya
          </p>
          <Link
            href="/login"
            className="mt-2 bg-[#94f8af] text-[#00210d] text-sm font-bold px-4 py-2.5 rounded-xl text-center hover:bg-[#78db95] transition-colors"
          >
            Member Portal →
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-4 md:px-16 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[#e1e2e4] text-xs opacity-75">
            © {currentYear} Hoechem SACCO Ltd. Together, We Build Better Futures.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-[#e1e2e4] text-xs hover:text-[#94f8af] transition-colors opacity-75 hover:opacity-100">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[#e1e2e4] text-xs hover:text-[#94f8af] transition-colors opacity-75 hover:opacity-100">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
