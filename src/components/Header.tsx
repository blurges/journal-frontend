import React, { Component } from 'react';
import SignOut from './SignOut'
import styled from "../theme";
import {HeaderProps, HeaderState} from "../types";
import { connect } from 'react-redux'
import store from '../redux';
import NetworkStatus from './NetworkStatus';
import Spinner from './Spinner';
import ALogo from './ALogo'

class Header extends Component<HeaderProps, HeaderState> {
  constructor(props:HeaderProps) {
    super(props);

    this.state = {
      requestCount: 0
    };

    store.subscribe(() => {
      this.setState({
        requestCount: store.getState().calls.requestCount
      });
    });
  }
  render() {
    return (
      <header className={this.props.className}>
        <a
          href="http://aleks.tech"
        >
          <ALogo />
        </a>
        <Spinner spin={!!this.state.requestCount} />
        <NetworkStatus />
        <SignOut user={this.props.user} />
      </header>
    );
  }
}

const StyledHeader = styled(Header)`
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  background: ${props => props.theme.colors.tealLighter};
  box-shadow: ${props => props.theme.boxShadow.bottom};
  a {
    display: inline-block;
    width: 4rem;
    height: 4rem;
    padding: 1rem;
    border: 1px solid ${props => props.theme.colors.tealLighter};
    :hover {
      border: 1px solid ${props => props.theme.colors.tealDark};
    }
  }
`;

export default connect()(StyledHeader);