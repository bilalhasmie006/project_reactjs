import { USER_ACTION_TYPES } from './user.types';

export const createAction = (type, payload) => ({ type, payload });

export const USERNAME = () => createAction(USER_ACTION_TYPES.USERNAME);

export const PASSWORD = () => createAction(USER_ACTION_TYPES.PASSWORD);

export const userscart = () => createAction(USER_ACTION_TYPES.USERS_CART); //ye wala data mainpage

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
