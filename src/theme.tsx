import * as styledComponents from "styled-components";
import {ThemeInterface} from './types'

const staticTheme = {
  colors: {
    black: '#121212',
    white: '#ffffff',
    tealDark: '#38a89d',
    tealLight: '#64d5ca',
    tealLighter: '#a0f0ed',
    tealLightest: '#e8fffe',
  },
  breakpoints: {
    sm: '600px',
    md: '1024'
  },
  borderRadius: '5px',
  rem: '16px',
  em: '16px',
};

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ThemeInterface>;


const GlobalStyle = createGlobalStyle`
  /* latin-ext */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    src: local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v14/S6uyw4BMUTPHjxAwXjeu.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    src: local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v14/S6uyw4BMUTPHjx4wXg.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* cyrillic-ext */
  @font-face {
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 400;
    src: local('Merriweather Regular'), local('Merriweather-Regular'), url(https://fonts.gstatic.com/s/merriweather/v20/u-440qyriQwlOrhSvowK_l5-cSZMZ-Y.woff2) format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
  }
  /* cyrillic */
  @font-face {
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 400;
    src: local('Merriweather Regular'), local('Merriweather-Regular'), url(https://fonts.gstatic.com/s/merriweather/v20/u-440qyriQwlOrhSvowK_l5-eCZMZ-Y.woff2) format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 400;
    src: local('Merriweather Regular'), local('Merriweather-Regular'), url(https://fonts.gstatic.com/s/merriweather/v20/u-440qyriQwlOrhSvowK_l5-cyZMZ-Y.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 400;
    src: local('Merriweather Regular'), local('Merriweather-Regular'), url(https://fonts.gstatic.com/s/merriweather/v20/u-440qyriQwlOrhSvowK_l5-ciZMZ-Y.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 400;
    src: local('Merriweather Regular'), local('Merriweather-Regular'), url(https://fonts.gstatic.com/s/merriweather/v20/u-440qyriQwlOrhSvowK_l5-fCZM.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  * {
    box-sizing: border-box;
  }
  html {
    font-size: ${staticTheme.rem};
  }
  body {
    margin: 0;
  }
  #root {
    min-height: 100vh;
    position: relative;
    color: ${staticTheme.colors.black};
    font-size: ${staticTheme.em};
    font-family: 'Lato';
  }
  #root * {
    color: inherit;
  }
  svg {
    max-height: 100%;
  }
`

export {
  GlobalStyle,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  staticTheme
};
export default styled;
