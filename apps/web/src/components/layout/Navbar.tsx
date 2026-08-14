'use client'

import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/membership', label: 'Membership' },
  { href: '/loans', label: 'Loans' },
  { href: '/savings', label: 'Savings' },
  { href: '/news', label: 'News & Events' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact Us' },
]

interface NavbarProps {
  activePage?: string
}

export function Navbar({ activePage = 'home' }: NavbarProps) {
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <>
      {/* Utility Bar */}
      <div className="hidden md:flex bg-[#0b1b3f] h-10 w-full items-center justify-between px-16 text-white text-xs font-semibold tracking-wide z-50 relative">
        <div className="flex items-center gap-4">
          <a href="tel:+254700000000" className="hover:text-[#94f8af] transition-colors flex items-center gap-1.5">
            <span className="material-symbols-outlined text-base">call</span>
            +254 700 000 000
          </a>
          <a href="mailto:info@hoechemsacco.com" className="hover:text-[#94f8af] transition-colors flex items-center gap-1.5">
            <span className="material-symbols-outlined text-base">mail</span>
            info@hoechemsacco.com
          </a>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="hover:text-[#94f8af] transition-colors">Member Login</Link>
          <Link href="/membership" className="hover:text-[#94f8af] transition-colors">Join SACCO</Link>
        </div>
      </div>

      {/* Main Nav */}
      <header className="fixed top-0 md:top-10 w-full z-50 flex flex-col items-center px-4 md:px-16 bg-white border-b border-[#c5c6cf] shadow-sm h-20 justify-center transition-all">
        <div className="flex items-center justify-between w-full max-w-[1200px] mx-auto h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#006d38] filled text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              account_balance
            </span>
            <span className="text-2xl font-extrabold text-[#00020d] tracking-tight hidden sm:block">
              Hoechem SACCO Ltd.
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 h-full">
            {navLinks.map((link) => {
              const isActive = activePage === link.label.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm h-full flex items-center px-1 border-b-2 transition-colors duration-200 ${
                    isActive
                      ? 'text-[#006d38] font-bold border-[#006d38]'
                      : 'text-[#45464e] font-normal border-transparent hover:text-[#006d38]'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="hidden lg:flex items-center justify-center bg-[#0b1b3f] text-white px-5 py-2 rounded-xl text-xs font-bold tracking-wide hover:bg-[#1a3060] transition-all shadow"
            >
              Member Portal
            </Link>
            <button
              className="md:hidden text-[#00020d] p-2"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-[60] backdrop-blur-sm transition-opacity"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <aside
        className={`fixed left-0 top-0 h-full w-80 z-[70] bg-white overflow-y-auto transform transition-transform duration-300 shadow-xl rounded-r-2xl flex flex-col ${
          drawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-5 border-b border-[#e1e2e4]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-[#94f8af] flex items-center justify-center font-bold text-[#006d38] text-lg">
              HS
            </div>
            <div>
              <h3 className="font-semibold text-[#00020d]">Member Services</h3>
              <p className="text-xs text-[#45464e]">Secure Financial Solutions</p>
            </div>
          </div>
          <button
            className="absolute top-4 right-4 text-[#45464e] p-2"
            onClick={() => setDrawerOpen(false)}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <nav className="flex-1 py-4 flex flex-col gap-1">
          {navLinks.map((link) => {
            const icon = {
              '/': 'home',
              '/about': 'info',
              '/membership': 'group',
              '/loans': 'payments',
              '/savings': 'savings',
              '/news': 'event',
              '/resources': 'description',
              '/contact': 'mail',
            }[link.href] || 'chevron_right'

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setDrawerOpen(false)}
                className="flex items-center gap-4 text-[#45464e] mx-2 my-0.5 px-4 py-3 rounded-xl hover:bg-[#f2f4f6] transition-all"
              >
                <span className="material-symbols-outlined">{icon}</span>
                <span className="text-sm font-medium">{link.label}</span>
              </Link>
            )
          })}
        </nav>

        <div className="p-5 border-t border-[#e1e2e4]">
          <Link
            href="/login"
            className="w-full bg-[#0b1b3f] text-white text-sm font-bold px-6 py-3 rounded-xl shadow block text-center"
            onClick={() => setDrawerOpen(false)}
          >
            Member Portal
          </Link>
        </div>
      </aside>
    </>
  )
}
