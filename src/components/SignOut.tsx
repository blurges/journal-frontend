import React, { Component } from 'react';
import { CURRENT_USER_QUERY, ALL_ENTRIES_QUERY } from '../apollo/queries';
import apolloClient from '../apollo/client';
import Button from './Button';
import {SignOutProps} from "../types";

export class SignOut extends Component<SignOutProps> {
  removeToken = () => {
    window.localStorage.removeItem('token')
    const user = apolloClient.readQuery({ query: CURRENT_USER_QUERY });
    user.me = null
    apolloClient.writeQuery({ query: CURRENT_USER_QUERY, data: user });
    const entries = apolloClient.readQuery({ query: ALL_ENTRIES_QUERY });
    console.log({entries})
    // entries.me = null
    // apolloClient.writeQuery({ query: CURRENT_USER_QUERY, data: entries });
  };
  
  render () {
    if (this.props.user) {
      return (
        <Button
          onClick={this.removeToken}
          type="button"
          shrink={true}
          disabled={false}
          ariaBusy={false}
        >
          >
        </Button>
      )
    } else return null
  }
} 

export default SignOut;
