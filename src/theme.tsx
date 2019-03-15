import * as styledComponents from "styled-components";
import {Theme} from './types'

const theme = {
  colors: {
    black: 'black',
    tealLighter: 'green',
    tealDark: 'green'
  },
  breakpoints: {
    sm: '500px',
    md: '700px',
    lg: '900px',
    xl: '1200px'
  },
  borderRadius: '5px',
  rem: '16px',
  em: '16px'
};

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<Theme>;


const GlobalStyle = createGlobalStyle`
  html, body, #root {
    width: 100%;
    height: 100%;
    margin: 0;
  }
  #root {
    display: flex;
    flex-direction: column;
  }
`

export {
  GlobalStyle,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  theme
};
export default styled;
