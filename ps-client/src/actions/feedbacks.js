import axios from 'axios'

export const GET_FEEDBACKS_SUCCESS = 'GET_FEEDBACKS_SUCCESS'
export const GET_FEEDBACKS_REJECTED = 'GET_FEEDBACKS_REJECTED'

export const ADD_FEEDBACK_SUCCESS = 'ADD_FEEDBACK_SUCCESS'
export const ADD_FEEDBACK_REJECTED = 'ADD_FEEDBACK_REJECTED'

/* jshint ignore:start */
export const getFeedbacks = () => {
	return async dispatch => {
		try {
			let feedbacks = await axios.get(`http://localhost:8000/feedbacks`)
			dispatch({
				type: GET_FEEDBACKS_SUCCESS,
				payload: feedbacks
			})
		} catch (err) {
			dispatch({
				type: GET_FEEDBACKS_REJECTED,
				payload: err
			})
		}
	}
}

export const addFeedback = (feedback, history, collectionId) => {
	return async dispatch => {
		try {
			let newFeedback = await axios.post(
				`http://localhost:8000/feedbacks`,
				feedback
			)
			dispatch({
				type: ADD_FEEDBACK_SUCCESS,
				payload: newFeedback
			})
			history.push(`/collections/${collectionId}`)
		} catch (e) {
			dispatch({ type: ADD_FEEDBACK_REJECTED, payload: e })
		}
	}
}
