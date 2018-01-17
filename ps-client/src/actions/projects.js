import axios from 'axios'

export const GET_PROJECTS_SUCCESS = 'GET_PROJECTS_SUCCESS'
export const GET_PROJECTS_REJECTED = 'GET_PROJECTS_REJECTED'

export const ADD_PROJECT_SUCCESS = 'ADD_PROJECT_SUCCESS'
export const ADD_PROJECT_REJECTED = 'ADD_PROJECT_REJECTED'

export const getProjects = () => {
	return async dispatch => {
		try {
			let projects = await axios.get(`http://localhost:8000/projects`)
			dispatch({
				type: GET_PROJECTS_SUCCESS,
				payload: projects
			})
		} catch (err) {
			dispatch({
				type: GET_PROJECTS_REJECTED,
				payload: err
			})
		}
	}
}

export const addProject = (project, history) => {
	return async dispatch => {
		try {
			let newProject = await axios.post(
				`http://localhost:8000/projects`,
				project
			)
			dispatch({
				type: ADD_PROJECT_SUCCESS,
				payload: newProject
			})
			history.push('/students/dashboard')
		} catch (err) {
			dispatch({
				type: ADD_PROJECT_REJECTED,
				payload: err
			})
		}
	}
}
