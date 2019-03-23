import {setAlertOptionsParameters} from '../types'
import {ApolloError} from 'apollo-client'

export const handleGraphqlErrors = (payload:ApolloError) => {
  const {graphQLErrors} = payload

  if (graphQLErrors.length) {
    const options = {
      text: graphQLErrors[0].message,
      type: 'error'
    }
    return {
      type: 'SET_ALERT_OPTIONS',
      options
    }
  }
}

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