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
display: flex;
justify-content: center;
align-items: center;
perspective: none;
text-align: left;
perspective: 100vmin;

/* the 4rem and 2rem offset the height of the header, which is 4rem */
.cube {
  width: ${props => props.theme.cube.width};
  height: ${props => props.theme.cube.height};
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.5s ease-in;

  &.front {
    transform: translateZ(${props => props.theme.cube.translateZ}) rotateY(0deg);
  }
  &.top {
    transform: translateZ(${props => props.theme.cube.translateZ}) rotateX(-90deg);
  }
  &.back {
    transform: translateZ(${props => props.theme.cube.translateZ}) rotateY(180deg);
  }
  &.right {
    transform: translateZ(${props => props.theme.cube.translateZ}) rotateY(90deg);
  }
  &.left {
    transform: translateZ(${props => props.theme.cube.translateZ}) rotateY(-90deg);
  }
  &.bottom {
    transform: translateZ(${props => props.theme.cube.translateZ}) rotateX(90deg);
  }
}

.face {
  position: absolute;
  width: ${props => props.theme.face.width};
  height: ${props => props.theme.face.height};

  background: rgba(250, 250, 250, 0.4);
  border: 3px solid ${props => props.theme.colors.tealLighter};
  border-radius: ${props => props.theme.borderRadius};

  &-front {
    transform: rotateY(0deg) translateZ(calc(50vmin - 2rem));
  }
  &-top {
    transform: rotateX(90deg) translateZ(calc(50vmin - 2rem));
  }
  &-back {
    transform: rotateY(180deg) translateZ(calc(50vmin - 2rem));
  }
  &-right {
    transform: rotateY(-90deg) translateZ(calc(50vmin - 2rem));
  }
  &-left {
    transform: rotateY(90deg) translateZ(calc(50vmin - 2rem));
  }
  &-bottom {
    transform: rotateX(-90deg) translateZ(calc(50vmin - 2rem));
  }
}
`
 
export default StyledCube;