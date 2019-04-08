import React, { Component } from 'react';
import { Redirect } from "@reach/router";
import styled from '../theme';
import Link from './Link';
import LinksContainer from "./LinksContainer";
import { RouteComponentProps, HomeProps } from '../types';
import {ReactComponent as JournalIcon} from '../assets/JournalIcon.svg'

export class Home extends Component<HomeProps & RouteComponentProps> {
  render() {
    if (!this.props.user) {return (
      <main className={this.props.className}>
        <JournalIcon />
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

const StyledHome = styled(Home)`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
  width: 100%;
  max-width: ${props => props.theme.breakpoints.sm};
  ::before, ::after {
    -webkit-box-flex: 1;
    box-flex: 1;
    -webkit-flex-grow: 1;
    flex-grow: 1;
    content: '';
    display: block;
    height: 24px;
  }
  svg {
    max-height: 5rem;
    max-width: 100%;
    path {
      stroke: ${props => props.theme.colors.tealLightest};
      fill: ${props => props.theme.colors.tealLightest};
    }
  }
`

export default StyledHome;
