import React, { Component } from 'react';
import { Redirect } from "@reach/router";
import AuthFormStyles from './AuthFormStyles';
import Link from './Link';
import LinksContainer from "./LinksContainer";
import { RouteComponentProps, HomeProps } from '../types';

export class Home extends Component<HomeProps & RouteComponentProps> {
  render() {
    if (!this.props.user) {return (
      <main className={this.props.className}>
        <h1>Journal</h1>
        <LinksContainer>
          <Link to="/sign-up">
            Sign Up
          </Link>
          <Link to="/sign-in">
            Sign In
          </Link>
        </LinksContainer>
      </main>
    )} else return (
      <Redirect to="/entries" />
    );
  }
}

const StyledHome = AuthFormStyles(Home)

export default StyledHome;
