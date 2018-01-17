import axios from 'axios'

export const GET_SCHOOLS_SUCCESS = 'GET_SCHOOLS_SUCCESS'
export const GET_SCHOOLS_REJECTED = 'GET_SCHOOLS_REJECTED'

/* jshint ignore:start */
export const getSchools = () => {
	return async dispatch => {
		try {
			let schools = await axios.get(`http://localhost:8000/schools`)
			dispatch({
				type: GET_SCHOOLS_SUCCESS,
				payload: schools
			})
		} catch (err) {
			dispatch({
				type: GET_SCHOOLS_REJECTED,
				payload: err
			})
		}
	}
}
