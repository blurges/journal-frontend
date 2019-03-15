import React, { Component } from 'react';
import styled from 'styled-components';
import {CubeProps} from '../types'

class Cube extends Component<CubeProps> {
  render () {
    return (
      <main className={this.props.className}>
        <div className='wrapper'>
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
        </div>
      </main>
    )
  }
}

const StyledCube = styled(Cube)`
.wrapper {
  width: 250px;
  height: 250px;
  margin: 60px auto;
  perspective: 600px;
  text-align: left;
}

.cube {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(-100px);
  transition: transform 0.5s ease-in;

  &.front {
    transform: rotateY(0deg) translateZ(calc(250px / 2));
  }
  &.top {
    transform: rotateX(90deg) translateZ(calc(250px / 2));
  }
  &.back {
    transform: rotateY(180deg) translateZ(calc(250px / 2));
  }
  &.right {
    transform: rotateY(90deg) translateZ(calc(250px / 2));
  }
  &.left {
    transform: rotateY(-90deg) translateZ(calc(250px / 2));
  }
  &.bottom {
    transform: rotateX(-90deg) translateZ(250px - (calc(250px / 2)));
  }
}

.face {
  position: absolute;
  width: 250px;
  height: 250px;

  background: rgba(250, 250, 250, 0.1);
  border: 3px solid ${props => props.theme.colors.tealLighter};
  border-radius: ${props => props.theme.borderRadius};

  &-front {
    transform: rotateY(0deg) translateZ(calc(250px / 2));
  }
  &-top {
    height: 250px;
    transform: rotateX(90deg) translateZ(calc(250px / 2));
  }
  &-back {
    transform: rotateY(180deg) translateZ(calc(250px / 2));
  }
  &-right {
    transform: rotateY(90deg) translateZ(calc(250px / 2));
  }
  &-left {
    transform: rotateY(-90deg) translateZ(calc(250px / 2));
  }
  &-bottom {
    height: 250px;
    transform: rotateX(-90deg) translateZ(250px - (calc(250px / 2)));
  }
}
`
 
export default StyledCube;