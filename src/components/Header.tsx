import React, { Component } from 'react';
import SignOut from './SignOut'
import styled from "../theme";
import {HeaderProps, ReduxState} from "../types";
import { connect } from 'react-redux'
import store from '../redux';
import NetworkStatus from './NetworkStatus';
import ALogo from './ALogo'

class Header extends Component<HeaderProps> {
  constructor(props:HeaderProps) {
    super(props);

    this.state = {
      navbarOpen: false
    };

    store.subscribe(() => {
      this.setState({
        navbarOpen: store.getState().navbarOpen
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
        <NetworkStatus />
        <SignOut user={this.props.user}/>
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