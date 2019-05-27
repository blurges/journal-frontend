import React from 'react';
import { withTheme } from 'styled-components';
import { ThemeInterface } from '../types';


const SVG = ({theme}: {theme: ThemeInterface}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      height="100%"
    >
      <desc>
        Plain, teal front cover of a closed journal with an elastic band holding it shut.
      </desc>
      <path
        stroke={theme.colors.tealDark}
        strokeWidth="2.01016"
        fill="none"
        d="M70.86-.0013H13.007v99.9926l57.75.01s.1-.052.103-.1465zm12.795 2.921c-1.947-1.8083-4.45-2.7819-7.232-2.921v99.8535c2.504-.1391 5.007-1.1127 6.954-2.7819 1.808-1.6683 3.477-4.172 3.616-8.0659V10.2901c0-.6954-.139-4.3111-3.338-7.3704z"
      />
    </svg>
  )
}

const StyledSVG = withTheme(SVG)

export default StyledSVG;
