"use client"
import { cn } from '@lib/utils'

type Props = {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export default function Button({ children, className, onClick }: Props) {
  return (
    <button
      className={cn(
        'inline-flex items-center gap-1 rounded-md bg-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/20 transition',
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
