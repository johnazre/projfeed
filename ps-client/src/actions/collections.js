import axios from 'axios'

export const GET_COLLECTIONS_SUCCESS = 'GET_COLLECTIONS_SUCCESS'
export const GET_COLLECTIONS_REJECTED = 'GET_COLLECTIONS_REJECTED'

/* jshint ignore:start */
export const getCollections = () => {
  return async (dispatch) => {
    try {
      let collections = await axios.get(`http://localhost:8000/collections`)
      dispatch({
        type: GET_COLLECTIONS_SUCCESS,
        payload: collections
      })
    } catch(err) {
      dispatch({
        type: GET_COLLECTIONS_REJECTED,
        payload: err
      })
    }
  };
};
