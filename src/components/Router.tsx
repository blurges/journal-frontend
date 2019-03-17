import React from "react";
import { render } from "react-dom";
import { Router, Link, Redirect, Location } from "@reach/router";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from 'styled-components'

export const RouteTransition = (props:any) => (
  <Location>
    {({ location }) => (
      <TransitionGroup component={null}>
        <CSSTransition key={location.key} classNames="fade" timeout={500}>
          <Router location={location} className="router">
            {props.children}
          </Router>
        </CSSTransition>
      </TransitionGroup>
    )}
  </Location>
);


const StyledRouter = styled(RouteTransition)`
  .fade-enter {
    opacity: 0;
    z-index: 1;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 40050ms ease-in;
  }
`



export default StyledRouter
