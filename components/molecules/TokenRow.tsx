"use client"
import * as Dialog from '@radix-ui/react-dialog'
import * as Popover from '@radix-ui/react-popover'
import PriceCell from './PriceCell'
import ChangeCell from './ChangeCell'
import Badge from '@components/atoms/Badge'
import { Token } from '@lib/types'
import { formatPrice } from '@lib/utils'
import { useWebSocketPrice } from '@lib/hooks/useWebSocketPrices'
import { memo } from 'react'

type Props = {
  token: Token
}

function Row({ token }: Props) {
  const { price } = useWebSocketPrice(token.symbol, token.price)
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div className="grid grid-cols-[180px_1fr_120px_100px_140px] max-md:grid-cols-[180px_1fr_120px] items-center gap-3 rounded-md px-3 py-2 hover:bg-white/5">
          <div className="flex items-center gap-2">
            <img src={token.logoUrl} alt={token.symbol} className="h-6 w-6 rounded" />
            <div className="flex flex-col">
              <span className="text-sm font-medium">{token.symbol}</span>
              <span className="text-xs text-gray-400">{token.name}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant={token.status === 'new' ? 'success' : token.status === 'migrated' ? 'muted' : 'default'}>
              {token.status === 'new' ? 'New' : token.status === 'migrated' ? 'Migrated' : 'Final Stretch'}
            </Badge>
            <Popover.Root>
              <Popover.Trigger className="rounded bg-white/10 px-2 py-1 text-xs text-white">Info</Popover.Trigger>
              <Popover.Content sideOffset={8} className="rounded border border-white/10 bg-brand.surface p-3 text-xs text-white shadow-soft">
                24h Vol {formatPrice(token.volume24h)}
              </Popover.Content>
            </Popover.Root>
          </div>
          <PriceCell symbol={token.symbol} price={price} />
          <ChangeCell change={token.change24h} />
          <div className="text-right text-sm text-gray-300 min-w-[140px] max-md:hidden">{formatPrice(token.volume24h)}</div>
        </div>
      </Dialog.Trigger>
      <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-brand.surface p-6 shadow-soft">
        <Dialog.Title className="text-lg font-semibold">{token.name}</Dialog.Title>
        <Dialog.Description className="mt-2 text-sm text-gray-400">{token.symbol} details</Dialog.Description>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="rounded bg-white/5 p-3">
            <div className="text-xs text-gray-400">Price</div>
            <div className="mt-1 text-base">{formatPrice(price)}</div>
          </div>
          <div className="rounded bg-white/5 p-3">
            <div className="text-xs text-gray-400">24h Change</div>
            <div className="mt-1 text-base">{token.change24h.toFixed(2)}%</div>
          </div>
        </div>
        <Dialog.Close className="mt-6 inline-flex rounded bg-white/10 px-3 py-1.5 text-sm">Close</Dialog.Close>
      </Dialog.Content>
    </Dialog.Root>
  )
}

export default memo(Row)
