import { USER_ACTION_TYPES } from './user.types';

export const createAction = (type, payload) => ({ type, payload });

export const login = () => createAction(USER_ACTION_TYPES.LOG_IN);

export const addcart = () => createAction(USER_ACTION_TYPES.ADD_CART);

export const showcart = () => createAction(USER_ACTION_TYPES.SHOW_CART);

//create a fake api call
// const fakeApiCall = (number) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (number > 0) {
//         resolve(number);
//       } else {
//         reject('Number must be greater than 0');
//       }
//     }, 2000);
//   });
// };

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
