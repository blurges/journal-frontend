import React, { useEffect, useState } from 'react';
import { withTheme } from 'styled-components';
import { ThemeInterface } from '../types';


const SVG = ({theme}: {theme: ThemeInterface}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="100%"
      viewBox="0 0 94.581897 100">
      <path
        id="path865"
        d="M 0.630191,92.75536 43.555234,0.70155"
        stroke={theme.colors.tealDark}
        strokeWidth="2.01016"
        strokeLinecap="round"
        strokeLinejoin="round" />
      <path
        id="path867"
        d="m 14.083524,99.37056 10.79634,-23.1532"
        stroke={theme.colors.tealDark}
        strokeWidth="2.01016"
        strokeLinecap="round"
        strokeLinejoin="round" />
      <path
        id="path869"
        d="m 24.879864,76.21736 h 45.62007"
        stroke={theme.colors.tealDark}
        strokeWidth="2.01016"
        strokeLinecap="round"
        strokeLinejoin="round" />
      <path
        id="path871"
        d="m 70.499934,76.21736 10.79634,23.1532"
        stroke={theme.colors.tealDark}
        strokeWidth="2.01016"
        strokeLinecap="round"
        strokeLinejoin="round" />
      <path
        id="path873"
        d="m 81.296274,99.37056 h 8.71486"
        stroke={theme.colors.tealDark}
        strokeWidth="2.01016"
        strokeLinecap="round"
        strokeLinejoin="round" />
      <path
        id="path875"
        d="M 19.695524,69.60216 8.899194,92.75536"
        stroke={theme.colors.tealDark}
        strokeWidth="2.01016"
        strokeLinecap="round"
        strokeLinejoin="round" />
      <path
        id="path877"
        d="M 8.899194,92.75536 H 0.630191"
        stroke={theme.colors.tealDark}
        strokeWidth="2.01016"
        strokeLinecap="round"
        strokeLinejoin="round" />
      <path
        id="path879"
        d="m 14.083524,99.37056 -5.18433,-6.6152"
        stroke={theme.colors.tealDark}
        strokeWidth="2.01016"
        strokeLinecap="round"
        strokeLinejoin="round" />
      <path
        id="path881"
        d="m 14.083524,99.37056 h -8.269"
        stroke={theme.colors.tealDark}
        strokeWidth="2.01016"
        strokeLinecap="round"
        strokeLinejoin="round" />
      <path
        id="path883"
        d="M 5.814524,99.37056 0.630191,92.75536"
        stroke={theme.colors.tealDark}
        strokeWidth="2.01016"
        strokeLinecap="round"
        strokeLinejoin="round" />
      <path
        id="path885"
        d="M 51.824564,18.43491 31.049524,62.98696"
        stroke={theme.colors.tealDark}
        strokeWidth="2.01016"
        strokeLinecap="round"
        strokeLinejoin="round" />
      <path
        id="path887"
        d="M 51.858304,0.62944 22.780194,62.98663"
        stroke={theme.colors.tealDark}
        strokeWidth="2.01016"
        strokeLinecap="round"
        strokeLinejoin="round" />
      <path
        id="path889"
        d="m 43.521494,0.62944 h 8.33681"
        stroke={theme.colors.tealDark}
        strokeWidth="2.01016"
        strokeLinecap="round"
        strokeLinejoin="round" />
      <path
        id="path891"
        d="M 93.956774,90.90939 51.858304,0.62944"
        stroke={theme.colors.tealDark}
        strokeWidth="2.01016"
        strokeLinecap="round"
        strokeLinejoin="round" />
      <path
        id="path893"
        d="m 93.956774,90.90939 -3.94597,8.46117"
        stroke={theme.colors.tealDark}
        strokeWidth="2.01016"
        strokeLinecap="round"
        strokeLinejoin="round" />
      <path
        id="path895"
        d="m 19.695524,69.60216 h 47.71974"
        stroke={theme.colors.tealDark}
        strokeWidth="2.01016"
        strokeLinecap="round"
        strokeLinejoin="round" />
      <path
        id="path897"
        d="M 67.415264,69.60216 47.689734,27.30126"
        stroke={theme.colors.tealDark}
        strokeWidth="2.01016"
        strokeLinecap="round"
        strokeLinejoin="round" />
      <path
        id="path899"
        d="M 64.330594,62.98696 H 22.780524"
        stroke={theme.colors.tealDark}
        strokeWidth="2.01016"
        strokeLinecap="round"
        strokeLinejoin="round" />
      <path
        id="path901"
        d="m 51.824564,18.43491 38.18624,80.93565"
        stroke={theme.colors.tealDark}
        strokeWidth="2.01016"
        strokeLinecap="round"
        strokeLinejoin="round" />
    </svg>

  )
}

const StyledSVG = withTheme(SVG)

export default StyledSVG;
