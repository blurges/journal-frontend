
import {initialState} from '../state'

export const calls = (
  state = initialState,
  action: {
    type:string,
    count:number
  }) => {
    switch (action.type) {
      case 'SET_REQUEST_COUNT':
        console.log('SET_REQUEST_COUNT', action.count)
        return {
          ...state,
          requestCount: action.count
        }
      default:
        return state
  }
}

export default calls