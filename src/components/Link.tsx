import React, { Component } from 'react';
import styled from "../theme";
import { LinkProps } from '../types';
import {Link} from '@reach/router'

class LinkComponent extends Component<LinkProps> {
  render() {
    return (
      <Link
        className={this.props.className}
        to={this.props.to}
      >
        {this.props.children}
      </Link>
    );
  }
}

const StyledLink = styled(LinkComponent)`
  flex: 1;
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid ${props => props.theme.colors.tealLightest};
  padding: 1em 1.5em;
  text-decoration: none;
  text-align: center;

  :hover {
    border: 1px solid ${props => props.theme.colors.tealLighter};
    cursor: pointer;
  }

  :active {
    border: 1px solid ${props => props.theme.colors.tealLight};
  }
`;

export default StyledLink;