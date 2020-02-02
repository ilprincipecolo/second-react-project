import {createStore, applyMiddleware} from 'redux'
import rootReducer from'../reducers/index'
import { forbiddenUserMiddleware } from '../middlewares';
import {testMiddleware} from '../middlewaresHook/index'

export const store = createStore(
rootReducer,applyMiddleware(testMiddleware));
