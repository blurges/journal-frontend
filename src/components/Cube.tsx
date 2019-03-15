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
perspective: 600px;

/* using vmin and not 100% because translate */
.cube {
  width: 600px;
  height: 600px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.5s ease-in;

  &.front {
    transform: translateZ(-600px) rotateY(0deg);
  }
  &.top {
    transform: translateZ(-600px) rotateX(-90deg);
  }
  &.back {
    transform: translateZ(-600px) rotateY(180deg);
  }
  &.right {
    transform: translateZ(-600px) rotateY(90deg);
  }
  &.left {
    transform: translateZ(-600px) rotateY(-90deg);
  }
  &.bottom {
    transform: translateZ(-600px) rotateX(90deg);
  }
}

.face {
  position: absolute;
  width: 600px;
  height: 600px;

  background: rgba(250, 250, 250, 0.4);
  border: 3px solid ${props => props.theme.colors.tealLighter};
  border-radius: ${props => props.theme.borderRadius};

  &-front {
    transform: rotateY(0deg) translateZ(calc(600px));
  }
  &-top {
    transform: rotateX(90deg) translateZ(calc(600px));
  }
  &-back {
    transform: rotateY(180deg) translateZ(calc(600px));
  }
  &-right {
    transform: rotateY(-90deg) translateZ(calc(600px));
  }
  &-left {
    transform: rotateY(90deg) translateZ(calc(600px));
  }
  &-bottom {
    transform: rotateX(-90deg) translateZ(calc(600px));
  }
}
`
 
export default StyledCube;