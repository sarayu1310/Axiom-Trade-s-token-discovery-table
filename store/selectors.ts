import { createSelector } from 'reselect'
import { RootState } from './index'

export const selectUI = (s: RootState) => s.ui
export const selectSort = createSelector(selectUI, ui => ui.sort)
export const selectActiveTab = createSelector(selectUI, ui => ui.activeTab)
