import { combineReducers } from 'redux'
import { alert } from './alert'
import { calls } from './calls'
import { navbar } from './navbar'

export const rootReducer = combineReducers({
  alert,
  calls,
  navbar
})


export default rootReducer