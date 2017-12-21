import axios from 'axios'

export const GET_FEEDBACKS_SUCCESS = 'GET_FEEDBACK_SUCCESS'
export const GET_FEEDBACKS_REJECTED = 'GET_FEEDBACK_REJECTED'

/* jshint ignore:start */
export const getFeedbacks = () => {
  return async (dispatch) => {
    try {
      let feedbacks = await axios.get(`http://localhost:8000/feedbacks`)
      dispatch({
        type: GET_FEEDBACKS_SUCCESS,
        payload: feedbacks
      })
    } catch(err) {
      dispatch({
        type: GET_FEEDBACKS_REJECTED,
        payload: err
      })
    }
  };
};
