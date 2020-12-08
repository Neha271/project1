import loggedReducer from './isLogged'
import  counterReducer from './counter'
import {combineReducers} from 'redux'
 const allReducer = combineReducers({
     counter : counterReducer,
     islog :loggedReducer
 })
 export default allReducer;