import React, { Component } from 'react';
import styled from "../theme";
import { StyledComponentProps } from '../types';
import JournalIcon from './JournalIcon'
import ALogo from './ALogo'
import {Link} from '@reach/router'

class BrandLogo extends Component<StyledComponentProps> {
  render() {
    return (
      <nav className={this.props.className}>
        <a
          href="http://aleks.tech"
        >
          <ALogo />
        </a>
        <Link
          to="/"
        >
          <JournalIcon />
        </Link>
      </nav>
    );
  }
}

const StyledLink = styled(BrandLogo)`
  width: 10rem;
  flex-shrink: 0;
  a {
    display: inline-block;
    width: 5rem;
    height: 4rem;
    border: 1px solid ${props => props.theme.colors.tealLighter};
    :hover {
      border: 1px solid ${props => props.theme.colors.tealDark};
    }
  }
`;

export default StyledLink;