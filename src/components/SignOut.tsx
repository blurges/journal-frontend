import React, { Component } from 'react';
import { CURRENT_USER_QUERY, ALL_ENTRIES_QUERY } from '../apollo/queries';
import apolloClient from '../apollo/client';
import {SignOutProps} from "../types";
import styled from '../theme'

export class SignOut extends Component<SignOutProps> {
  removeToken = () => {
    window.localStorage.removeItem('token')
    const user = apolloClient.readQuery({ query: CURRENT_USER_QUERY });
    user.me = null
    apolloClient.writeQuery({ query: CURRENT_USER_QUERY, data: user });
    const entries = apolloClient.readQuery({ query: ALL_ENTRIES_QUERY });
    // entries.me = null
    // apolloClient.writeQuery({ query: CURRENT_USER_QUERY, data: entries });
  };
  
  render () {
    if (this.props.user) {
      return (
        <button
          className={this.props.className}
          onClick={this.removeToken}
          type="button"
        >
          Sign out
        </button>
      )
    } else return null
  }
} 

const StyledSignOut = styled(SignOut)`
  height: 4rem;
  padding: 1rem;
  border: 1px solid ${props => props.theme.colors.tealLighter};
  background: ${props => props.theme.colors.tealLighter};
  font-size: 1.5em;
  transition: all 0.3s;
  :hover {
    border: 1px solid ${props => props.theme.colors.tealDark};
  }
`

export default StyledSignOut;
