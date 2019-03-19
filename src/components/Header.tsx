import React, { Component } from 'react';
import { Query } from "react-apollo";
import {CURRENT_USER_QUERY} from '../apollo/queries'
import Link from './Link'
import SignOut from './SignOut'
import styled from "../theme";
import {HeaderProps, ReduxState} from "../types";
import { connect } from 'react-redux'
import store from '../redux';

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
        <Link to="http://aleks.tech">
          A
        </Link>
        <SignOut user={this.props.user}/>
      </header>
    );
  }
}

const StyledHeader = styled(Header)`
  position: absolute;
  z-index: 1;
  top: 0;
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  background: #ffffff;
`;

export default connect()(StyledHeader);