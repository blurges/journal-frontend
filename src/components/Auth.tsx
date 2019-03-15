import React, { Component } from 'react';
import Header from '../components/Header';
import Spinner from '../components/Spinner';
import { Query } from "react-apollo";
import {CURRENT_USER_QUERY} from '../apollo/queries'
import SignIn from './SignIn';
import List from './List';
import SnackBar from './SnackBar';

export class Auth extends Component {
  render () {
    return (
      <Query query={CURRENT_USER_QUERY}>
        {({ data, loading }) => (
          <>
            <Header />
            {loading && <Spinner />}
            {!loading && data.me && <List />}
            {!loading && !(data.me) && <SignIn />}
            <SnackBar />
          </>
       )}
      </Query>
    )
  }
}

export default Auth;
