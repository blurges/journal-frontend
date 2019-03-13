import React, { Component } from 'react';
import { Mutation } from "react-apollo";
import {SIGN_IN_MUTATION} from '../apollo/mutations'

class SignIn extends Component {
  render() {
    return (
      <Mutation
        mutation={SIGN_IN_MUTATION}
        variables={{email: `z.sobieraj@gmail.com`, password: `asdfasdf`}}
      >
        {(signin, {error, loading}) => (
          <button
            onClick={async e => {
              e.preventDefault();
              await signin();
            }}
          >
            Sign In
          </button>
        )}
      </Mutation>
    );
  }
}

export default SignIn;
