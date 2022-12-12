import { USER_ACTION_TYPES } from './user.types';

const INITIAL_STATE = {
  count: 0,
  loading: false,
  error: false,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.LOG_IN:
      return {};
    case USER_ACTION_TYPES.ADD_CART:
      return {};
    case USER_ACTION_TYPES.SHOW_CART:
      return {};

    // case COUNTER_ACTION_TYPES.SET_COUNT_START:
    //   return {
    //     ...state,
    //     error: false,
    //     loading: true,
    //   };
    // case COUNTER_ACTION_TYPES.SET_COUNT_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     count: payload,
    //   };

    // case COUNTER_ACTION_TYPES.SET_COUNT_FAILURE:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: payload,
    //   };
    default:
      return state;
  }
};
