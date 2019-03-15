import React, { Component } from 'react';
import styled from 'styled-components';
import {CubeProps} from '../types'

class Cube extends Component<CubeProps> {
  render () {
    return (
      <main className={this.props.className}>
        <div 
          className={`cube ${this.props.face}`}>
          <div 
            className="face face-front">
            {this.props.front}
          </div>
          <div 
            className="face face-left">
            {this.props.left}
          </div>
          <div 
            className="face face-top">
            {this.props.top}
          </div>
          <div 
            className="face face-back">
            {this.props.back}
          </div>
          <div 
            className="face face-bottom">
            {this.props.bottom}
          </div>
          <div 
            className="face face-right">
            {this.props.right}
          </div>
        </div>
      </main>
    )
  }
}

const StyledCube = styled(Cube)`
flex: 1;
perspective: 0px;
text-align: left;

.cube {
  width: 100vh;
  height: 100vh;
  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(0px);
  transition: transform 0.5s ease-in;

  &.front {
    transform: rotateY(0deg) translateZ(calc(100vh / 2));
  }
  &.top {
    transform: rotateX(-90deg) translateZ(calc(100vh / 2));
  }
  &.back {
    transform: rotateY(180deg) translateZ(calc(100vh / 2));
  }
  &.right {
    transform: rotateY(-90deg) translateZ(calc(100vh / 2));
  }
  &.left {
    transform: rotateY(90deg) translateZ(calc(100vh / 2));
  }
  &.bottom {
    transform: rotateX(90deg) translateZ(100vh - (calc(100vh / 2)));
  }
}

.face {
  position: absolute;
  width: 100vh;
  height: 100vh;

  background: rgba(250, 250, 250, 0.4);
  border: 3px solid ${props => props.theme.colors.tealLighter};
  border-radius: ${props => props.theme.borderRadius};

  &-front {
    transform: rotateY(0deg) translateZ(calc(100vh / 2));
  }
  &-top {
    height: 100vh;
    transform: rotateX(90deg) translateZ(calc(100vh / 2));
  }
  &-back {
    transform: rotateY(180deg) translateZ(calc(100vh / 2));
  }
  &-right {
    transform: rotateY(90deg) translateZ(calc(100vh / 2));
  }
  &-left {
    transform: rotateY(-90deg) translateZ(calc(100vh / 2));
  }
  &-bottom {
    height: 100vh;
    transform: rotateX(-90deg) translateZ(100vh - (calc(100vh / 2)));
  }
}
`
 
export default StyledCube;