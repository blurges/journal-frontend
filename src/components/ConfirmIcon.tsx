import React from 'react';
import { withTheme } from 'styled-components';
import { ThemeInterface } from '../types';


const SVG = ({ theme }: { theme: ThemeInterface }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      height="100"
    >
      <desc>
        Confirm
      </desc>
      <path
        d="M 50,0 C 22.43,0 0,22.43 0,50 0,77.569999 22.43,99.999999 50,99.999999 77.569999,99.999999 99.999999,77.569999 99.999999,50 99.999999,22.43 77.569999,0 50,0 Z m 0,93.333332 C 26.106666,93.333332 6.6666666,73.893333 6.6666666,50 6.6666666,26.106666 26.106666,6.6666666 50,6.6666666 73.893333,6.6666666 93.333332,26.106666 93.333332,50 93.333332,73.893333 73.893333,93.333332 50,93.333332 Z"
        stroke-width="3.33333325" />
      <path
        d="M 74.389999,30.9 41.043333,62.099999 25.613333,47.66 c -1.343333,-1.256667 -3.45,-1.186667 -4.71,0.156666 -1.256667,1.343334 -1.186667,3.453333 0.156667,4.71 l 17.71,16.57 c 0.64,0.6 1.46,0.9 2.276666,0.9 0.816667,0 1.636667,-0.3 2.276667,-0.9 L 78.949999,35.763333 c 1.343334,-1.256667 1.413334,-3.366667 0.156667,-4.71 C 77.843333,29.71 75.729999,29.64 74.389999,30.9 Z"
        stroke-width="3.33333325" />
    </svg>
  )
}

const StyledSVG = withTheme(SVG)

export default StyledSVG;
