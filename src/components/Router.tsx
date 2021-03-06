import React from "react";
import { Router, Link, Redirect, Location } from "@reach/router";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from 'styled-components'

export const RouteTransition = (props:any) => (
  <Location>
    {({ location }) => {
      return (
      <TransitionGroup component={null} className="page-main">
        <CSSTransition key={location.key} classNames="fade" timeout={500}>
          <Router 
            className={props.className}
            location={location}
          >
            {props.children}
          </Router>
        </CSSTransition>
      </TransitionGroup>
    )}}
  </Location>
);

const StyledRouter = styled(RouteTransition)`
  height: calc(100% - 4rem);
  position: absolute;
  top: 4rem;
  right: 0;
  left: 0;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.theme.colors.white};

    .fade-enter {
      opacity: 0;
      z-index: 1;
    }

    .fade-enter.fade-enter-active {
      opacity: 1;
      transition: opacity 450ms ease-in;
    }
`

export default StyledRouter
