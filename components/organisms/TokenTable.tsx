"use client"
import SortableHeader from '@components/molecules/SortableHeader'
import Skeleton from '@components/atoms/Skeleton'
import { useQuery } from '@tanstack/react-query'
import { getTokens } from '@lib/api/tokens'
import { useSelector } from 'react-redux'
import { RootState } from '@store/index'
import { useEffect, useMemo, useState } from 'react'
import { useSortedTokens } from '@lib/hooks/useSortedTokens'
import TokenRow from '@components/molecules/TokenRow'

export default function TokenTable() {
  const tab = useSelector((s: RootState) => s.ui.activeTab)
  const { data, isLoading, isError } = useQuery({
    queryKey: ['tokens', tab],
    queryFn: () => getTokens(tab)
  })
  const tokens = useMemo(() => data?.data ?? [], [data])
  const sorted = useSortedTokens(tokens)
  const [progressCount, setProgressCount] = useState(0)
  const [displayCount, setDisplayCount] = useState(0)

  useEffect(() => {
    setProgressCount(0)
    if (isLoading) {
      const id = setInterval(() => {
        setProgressCount(p => (p < 8 ? p + 2 : 8))
      }, 150)
      return () => clearInterval(id)
    }
  }, [isLoading, tab])

  useEffect(() => {
    if (!isLoading) {
      setDisplayCount(8)
      const id = setInterval(() => {
        setDisplayCount(c => {
          const next = c + 8
          return next >= sorted.length ? sorted.length : next
        })
      }, 200)
      return () => clearInterval(id)
    }
  }, [isLoading, sorted.length])

  if (isError) {
    return <div className="rounded bg-red-500/10 p-3 text-sm text-red-300">Failed to load tokens</div>
  }

  return (
    <div className="rounded-lg bg-brand.surface p-3 shadow-soft overflow-x-auto">
      <div className="min-w-[820px]">
        <div className="grid grid-cols-[180px_1fr_120px_100px_140px] items-center gap-3 border-b border-white/10 px-3 pb-2">
          <div className="text-xs uppercase tracking-wide text-gray-400">Token</div>
          <div className="text-xs uppercase tracking-wide text-gray-400">Status</div>
          <SortableHeader label="Price" sortKey="price" className="justify-end" />
          <SortableHeader label="24h" sortKey="change" className="justify-end" />
          <SortableHeader label="Volume" sortKey="volume" className="justify-end" />
        </div>
      {isLoading && (
        <div className="mt-2 space-y-2">
          {Array.from({ length: progressCount }).map((_, i) => (
            <Skeleton key={i} className="h-10 w-full" />
          ))}
        </div>
      )}
      {!isLoading && (
        <div className="mt-2 space-y-1">
          {sorted.slice(0, displayCount).map(t => (
            <TokenRow key={t.symbol} token={t} />
          ))}
        </div>
      )}
      </div>
    </div>
  )
}
