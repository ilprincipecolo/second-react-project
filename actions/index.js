import {
  ADD_USER,
  USER_LOGGED_IN,
  USER_LOGGING,
  FETCH_DATA_API,
  LOGIN,
  LOGIN_ERROR
} from "../constants/index";

export function addUser(payload) {
  return {
    type: ADD_USER,
    payload
  };
}

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  payload: user
});
export const userLogging = status => ({
  type: USER_LOGGING,
  payload: status
});



//2 method to use Redux with Hooks, dispatch automatically data comes from Form
export const login = credentials => ({
  //API users search, i will return the same user
  type: LOGIN,
  payload: credentials
});

//1 method to use Redux without Hooks
export const fetchData = () => ({
  type: FETCH_DATA_API
});
