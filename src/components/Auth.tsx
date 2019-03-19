import React, { Component } from 'react';
import Header from '../components/Header';
import { Query } from "react-apollo";
import {CURRENT_USER_QUERY} from '../apollo/queries'
import SignIn from './SignIn';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import SignUp from './SignUp';
import Entries from './Entries';
import Account from './Account';
import Snackbar from './Snackbar';
import Router from "./Router"
import {navigate} from "@reach/router"

export class Auth extends Component{
  render () {
    return (
      <Query query={CURRENT_USER_QUERY}>
        {({ data }) => {
          const {me} = data
          return <>
            <Header user={me}/>
            <Router>
              <SignIn user={me} path="/sign-in" />
              <ForgotPassword user={me} path="/forgot-password" />
              <ResetPassword user={me} path="/reset-password" />
              <SignUp user={me} path="/sign-up" />
              <Entries user={me} path="/entries" />
              <Account user={me} path="/account" />
            </Router>
            <Snackbar />
          </>
        }}
      </Query>
    )
  }
}

export default Auth;
