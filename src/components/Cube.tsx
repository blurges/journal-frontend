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
perspective: 500px;

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

  display: flex;
  flex-direction: column;
  align-items: center;

  background: #ffffff;
  border: 5px solid ${props => props.theme.colors.tealLighter};
  border-radius: ${props => props.theme.borderRadius};

  &-front {
    transform: rotateY(0deg) translateZ(${props => props.theme.face.translateZ});
  }
  &-top {
    transform: rotateX(90deg) translateZ(${props => props.theme.face.translateZ});
  }
  &-back {
    transform: rotateY(180deg) translateZ(${props => props.theme.face.translateZ});
  }
  &-right {
    transform: rotateY(-90deg) translateZ(${props => props.theme.face.translateZ});
  }
  &-left {
    transform: rotateY(90deg) translateZ(${props => props.theme.face.translateZ});
  }
  &-bottom {
    transform: rotateX(-90deg) translateZ(${props => props.theme.face.translateZ});
  }
}
`
 
export default StyledCube;