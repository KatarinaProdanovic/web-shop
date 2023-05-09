import { createStore, combineReducers } from 'redux'
import { categoryReducer, itemsReducer, selectedReducer, itemsReducer1 } from './articles/articles.reducer'
import { tokenReducer, loggedReducer, addUserReducer } from './users/users.reducer'
const rootReducer = combineReducers({
  selectedCategory: categoryReducer,
  items: itemsReducer,
  items1: itemsReducer1,
  selected: selectedReducer,
  token: tokenReducer,
  isLogged: loggedReducer,
  user: addUserReducer
})

const store = createStore(rootReducer)

export default store
