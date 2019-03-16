import * as styledComponents from "styled-components";
import {ThemeInterface} from './types'

const staticTheme = {
  colors: {
    black: 'black',
    tealLighter: 'green',
    tealDark: 'green'
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
  }
  #root {
    position: relative;
    padding-top: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
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
