import React, { Component } from 'react';
import styled from "../theme";
import { LinkProps } from '../types';

class Link extends Component<LinkProps> {
  render() {
    return (
      <a
        href={this.props.href}
        className={this.props.className}
      >
        {this.props.children}
      </a>
    );
  }
}

const StyledLink = styled(Link)`
  font-size: 40px;
  background: ${props => props.theme.colors.tealDark};
`;

export default StyledLink;