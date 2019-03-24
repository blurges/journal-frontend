import React, { Component } from 'react';
import { Mutation } from "react-apollo";
import {SIGN_IN_MUTATION} from '../apollo/mutations';
import { RouteComponentProps, HomeProps } from '../types';
import { Redirect } from "@reach/router";
import Link from './Link'
import styled from "styled-components";
import LinksContainer from "./LinksContainer";

class Home extends Component<HomeProps & RouteComponentProps> {
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

const StyledSignIn = styled(Home)`
  width: 100%;
  max-width: ${props => props.theme.breakpoints.sm};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default StyledSignIn;
