import React, { Component } from 'react';
import styled from 'styled-components';
import { InputProps } from '../types'

class Input extends Component<InputProps> {
  render() {
    return (
      <input
        className={this.props.className}
        disabled={this.props.disabled}
        aria-busy={this.props.ariaBusy}
        aria-label={this.props.ariaLabel}
        type={this.props.type}
        name={this.props.name}
        placeholder={this.props.placeholder}
        autoComplete={this.props.autoComplete}
        value={this.props.value}
        onChange={this.props.onChange}
        required={this.props.required}
        autoFocus={this.props.autoFocus}
      >
        {this.props.children}
      </input>
    )
  }
}

const StyledButton = styled(Input)`
  width: 100%;
  max-width: 100%;
  margin: 0;
  border: none;
  padding: 1rem;
  background: white;
  font-family: 'Merriweather Regular';
  font-size: 2rem;
  box-shadow: none;
`;

export default StyledButton;