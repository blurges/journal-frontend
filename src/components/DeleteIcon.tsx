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
         id="g962"
         transform="matrix(0.3164557,0,0,0.3164557,2.8481007,-5.9999999e-7)">
          <path
           d="m 265,62 v 211 c 0,24 -20,43 -43,43 H 76 C 52,316 33,297 33,273 V 62 H 10 C -3,62 -3,42 10,42 H 80 V 31 C 80,14 94,0 111,0 h 76 c 17,0 31,14 31,31 v 11 h 70 c 13,0 13,20 0,20 z M 100,42 h 98 V 31 c 0,-6 -5,-11 -11,-11 h -76 c -6,0 -11,5 -11,11 z M 53,62 v 211 c 0,13 10,23 23,23 h 146 c 12,0 23,-10 23,-23 V 62 Z"
           id="path954"
           fill="#000000"
            />
          <path
           d="m 97,115 c 0,-13 20,-13 20,0 v 127 c 0,13 -20,13 -20,0 z"
           id="path956"
           fill="#000000"
            />
          <path
           d="m 181,115 c 0,-13 20,-13 20,0 v 127 c 0,13 -20,13 -20,0 z"
           id="path958"
           fill="#000000"
            />
          <path
           d="m 139,115 c 0,-13 20,-13 20,0 v 127 c 0,13 -20,13 -20,0 z"
           id="path960"
           fill="#000000"
            />
          </g>
      </svg>
  )
}

const StyledSVG = withTheme(SVG)

export default StyledSVG;
