import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { CURRENT_USER_QUERY } from '../apollo/queries';
import { SIGN_OUT_MUTATION } from '../apollo/mutations';
import apolloClient from '../apollo/client';
import Button from './Button';

export class SignOut extends Component {
  updateInCache = () => {
    const data = { me: null }
    apolloClient.writeQuery({ query: CURRENT_USER_QUERY, data });
  };
  render () {
    return (
      <Button
        onClick={this.updateInCache}
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
