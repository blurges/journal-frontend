import React from "react";
import { render } from "react-dom";
import { Router, Link, Redirect, Location } from "@reach/router";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from 'styled-components'

export const RouteTransition = (props:any) => (
  <Location>
    {({ location }) => (
      <TransitionGroup className="transition-group">
        <CSSTransition key={location.key} classNames="fade" timeout={500}>
          {/* the only difference between a router animation and
              any other animation is that you have to pass the
              location to the router so the old screen renders
              the "old location" */}
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
    transition: opacity 450ms ease-in;
  }
`



export default StyledRouter
