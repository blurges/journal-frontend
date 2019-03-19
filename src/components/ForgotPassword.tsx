import React, {Component} from 'react'
import { RouteComponentProps, ForgotPasswordProps } from '../types';

class ForgotPassword extends Component<RouteComponentProps & ForgotPasswordProps> {
  render () {
    return <p>ForgotPassword</p>
  }
}

export default ForgotPassword