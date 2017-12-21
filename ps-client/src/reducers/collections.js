import {
  GET_COLLECTIONS_SUCCESS,
  GET_COLLECTIONS_REJECTED,
  ADD_COLLECTION_SUCCESS,
  ADD_COLLECTION_REJECTED
} from '../actions/collections'

export default(state = [], action) => {
  switch (action.type) {
    case GET_COLLECTIONS_SUCCESS:
      return [...action.payload.data];
    case GET_COLLECTIONS_REJECTED:
      return [...action.payload];
    case ADD_COLLECTION_SUCCESS:
      return [...state, ...action.payload.data];
    case ADD_COLLECTION_REJECTED:
      return [...action.payload];
    default:
      return state;
  }
};
