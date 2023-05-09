import { SET_CATEGORY, UPDATE_ITEMS, UPDATE_SELECTED, UPDATE_ITEMS1 } from './articles.types'

export const setCategory = selectedCategory => ({
  type: SET_CATEGORY,
  payload: selectedCategory
})

export const updateItems = items => ({
  type: UPDATE_ITEMS,
  payload: items
})

export const updateItems1 = items1 => ({
  type: UPDATE_ITEMS1,
  payload: items1
})
export const updateSelect = selected => ({
  type: UPDATE_SELECTED,
  payload: selected
})
