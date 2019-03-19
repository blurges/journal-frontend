import React, { Component } from 'react';
import styled from "../theme";
import {LinksContainerProps} from '../types'

class LinksContainer extends Component<LinksContainerProps> {
  render() {
    return (
      <div
        className={this.props.className}
      >
        {this.props.children}
      </div>
    );
  }
}

const StyledLinksContainer = styled(LinksContainer)`
  margin: 2rem 0 0 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;
`;

export default StyledLinksContainer;