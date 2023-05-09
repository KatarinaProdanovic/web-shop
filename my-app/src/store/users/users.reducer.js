
import { SET_LOGGED, SET_TOKEN, SET_USER, SET_LOGOUT } from './users.types'

const initialState = {
  token: null,
  isLogged: false,
  user: {},
  isLogout: false
}
export const tokenReducer = (state = initialState.token, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload
      }
    default:
      return state
  }
}

export const logoutReducer = (state = initialState.isLogout, action) => {
  switch (action.type) {
    case SET_LOGOUT:
      return {
        ...state,
        isLogout: action.payload
      }
    default:
      return state
  }
}

export const loggedReducer = (state = initialState.isLogged, action) => {
  switch (action.type) {
    case SET_LOGGED:
      return {
        ...state,
        isLogged: action.payload
      }
    default:
      return state
  }
}
export const addUserReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state
  }
}
