
import {initialState} from '../state'

export const navbar = (
  state = initialState,
  action: {
    type:string
  }) => {
    switch (action.type) {
      case 'TOGGLE_NAVBAR':
        return {
          ...state,
          navbarOpen: !state.navbarOpen
        }
      default:
        return state
  }
}

export default navbar