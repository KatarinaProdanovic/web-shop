import { SET_CATEGORY, UPDATE_ITEMS, UPDATE_SELECTED, UPDATE_ITEMS1 } from './articles.types'

export const initialState = {
  items: [],
  items1: [],
  selectedCategory: -1,
  selected: ''
}

export const itemsReducer = (state = initialState.items, action) => {
  switch (action.type) {
    case UPDATE_ITEMS:
      return { ...state, items: action.payload }
    default:
      return state
  }
}
export const itemsReducer1 = (state = initialState.items1, action) => {
  switch (action.type) {
    case UPDATE_ITEMS1:
      return { ...state, items1: action.payload }
    default:
      return state
  }
}
export const categoryReducer = (state = initialState.selectedCategory, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return { ...state, selectedCategory: action.payload }

    default:
      return state
  }
}
export const selectedReducer = (state = initialState.selected, action) => {
  switch (action.type) {
    case UPDATE_SELECTED:
      return { ...state, selected: action.payload }

    default:
      return state
  }
}
