'use client'

import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  const applyTheme = (theme: 'light' | 'dark') => {
    const isDarkTheme = theme === 'dark'
    document.documentElement.classList.toggle('dark', isDarkTheme)
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('theme', theme)
    setIsDark(isDarkTheme)
  }

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme')
    const shouldUseDark = savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
    queueMicrotask(() => applyTheme(shouldUseDark ? 'dark' : 'light'))
  }, [])

  const toggleTheme = () => {
    applyTheme(isDark ? 'light' : 'dark')
  }

  return <button type="button" onClick={toggleTheme} aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'} title={isDark ? 'Light mode' : 'Dark mode'} className="theme-toggle flex h-10 w-10 items-center justify-center rounded-full bg-[#f2f4f6] text-[#0b1b3f] transition-colors hover:bg-[#e1e2e4] dark:bg-white/10 dark:text-[#94f8af] dark:hover:bg-white/20"><span className="material-symbols-outlined">{isDark ? 'light_mode' : 'dark_mode'}</span></button>
}
