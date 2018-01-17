// @flow
import axios from 'axios'

export const USER_LOGIN_PENDING = 'USER_LOGIN_PENDING'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_REJECTED = 'USER_LOGIN_REJECTED'

export const USER_SIGNUP_PENDING = 'USER_SIGNUP_PENDING'
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS'
export const USER_SIGNUP_REJECTED = 'USER_SIGNUP_REJECTED'

export const USER_LOGOUT = 'USER_LOGOUT'

type LoginCreds = {
	email: string,
	password: string
}

type SignupCreds = {
	name: string,
	email: string,
	password: string
}

type History = {
	push: Function
}

export const userLogin = (creds: LoginCreds, history: History) => {
	return async (dispatch: Dispatch) => {
		try {
			dispatch({ type: USER_LOGIN_PENDING })
			let isLoggedIn = await axios.post(
				`http://localhost:8000/auth/login`,
				creds
			)
			dispatch({
				type: USER_LOGIN_SUCCESS,
				payload: isLoggedIn
			})
			let { authed } = isLoggedIn.data
			let { role_id } = isLoggedIn.data.user
			console.log('role', role_id)
			if (role_id === 1 && authed) {
				history.push('/students/dashboard')
			} else {
				history.push('/staff/dashboard')
			}
		} catch (e) {
			dispatch({
				type: USER_LOGIN_REJECTED,
				payload: e
			})
		}
	}
}

export const userLogout = (history: History) => {
	return (dispatch: Dispatch) => {
		dispatch({ type: USER_LOGOUT })
	}
}

export const userSignup = (creds: SignupCreds, history: History) => {
	return async (dispatch: Dispatch) => {
		try {
			dispatch({ type: USER_SIGNUP_PENDING })
			let newUser = await axios.post(`http://localhost:8000/auth/signup`, creds)
			dispatch({
				type: USER_SIGNUP_SUCCESS,
				payload: newUser
			})
			history.push('/login')
		} catch (e) {
			dispatch({
				type: USER_SIGNUP_REJECTED,
				payload: e
			})
		}
	}
}
