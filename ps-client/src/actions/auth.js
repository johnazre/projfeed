import axios from 'axios'

export const USER_LOGIN_PENDING = 'USER_LOGIN_PENDING'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_REJECTED = 'USER_LOGIN_REJECTED'

export const USER_SIGNUP_PENDING = 'USER_SIGNUP_PENDING'
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS'
export const USER_SIGNUP_REJECTED = 'USER_SIGNUP_REJECTED'

export const USER_LOGOUT = 'USER_LOGOUT'

export const userLogin = (creds) => {
  return async (dispatch) => {
    try {
      dispatch({type: USER_LOGIN_PENDING})
      let isLoggedIn = await axios.post(`http://localhost:8000/auth/login`, creds)
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: isLoggedIn
      })
    } catch(e) {
      dispatch({
        type: USER_LOGIN_REJECTED,
        payload: e
      })
    }
  }
}

export const userLogout = (creds) => {
  return (dispatch) => {
    dispatch({type: USER_LOGOUT})
  }
}

export const userSignup = (creds) => {
  return async (dispatch) => {
    try {
      dispatch({type: USER_SIGNUP_PENDING})
      let newUser = await axios.post(`http://localhost:8000/auth/signup`, creds)
      dispatch({
        type: USER_SIGNUP_SUCCESS,
        payload: newUser
      })
    } catch(e) {
      dispatch({
        type: USER_SIGNUP_REJECTED,
        payload: e
      })
    }
  }
}
