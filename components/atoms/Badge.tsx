"use client"
import { cn } from '@lib/utils'

type Props = {
  children: React.ReactNode
  variant?: 'default' | 'success' | 'danger' | 'muted'
}

export default function Badge({ children, variant = 'default' }: Props) {
  const styles = cn(
    'inline-flex items-center rounded px-2 py-0.5 text-xs font-medium',
    variant === 'default' && 'bg-white/10 text-white',
    variant === 'success' && 'bg-green-500/20 text-green-300',
    variant === 'danger' && 'bg-red-500/20 text-red-300',
    variant === 'muted' && 'bg-white/5 text-gray-300'
  )
  return <span className={styles}>{children}</span>
}
