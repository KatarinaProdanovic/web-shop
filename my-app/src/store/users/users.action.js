import { SET_TOKEN, SET_LOGGED, SET_USER } from './users.types'

export const setToken = token => ({
// sa njom menjam token
  type: SET_TOKEN,
  payload: token
})

export const setLogged = isLogged => ({
  // sa njom menjam token
  type: SET_LOGGED,
  payload: isLogged
})

export const setUser = user => ({
  // sa njom menjam token
  type: SET_USER,
  payload: user
})
