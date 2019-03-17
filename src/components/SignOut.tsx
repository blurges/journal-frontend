import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { CURRENT_USER_QUERY } from '../apollo/queries';
import { SIGN_OUT_MUTATION } from '../apollo/mutations';
import apolloClient from '../apollo/client';
import Button from './Button';
import {navigate} from "@reach/router"

export class SignOut extends Component {
  removeToken = () => {
    const data = { me: null }
    apolloClient.writeQuery({ query: CURRENT_USER_QUERY, data });
    window.localStorage.clear()
    navigate(`/`)
  };
  render () {
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
  }
} 

export default SignOut;
