import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type TabKey = 'new' | 'final' | 'migrated'
export type SortKey = 'price' | 'change' | 'volume' | 'symbol'

type SortState = {
  key: SortKey
  direction: 'asc' | 'desc'
}

type UIState = {
  activeTab: TabKey
  sort: SortState
  selectedSymbol?: string
}

const initialState: UIState = {
  activeTab: 'new',
  sort: { key: 'volume', direction: 'desc' }
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setTab(state, action: PayloadAction<TabKey>) {
      state.activeTab = action.payload
    },
    setSort(state, action: PayloadAction<SortState>) {
      state.sort = action.payload
    },
    toggleSort(state, action: PayloadAction<SortKey>) {
      const key = action.payload
      if (state.sort.key === key) {
        state.sort.direction = state.sort.direction === 'asc' ? 'desc' : 'asc'
      } else {
        state.sort.key = key
        state.sort.direction = 'desc'
      }
    },
    selectSymbol(state, action: PayloadAction<string | undefined>) {
      state.selectedSymbol = action.payload
    }
  }
})

export const { setTab, setSort, toggleSort, selectSymbol } = uiSlice.actions
export default uiSlice.reducer
