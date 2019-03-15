import React, { Component } from 'react';
import HomePage from '../pages/home';
import EntriesPage from '../pages/entries';
import Header from '../components/Header';
import Spinner from '../components/Spinner';
import { Query } from "react-apollo";
import {CURRENT_USER_QUERY} from '../apollo/queries'

export class Auth extends Component {
  render () {
    return (
      <Query query={CURRENT_USER_QUERY}>
        {({ data, loading }) => (
          <>
            <Header />
            {loading && <Spinner />}
            {!loading && <EntriesPage />}
          </>
       )}
      </Query>
    )
  }
}

export default Auth;
