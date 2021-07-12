import { SET_LOGIN_STATUS } from '../constants/actionTypes';

export const setLoginStatus = (isLogin) => {
  return { type: SET_LOGIN_STATUS, isLogin };
};
