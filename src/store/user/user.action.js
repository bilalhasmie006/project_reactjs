import { login } from '../services/user/user.services';
import { USER_ACTION_TYPES } from './user.types';

export const createAction = (type, payload) => ({ type, payload });

export const userscart = () => createAction(USER_ACTION_TYPES.USERS_CART); //ye wala data mainpage

export const userLoginStart = () =>
  createAction(USER_ACTION_TYPES.USER_LOGIN_START);
export const userLoginSuccess = (payload) =>
  createAction(USER_ACTION_TYPES.USER_LOGIN_SUCCESS, payload);
export const userLoginFailed = (error) =>
  createAction(USER_ACTION_TYPES.USER_LOGIN_FAILED, error);

export const userLoginStartAsync = (data) => {
  return async (dispatch) => {
    dispatch(userLoginStart());
    try {
      const res = await login(data);

      dispatch(
        userLoginSuccess({
          data: res.data,
          message: res.message,
        })
      );
    } catch (error) {
      dispatch(userLoginFailed(data.message));
    }
  };
};

//create a fake api call

// export const setCountStartAsync = (number) => {
//   return async (dispatch) => {
//     dispatch(setCountStart());
//     try {
//       const res = await fakeApiCall(number);

//       dispatch(setCountSuccess(res));
//     } catch (error) {
//       dispatch(setCountFailure(error));
//     }
//   };
// };
