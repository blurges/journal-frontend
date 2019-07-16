
import {initialState} from '../state'
import {setAlertOptionsParameters} from '../../types'

export const alert = (
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
      default:
        return state
  }
}

export default alert