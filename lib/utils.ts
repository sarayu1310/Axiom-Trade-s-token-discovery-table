import { clsx } from 'clsx'

export function cn(...args: any[]) {
  return clsx(args)
}

export function formatPrice(n: number) {
  const v = Math.abs(n) < 1 ? n : Math.round(n * 100) / 100
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(v)
}

export function formatPercent(n: number) {
  return `${n > 0 ? '+' : ''}${n.toFixed(2)}%`
}

export function truncate(s: string, max: number) {
  if (s.length <= max) return s
  return s.slice(0, max - 1) + '…'
}
