import {setAlertOptionsParameters} from '../types'

export const setAlertOptions = (options:setAlertOptionsParameters) => ({
    type: 'SET_ALERT_OPTIONS',
    options
})

export const toggleNavbar = (navbarOpen:boolean) => ({
  type: 'TOGGLE_NAVBAR',
  navbarOpen
})

export default {
  setAlertOptions,
  toggleNavbar
}