import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_REJECTED,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_REJECTED,
  USER_LOGOUT,
  IS_AUTHED
} from '../actions/auth'

let initialState = {
  authed: false,
  user: {},
  showLoginError: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      localStorage.setItem('user', JSON.stringify(action.payload.data))
      return {
        ...state,
        user: JSON.parse(localStorage.getItem('user')).user,
        authed: true
      }
    case USER_LOGIN_REJECTED:
      return { ...state, showLoginError: true }
    case USER_SIGNUP_SUCCESS:
      return state
    case USER_SIGNUP_REJECTED:
      return state
    case USER_LOGOUT:
      localStorage.removeItem('user')
      return { ...state, user: {}, authed: false }
    case IS_AUTHED:
      return localStorage.getItem('user')
        ? {
            ...state,
            authed: true,
            user: JSON.parse(localStorage.getItem('user')).user
          }
        : { ...state, authed: false, user: {} }
    default:
      return state
  }
}
