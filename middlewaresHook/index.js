import {
  FETCH_DATA_API,
  SET_DATA,
  LOGIN,
  USER_LOGGING,
  USER_LOGGED_IN,
  DATA_ERROR,
  LOGIN_ERROR
} from "../constants/index";


//1 method to use Redux without Hooks: Middleware
export const testMiddleware = store => next => action => {
  switch (action.type) {
    case FETCH_DATA_API: //Fetching data from API
      next(action);

      //Req api options
      const options = {
        headers: {
          "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
          "X-RapidAPI-key": "7552d2216fmsh4b0bd660794405ep10632djsn97474b279710"
        }
      };
      fetch(" https://free-nba.p.rapidapi.com/players?per_page=20", options)
        .then(response => response.json())
        .then(data => store.dispatch({ type: SET_DATA, payload: data.data }))
        .catch(error => store.dispatch({ type: DATA_ERROR, payload: error }));
      break;
    case LOGIN: //Simulate Login system retard from API
      next(action);
          store.dispatch({
            type: USER_LOGGING,
            payload: true})

            //All users 
            var users = store.getState().users

    callLoginApi(action.payload,users, error => {
      if(!error){
        store.dispatch({ type: LOGIN_ERROR, payload: false })
        setTimeout(() =>  store.dispatch({
          type: USER_LOGGING,
          payload: false
        }),0)
        setTimeout(() => store.dispatch({ type: USER_LOGGED_IN, payload: action.payload }),2000)
        console.log(1)
      }else{
        store.dispatch({ type: LOGIN_ERROR, payload: error })
        store.dispatch({ type: USER_LOGGING,payload: false})
        console.log(2)
      }
            });
      break;
    default:
      next(action);
  }
};

/*
export const setLoginSuccess = user => {
    dispatch({ type: LOGIN_ERROR, payload: false })
    setTimeout(() =>  dispatch({
      type: USER_LOGGING,
      payload: false
    }),100)
    setTimeout(() => dispatch({ type: USER_LOGGED_IN, payload: user }),2000)
}*/

//API simulator
function callLoginApi(user,users, callback){
setTimeout(() =>   {  if (users.some(us => us.name == user.name && us.password==user.password)) {
  return callback(null);
} else {
  return callback(new Error('Invalid email and password'))}
},2000)

}
