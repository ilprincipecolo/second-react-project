import {
  ADD_USER,
  USER_LOGGED_IN,
  USER_LOGGING,
  FETCH_DATA_API,
  SET_DATA,
  DATA_ERROR,
  LOGIN_ERROR
} from "../constants/index";

const initial_state = {
  users: [],
  login: false,

  //API DATA
  dataLoading: false,
  data: null,
  userCity: null,
  dataErrors: null,

  //Login
  userLogged: null,
  userLogging: false,
  errorsLogin: null
};

function rootReducer(state = initial_state, action) {
  if (action.type === ADD_USER) {
    return Object.assign({}, state, {
      users: [
        ...state.users,
        {
          name: action.payload.name,
          password: action.payload.password
        }
      ]
    });
  }

  //2 method to use without Hooks, we have an action for set userLogging status
  if (action.type === USER_LOGGED_IN) {
    return Object.assign({}, state, { userLogged: action.payload, errorsLogin: null });
  }
  if (action.type === USER_LOGGING){
    return Object.assign({}, state, { userLogging: action.payload });
  }
  if(action.type === LOGIN_ERROR){
    return Object.assign({}, state, {errorsLogin: action.payload});
  }
  

  //1 method to use Redux without Hooks
  if (action.type === SET_DATA){
    return Object.assign({}, state, {
      data: action.payload,
      dataLoading: false});
  }
  if (action.type === FETCH_DATA_API){
    return Object.assign({}, state, { dataLoading: true });
  }
  if (action.type === DATA_ERROR){
    return Object.assign({}, state, {
      dataLoading: false,
      dataErrors: action.payload
    });
  }
  return state;
}

export default rootReducer;
