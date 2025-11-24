"use client"
import { cn, formatPercent } from '@lib/utils'

type Props = {
  change: number
}

export default function ChangeCell({ change }: Props) {
  const up = change >= 0
  return (
    <div
      className={cn(
        'rounded-sm px-2 py-1 text-right min-w-[100px]',
        up ? 'text-green-400' : 'text-red-400'
      )}
    >
      {formatPercent(change)}
    </div>
  )
}
