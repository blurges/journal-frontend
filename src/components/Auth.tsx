import React, { Component } from 'react';
import Header from '../components/Header';
import { Query } from "react-apollo";
import {CURRENT_USER_QUERY} from '../apollo/queries'
import SignIn from './SignIn';
import Entries from './Entries';
import SnackBar from './SnackBar';
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
              } else {
                navigate(`/sign-in`)
              }
            }
            return <>
              <Header />
              {error && <p>{error}</p>}
              <Router>
                <SignIn path="/sign-in" />
                <Entries path="/entries" />
              </Router>
              <SnackBar />
            </>
        }}
        </Query>
    )
  }
}

export default Auth;
