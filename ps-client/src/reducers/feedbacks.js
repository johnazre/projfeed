import {
  GET_FEEDBACKS_SUCCESS,
  GET_FEEDBACKS_REJECTED,
} from '../actions/feedbacks'

export default(state = [], action) => {
  switch (action.type) {
    case GET_FEEDBACKS_SUCCESS:
      return [...action.payload.data];
    case GET_FEEDBACKS_REJECTED:
      return [...action.payload];
    default:
      return state;
  }
};
