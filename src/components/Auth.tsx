import React, { Component } from 'react';
import Header from '../components/Header';
import { Query } from "react-apollo";
import {CURRENT_USER_QUERY} from '../apollo/queries'
import SignIn from './SignIn';
import Entries from './Entries';
import SnackBar from './SnackBar';
import Cube from './Cube';
import Spinner from './Spinner';
import {CubeFaceType} from '../types'

export class Auth extends Component {
  render () {
    return (
      <Query query={CURRENT_USER_QUERY}>
        {({ data, loading, error }) => {
          let face:CubeFaceType = 'front'
          if (data !== undefined) {
            if (data.me) {
              face = 'right'
            }
          }
          return <>
            <Header />
            {error && <p>{error}</p>}
            <Cube
              face={face}
              front={<SignIn />}
              left={'set password'}
              right={<Entries />}
              top={'top'}
              bottom={'forgot'}
              back={''}
            />
            <SnackBar />
          </>
       }}
      </Query>
    )
  }
}

export default Auth;
