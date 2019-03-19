import React, {Component} from 'react'
import { RouteComponentProps, ResetPasswordProps } from '../types';

class ResetPassword extends Component<RouteComponentProps & ResetPasswordProps> {
  render () {
    return <p>ResetPassword</p>
  }
}

export default ResetPassword