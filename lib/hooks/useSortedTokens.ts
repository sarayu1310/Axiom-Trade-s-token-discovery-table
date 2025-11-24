"use client"
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import type { Token } from '../types'
import { RootState } from '@store/index'

export function useSortedTokens(tokens: Token[]) {
  const sort = useSelector((s: RootState) => s.ui.sort)
  return useMemo(() => {
    const arr = [...tokens]
    arr.sort((a, b) => {
      let av: number | string = 0
      let bv: number | string = 0
      if (sort.key === 'price') {
        av = a.price
        bv = b.price
      } else if (sort.key === 'change') {
        av = a.change24h
        bv = b.change24h
      } else if (sort.key === 'volume') {
        av = a.volume24h
        bv = b.volume24h
      } else {
        av = a.symbol
        bv = b.symbol
      }
      if (av < bv) return sort.direction === 'asc' ? -1 : 1
      if (av > bv) return sort.direction === 'asc' ? 1 : -1
      return 0
    })
    return arr
  }, [tokens, sort])
}
