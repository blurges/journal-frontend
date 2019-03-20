import React, { Component } from 'react';
import styled from "../theme";
import { StyledComponentProps } from '../types';
import {ReactComponent as ALogo} from '../assets/ALogo.svg'

class BrandLogo extends Component<StyledComponentProps> {
  render() {
    return (
      <a
        className={this.props.className}
        href="http://aleks.tech"
      >
        <ALogo />
      </a>
    );
  }
}

const StyledLink = styled(BrandLogo)`
  width: 4rem;
  height: 4rem;
  border: 1px solid ${props => props.theme.colors.tealLighter};
  :hover {
    border: 1px solid ${props => props.theme.colors.tealDark};
  }
  svg {
    padding: 0.5rem 1rem;
  }
`;

export default StyledLink;