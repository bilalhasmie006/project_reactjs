import { userscart } from './user.action';
import { USER_ACTION_TYPES } from './user.types';

const INITIAL_STATE = {
  user: '',
  password: '',
  error: false,

};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.USERNAME:
      return {
        ...state,
        loading=true
if(USER_ACTION_TYPES.USERNAME  === userData. ){

  }  elseif(userData.password === formsejodataayega){
    return {
      ...state,
      loading=false
      login=true;

  }
};
    case USER_ACTION_TYPES.USERS_CART:
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
// api call for users

const [userData, setuserData] = useState([]);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/users')
      .then((res) => {
        console.log(res);
        setuserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

 userData[i].username=

// const todoReducer = (state = INITIAL_STATE, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case TODO_ACTION_TYPE.ADD_ITEM:
//       const { id, data } = action.payload;
//       return {
//         ...state,
//         list: [
//           ...state.list,
//           {
//             id: id,
//             data: data,
//           },
//         ],
//       };
//     case TODO_ACTION_TYPE.DELETE_ITEM:
//       const newList = state.list.filter((element) => element.id != action.id);
//       return {
//         ...state,
//         list: newList,
//       };

//     case TODO_ACTION_TYPE.DELETE_ALL_ITEMS:
//       return {
//         ...state,
//         list: [],
//       };

//     default:
//       return state;
//   }
// };