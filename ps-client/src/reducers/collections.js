import {
  GET_COLLECTIONS_SUCCESS,
  GET_COLLECTIONS_REJECTED,
} from '../actions/collections'

export default(state = [], action) => {
  switch (action.type) {
    case GET_COLLECTIONS_SUCCESS:
      return [...action.payload.data];
    case GET_COLLECTIONS_REJECTED:
      return [...action.payload];
    default:
      return state;
  }
};
