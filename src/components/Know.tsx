import React, { Component } from 'react';
import { RouteComponentProps, StyledComponentProps } from '../types';
import styled from "styled-components";

export class Know extends Component<StyledComponentProps & RouteComponentProps> {
  render () {
    return (
      <main>
        <a
          href="https://thenounproject.com/term/journal/146109/"
          target="_blank"
        >
          journal SVG icon used as the logo was made by Madeleine Bennett from the Noun Project
        </a>
      </main>
    )
  }
}

const StyledKnow = styled(Know)`
`

export default StyledKnow;