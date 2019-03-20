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
  * {
    box-sizing: border-box;
  }
  html, body, #root {
    width: 100%;
    height: 100%;
    margin: 0;
    font-size: ${staticTheme.rem};
  }
  #root {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${staticTheme.colors.black};
    font-size: ${staticTheme.em};
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
