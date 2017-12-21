import {
USER_LOGIN_PENDING,
USER_LOGIN_SUCCESS,
USER_LOGIN_REJECTED,
USER_SIGNUP_PENDING,
USER_SIGNUP_SUCCESS,
USER_SIGNUP_REJECTED
} from '../actions/auth'

export default(state = {}, action) => {
switch (action.type) {
  case USER_LOGIN_PENDING:
    return state;
  case USER_LOGIN_SUCCESS:
    return state;
  case USER_LOGIN_REJECTED:
    return state;
  case USER_SIGNUP_PENDING:
    return state;
  case USER_SIGNUP_SUCCESS:
    return state;
  case USER_SIGNUP_REJECTED:
    return state;
  default:
    return state;
}
};
