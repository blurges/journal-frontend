import {ReduxState} from '../types'

export const initialState:ReduxState = {
  navbarOpen: false,
  alertText: '',
  alertType: 'info',
  alertTimeout: 0
}

export default initialState