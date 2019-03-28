import React from 'react';
import styled from "styled-components";

export const AuthFormStyles = (component:any) => styled(component)`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
  max-width: ${props => props.theme.breakpoints.sm};
  ::before, ::after {
    -webkit-box-flex: 1;
    box-flex: 1;
    -webkit-flex-grow: 1;
    flex-grow: 1;
    content: '';
    display: block;
    height: 24px;
  }
  form {
    width: 100%;
    display: grid;
    row-gap: 2em;
  }
`

export default AuthFormStyles;
