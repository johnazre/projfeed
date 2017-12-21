import axios from 'axios'

export const GET_PROJECTS_SUCCESS = 'GET_PROJECTS_SUCCESS'
export const GET_PROJECTS_REJECTED = 'GET_PROJECTS_REJECTED'

/* jshint ignore:start */
export const getProjects = () => {
  return async (dispatch) => {
    try {
      let projects = await axios.get(`http://localhost:8000/projects`)
      dispatch({
        type: GET_PROJECTS_SUCCESS,
        payload: projects
      })
    } catch(err) {
      dispatch({
        type: GET_PROJECTS_REJECTED,
        payload: err
      })
    }
  };
};
