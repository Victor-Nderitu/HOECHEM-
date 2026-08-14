import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number, currency = 'KES'): string {
  return `${currency} ${amount.toLocaleString('en-KE', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  })}`
}

export function formatDate(date: string | Date, format = 'long'): string {
  const d = typeof date === 'string' ? new Date(date) : date
  if (format === 'long') {
    return d.toLocaleDateString('en-KE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }
  if (format === 'short') {
    return d.toLocaleDateString('en-KE', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }
  return d.toISOString().split('T')[0]
}

export function formatRelativeDate(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date
  const now = new Date()
  const diffMs = now.getTime() - d.getTime()
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  if (diffDays === 0) return 'Today'
  if (diffDays === 1) return 'Yesterday'
  if (diffDays < 7) return `${diffDays} days ago`
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`
  return `${Math.floor(diffDays / 365)} years ago`
}

export function calculateLoanEligibility(savingsBalance: number, multiplier = 3): number {
  return savingsBalance * multiplier
}

export function calculateMonthlyInstallment(
  principal: number,
  annualRate: number,
  termMonths: number
): number {
  const monthlyRate = annualRate / 100 / 12
  if (monthlyRate === 0) return principal / termMonths
  const factor = Math.pow(1 + monthlyRate, termMonths)
  return (principal * monthlyRate * factor) / (factor - 1)
}

export function generateRepaymentSchedule(
  principal: number,
  annualRate: number,
  termMonths: number,
  startDate: Date = new Date()
) {
  const monthlyRate = annualRate / 100 / 12
  const monthlyPayment = calculateMonthlyInstallment(principal, annualRate, termMonths)
  const schedule = []
  let balance = principal

  for (let month = 1; month <= termMonths; month++) {
    const interestAmount = balance * monthlyRate
    const principalAmount = monthlyPayment - interestAmount
    const openingBalance = balance
    balance = Math.max(0, balance - principalAmount)

    const dueDate = new Date(startDate)
    dueDate.setMonth(dueDate.getMonth() + month)

    schedule.push({
      month,
      dueDate: dueDate.toISOString().split('T')[0],
      openingBalance: Math.round(openingBalance * 100) / 100,
      principal: Math.round(principalAmount * 100) / 100,
      interest: Math.round(interestAmount * 100) / 100,
      installment: Math.round(monthlyPayment * 100) / 100,
      closingBalance: Math.round(balance * 100) / 100,
    })
  }

  return schedule
}

export function truncate(str: string, length = 50): string {
  if (str.length <= length) return str
  return str.slice(0, length) + '...'
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export function debounce<T extends (...args: unknown[]) => unknown>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>
  return (...args: Parameters<T>) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}
