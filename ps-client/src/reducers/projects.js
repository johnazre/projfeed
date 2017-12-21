import {
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_REJECTED,
  ADD_PROJECT_SUCCESS,
  ADD_PROJECT_REJECTED,
} from '../actions/projects'

export default(state = [], action) => {
  switch (action.type) {
    case GET_PROJECTS_SUCCESS:
      return [...action.payload.data];
    case GET_PROJECTS_REJECTED:
      return [...action.payload];
    case ADD_PROJECT_SUCCESS:
      return [...state, ...action.payload.data];
    case ADD_PROJECT_REJECTED:
      return [...action.payload];
    default:
      return state;
  }
};
