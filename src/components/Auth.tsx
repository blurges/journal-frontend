import React, { Component } from 'react';
import Header from '../components/Header';
import { Query } from "react-apollo";
import {CURRENT_USER_QUERY} from '../apollo/queries'
import Home from './Home';
import SignIn from './SignIn';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import SignUp from './SignUp';
import Entries from './Entries';
import Account from './Account';
import Alert from './Alert';
import Router from "./Router"
import Know from "./Know"

export class Auth extends Component{
  render () {
    return (
      <Query
        query={CURRENT_USER_QUERY}
      >
        {({ data }) => {
          const {me} = data
          return <>
            <Header user={me}/>
            <Router>
              <Know path="/know" />

              <Home user={me} path="/" />
              <SignIn user={me} path="/sign-in" />
              <ForgotPassword user={me} path="/forgot-password" />
              <ResetPassword user={me} path="/reset-password/:resetToken" />
              <SignUp user={me} path="/sign-up" />
              <Entries default user={me} path="/entries" />
              <Account user={me} path="/account" />
            </Router>
            <Alert />
          </>
        }}
      </Query>
    )
  }
}

export default Auth;
