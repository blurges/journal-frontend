import React from 'react';
import { withTheme } from 'styled-components';
import { ThemeInterface } from '../types';


const SVG = ({theme}: {theme: ThemeInterface}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      height="100"
    >
      <g
        transform="matrix(3.3333333,0,0,3.3333333,-3.3333333,-3.3333333)"
      >
        <path
          d="M 16,1 C 7.729,1 1,7.729 1,16 1,24.271 7.729,31 16,31 24.271,31 31,24.271 31,16 31,7.729 24.271,1 16,1 Z m 0,28 C 8.832,29 3,23.168 3,16 3,8.832 8.832,3 16,3 c 7.168,0 13,5.832 13,13 0,7.168 -5.832,13 -13,13 z"
        />
        <path
          d="M 23.317,10.27 13.313,19.63 8.684,15.298 C 8.281,14.921 7.649,14.942 7.271,15.345 6.894,15.748 6.915,16.381 7.318,16.758 l 5.313,4.971 c 0.192,0.18 0.438,0.27 0.683,0.27 0.245,0 0.491,-0.09 0.683,-0.27 l 10.688,-10 c 0.403,-0.377 0.424,-1.01 0.047,-1.413 C 24.353,9.913 23.719,9.892 23.317,10.27 Z"
        />
      </g>
    </svg>
  )
}

const StyledSVG = withTheme(SVG)

export default StyledSVG;
