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

export { 
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  theme
};
export default styled;
