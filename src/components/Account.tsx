import React, {Component} from 'react'
import { RouteComponentProps, AccountProps } from '../types';

class Register extends Component<AccountProps & RouteComponentProps> {
  render () {
    return <p>Register</p>
  }
}

export default Register