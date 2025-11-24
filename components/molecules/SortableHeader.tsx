"use client"
import * as Tooltip from '@radix-ui/react-tooltip'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@store/index'
import { selectSort } from '@store/selectors'
import { toggleSort } from '@store/slices/uiSlice'
import { cn } from '@lib/utils'

type Props = {
  label: string
  sortKey: 'price' | 'change' | 'volume' | 'symbol'
  className?: string
}

export default function SortableHeader({ label, sortKey, className }: Props) {
  const dispatch = useDispatch()
  const sort = useSelector((s: RootState) => selectSort(s))
  const active = sort.key === sortKey
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button
            className={cn(
              'flex items-center gap-1 text-xs uppercase tracking-wide text-gray-400 hover:text-white transition',
              className
            )}
            onClick={() => dispatch(toggleSort(sortKey))}
          >
            {label}
            <span
              className={cn(
                'inline-block h-3 w-3',
                active && sort.direction === 'asc' && 'rotate-180'
              )}
            >
              <svg viewBox="0 0 12 12" fill="currentColor" className={cn('h-3 w-3', active ? 'opacity-100' : 'opacity-40')}>
                <path d="M6 9L1 4h10L6 9z" />
              </svg>
            </span>
          </button>
        </Tooltip.Trigger>
        <Tooltip.Content sideOffset={6} className={cn('rounded bg-white/10 px-2 py-1 text-xs text-white shadow-soft backdrop-blur')}>Click to sort</Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
