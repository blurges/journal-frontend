import React from 'react';
import { withTheme } from 'styled-components';
import { ThemeInterface } from '../types';


const SVG = ({ theme }: { theme: ThemeInterface }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" height="100">
      <desc>
        Cancel
      </desc>
      <path
        fill="#000"
        stroke-width="0.68367231"
        d="M1.5898078 7.9933434C-3.2230376 3.1613689 4.0410361-2.73827 8.1599866 1.3970518L98.1512 91.745952c5.28729 5.3083-1.985793 11.198888-6.570173 6.596291z"
      />
      <path
        fill="#000"
        stroke-width="0.68367231"
        d="M92.006655 1.5898071c4.831975-4.812845 10.731615 2.451228 6.596292 6.570179L8.2540474 98.1512c-5.3083 5.28729-11.198888-1.985793-6.596291-6.570173z"
      />
    </svg>
  )
}

const StyledSVG = withTheme(SVG)

export default StyledSVG;
