import React, { Component } from 'react';
import styled from 'styled-components';
import { ButtonProps } from '../types'

class Button extends Component<ButtonProps> {
  static defaultProps = {
    type: 'button'
  };
  render() {
    return (
      <button
        onClick={this.props.onClick}
        type={this.props.type}
        disabled={this.props.disabled}
        aria-busy={this.props.ariaBusy}
      >
        {this.props.children}
      </button>
    )
  }
}

const StyledButton = styled(Button)`
  width: ${props => props.shrink ? '5rem' : '100%'};
  height: 4rem;
  margin: 0 1rem;
  border: 1px solid ${props => props.theme.colors.tealLighter};
  padding: 0 1rem;
  overflow-x: hidden;
  background: white;
  font-family: 'Lato Regular';
  font-size: 1.5em;
  text-transform: uppercase;
  transition: all 0.3s;
  &[disabled] {
    opacity: 0.5;
  }
  &:only-of-type {
    border-bottom-left-radius: ${props => props.theme.borderRadius};
    border-bottom-right-radius: ${props => props.theme.borderRadius};
    margin: 0;
  }
  &:first-child {
    border-bottom-left-radius: ${props => props.theme.borderRadius};
    margin-left: 0;
  }
  &:last-child {
    border-bottom-right-radius: ${props => props.theme.borderRadius};
    margin-right: 0;
  }
`;

export default StyledButton;