import { ADD_USER, USER_LOGGING } from "../constants"


export function forbiddenUserMiddleware({dispatch}) {
    return function(next){
        return function(action){
                if(action.type === ADD_USER){
                    if(action.payload.password === undefined)
                        return dispatch({type: "NO_PASSWORD"})                    
                }
            return next(action)
        }
    }
}