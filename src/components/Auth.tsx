import React, { Component } from 'react';
import Header from '../components/Header';
import { Query } from "react-apollo";
import {CURRENT_USER_QUERY} from '../apollo/queries'
import SignIn from './SignIn';
import Entries from './Entries';
import Snackbar from './Snackbar';
import Router from "./Router"
import {navigate} from "@reach/router"

export class Auth extends Component{
  render () {
    return (
      <Query query={CURRENT_USER_QUERY}>
        {({ data, loading, error }) => {
          if (data !== undefined) {
            if (data.me) {
              navigate(`/entries`)
            }
          }
          return <>
            <Header />
            {error && <p>{error}</p>}
            <Router>
              <SignIn path="/" />
              <Entries path="/entries" />
            </Router>
            <Snackbar />
          </>
        }}
      </Query>
    )
  }
}

export default Auth;
