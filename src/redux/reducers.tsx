
import {initialState} from './state'
import {setAlertOptionsParameters} from '../types'

export const rootReducer = (
  state = initialState,
  action: {
    type:string,
    options:setAlertOptionsParameters
  }) => {
    switch (action.type) {
      case 'SET_ALERT_OPTIONS':
        return {
          ...state,
          alertText: action.options.text,
          alertType: action.options.type,
          alertTimeout: action.options.timeout || 0
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