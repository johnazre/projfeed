// @flow

import axios from 'axios'

export const GET_COLLECTIONS_SUCCESS = 'GET_COLLECTIONS_SUCCESS'
export const GET_COLLECTIONS_REJECTED = 'GET_COLLECTIONS_REJECTED'

export const ADD_COLLECTION_SUCCESS = 'ADD_COLLECTION_SUCCESS'
export const ADD_COLLECTION_REJECTED = 'ADD_COLLECTION_REJECTED'

/* jshint ignore:start */
export const getCollections = () => {
	return async (dispatch: Dispatch) => {
		try {
			let collections = await axios.get(`http://localhost:8000/collections`)
			dispatch({
				type: GET_COLLECTIONS_SUCCESS,
				payload: collections
			})
		} catch (err) {
			dispatch({
				type: GET_COLLECTIONS_REJECTED,
				payload: err
			})
		}
	}
}

export const addCollection = (collection, history) => {
	return async (dispatch: Dispatch) => {
		try {
			let newCollection = await axios.post(
				`http://localhost:8000/collections`,
				collection
			)
			dispatch({
				type: ADD_COLLECTION_SUCCESS,
				payload: newCollection
			})
			history.push('/staff/dashboard')
		} catch (err) {
			dispatch({
				type: ADD_COLLECTION_REJECTED,
				payload: err
			})
		}
	}
}
