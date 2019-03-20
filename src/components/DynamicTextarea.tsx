import React, { Component } from 'react';
import styled from 'styled-components';
import TextareaAutosize from 'react-autosize-textarea';
import { DynamicTextareaProps } from '../types'

class DynamicTextarea extends Component<DynamicTextareaProps> {
  render() {
    return (
      <TextareaAutosize
        className={this.props.className}
        id={this.props.id}
        name={this.props.name}
        spellCheck={this.props.spellCheck}
        placeholder={this.props.placeholder}
        cols={this.props.cols}
        rows={this.props.rows}
        value={this.props.value}
        onChange={this.props.onChange}
        readOnly={this.props.readOnly}
        required={this.props.required}
        maxRows={this.props.maxRows}
      />
    )
  }
}

const StyledTextarea = styled(DynamicTextarea)`
  width: 100%;
  margin: 0;
  border: 1px solid ${props => props.theme.colors.tealDark};
  border-top-left-radius: ${props => props.theme.borderRadius};
  border-top-right-radius: ${props => props.theme.borderRadius};
  padding: 1rem;
  background: white;
  font-family: 'Merriweather';
  font-size: 2rem;
  resize: none;
  transition: all 0.5s;
  &[disabled] {
    opacity: 0.5;
  }
`;

export default StyledTextarea;