"use client"
import * as Tabs from '@radix-ui/react-tabs'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@store/index'
import { setTab } from '@store/slices/uiSlice'
import TokenTable from './TokenTable'

export default function TabsContainer() {
  const dispatch = useDispatch()
  const tab = useSelector((s: RootState) => s.ui.activeTab)
  return (
    <Tabs.Root value={tab} onValueChange={(v: any) => dispatch(setTab(v))}>
      <Tabs.List className="mb-3 flex gap-2">
        <Tabs.Trigger value="new" className="rounded px-3 py-1.5 text-sm data-[state=active]:bg-white/10">New Pairs</Tabs.Trigger>
        <Tabs.Trigger value="final" className="rounded px-3 py-1.5 text-sm data-[state=active]:bg-white/10">Final Stretch</Tabs.Trigger>
        <Tabs.Trigger value="migrated" className="rounded px-3 py-1.5 text-sm data-[state=active]:bg-white/10">Migrated</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="new" className="mt-2">
        <TokenTable />
      </Tabs.Content>
      <Tabs.Content value="final" className="mt-2">
        <TokenTable />
      </Tabs.Content>
      <Tabs.Content value="migrated" className="mt-2">
        <TokenTable />
      </Tabs.Content>
    </Tabs.Root>
  )
}
