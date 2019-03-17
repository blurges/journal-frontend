
import { combineReducers } from 'redux'
import {initialState} from './state'

export const rootReducer = (state = initialState, action: { text:string, type:string }) => {
  switch (action.type) {
    case 'SET_SNACKBAR_TEXT':
      return {
        ...state,
        snackbarText: action.text
      }
    case 'TOGGLE_NAVBAR':
      return {
        ...state,
        navbarOpen: !state.navbarOpen
      }
    default:
      return state
  }
}

export default rootReducer