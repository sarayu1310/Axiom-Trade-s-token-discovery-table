"use client"
import { cn, formatPrice } from '@lib/utils'
import { useEffect, useRef, useState } from 'react'

type Props = {
  symbol: string
  price: number
}

export default function PriceCell({ symbol, price }: Props) {
  const prev = useRef(price)
  const [pulse, setPulse] = useState<'up' | 'down' | undefined>(undefined)
  useEffect(() => {
    const dir = price >= prev.current ? 'up' : 'down'
    setPulse(dir)
    const id = setTimeout(() => setPulse(undefined), 500)
    prev.current = price
    return () => clearTimeout(id)
  }, [price])
  return (
    <div
      className={cn(
        'fade-up tabular-nums rounded-sm px-2 py-1 text-right min-w-[120px] max-md:min-w-[90px]',
        pulse === 'up' && 'price-up',
        pulse === 'down' && 'price-down'
      )}
      aria-label={`${symbol} price`}
    >
      {formatPrice(price)}
    </div>
  )
}
