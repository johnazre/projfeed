import {
  GET_FEEDBACKS_SUCCESS,
  GET_FEEDBACKS_REJECTED,
  ADD_FEEDBACK_SUCCESS,
  ADD_FEEDBACK_REJECTED
} from '../actions/feedbacks'

export default(state = [], action) => {
  switch (action.type) {
    case GET_FEEDBACKS_SUCCESS:
      return [...state, ...action.payload.data];
    case GET_FEEDBACKS_REJECTED:
      return [...action.payload];
    case ADD_FEEDBACK_SUCCESS:
      return [...state, ...action.payload.data];
    case ADD_FEEDBACK_REJECTED:
      return [...action.payload];
    default:
      return state;
  }
};
