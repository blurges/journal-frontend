import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ApolloProvider } from "react-apollo";
import apolloClient from './Apollo'
import { Mutation } from "react-apollo";
import {SIGNIN_MUTATION} from './apollo/mutations'

class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <Mutation
          mutation={SIGNIN_MUTATION}
          variables={{email: `z.sobieraj@gmail.com`, password: `wesweswes`}}
        >
          {(signin, {error, loading}) => (
            <button
              onClick={async e => {
                e.preventDefault();
                await signin();
              }}
            >
              content
            </button>
          )}
        </Mutation>
      </ApolloProvider>
    );
  }
}

export default App;
