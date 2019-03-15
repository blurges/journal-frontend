import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { CURRENT_USER_QUERY } from '../apollo/queries';
import { SIGN_OUT_MUTATION } from '../apollo/mutations';
import Button from './Button';

export class SignOut extends Component {
  render () {
    return (
      <Mutation
        mutation={SIGN_OUT_MUTATION}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(signout, {loading}) => {
          return <Button
            onClick={signout}
            type="button"
            disabled={loading}
            ariaBusy={loading}
          >
            Sign out
          </Button>
        }
        
        }
      </Mutation>
    )
  }
} 

export default SignOut;
