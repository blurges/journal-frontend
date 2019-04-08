import React, { Component } from 'react';
import styled from "../theme";
import { StyledComponentProps } from '../types';
import {ReactComponent as ALogo} from '../assets/ALogo.svg'
import {ReactComponent as JournalIcon} from '../assets/JournalIcon.svg'
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
  a {
    display: inline-block;
    width: 5rem;
    height: 4rem;
    border: 1px solid ${props => props.theme.colors.tealLighter};
    :hover {
      border: 1px solid ${props => props.theme.colors.tealDark};
    }
    svg {
      padding: 0.5rem 1rem;
      display: block;
    }
  }
`;

export default StyledLink;