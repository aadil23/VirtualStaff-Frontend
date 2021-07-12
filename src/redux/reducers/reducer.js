import { SET_LOGIN_STATUS } from '../constants/actionTypes';
import initialState from '../store/initialState';

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_STATUS: {
      return Object.assign({}, state, {
        isLogin: action.isLogin,
      });
    }
    default:
      return state;
  }
};
export default loginReducer;
