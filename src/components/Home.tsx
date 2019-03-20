import React, { Component } from 'react';
import { Mutation } from "react-apollo";
import {SIGN_IN_MUTATION} from '../apollo/mutations';
import { RouteComponentProps, SignInProps } from '../types';
import { Redirect } from "@reach/router";
import Link from './Link'
import styled from "styled-components";
import LinksContainer from "./LinksContainer";

class SignIn extends Component<SignInProps & RouteComponentProps> {
  render() {
    if (!this.props.user) {return (
      <>
        <h1>Journal</h1>
        <LinksContainer>
          <Link to="/sign-up">
            Sign Up
          </Link>
          <Link to="/sign-in">
            Sign In
          </Link>
        </LinksContainer>
      </>
    )} else return (
      <Redirect to="/entries" />
    );
  }
}

const StyledSignIn = styled(SignIn)`
  width: 100%;
  max-width: ${props => props.theme.breakpoints.sm};
  display: grid;
  row-gap: 2rem;
`

export default StyledSignIn;
