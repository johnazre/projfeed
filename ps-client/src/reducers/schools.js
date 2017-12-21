import {
  GET_SCHOOLS_SUCCESS,
  GET_SCHOOLS_REJECTED,
} from '../actions/schools'

export default(state = [], action) => {
  switch (action.type) {
    case GET_SCHOOLS_SUCCESS:
      return [...action.payload.data];
    case GET_SCHOOLS_REJECTED:
      return [...action.payload];
    default:
      return state;
  }
};
