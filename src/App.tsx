import React, { Component } from 'react';
import { ApolloProvider } from "react-apollo";
import apolloClient from './apollo/client';
import Auth from './components/Auth';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, staticTheme } from './theme';
import { AppState, ContextProps, setSnackbarTextType, toggleNavbar } from './types'

const Context = React.createContext<ContextProps>({
  snackBarText: '',
  navbarOpen: false,
  toggleNavbar: () => undefined,
  setSnackbarText: () => undefined
});

class App extends Component<{}, AppState> {
  private rem: number;
  private html: HTMLElement;
  private windowWidth: number;
  private windowHeight: number;
  private vmin: number;

  constructor() {
    super({});
    this.rem = 16;
    this.html = document.documentElement;
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
    this.vmin = window.innerHeight < window.innerWidth ? window.innerHeight : window.innerWidth;
  }
  toggleNavbar:toggleNavbar = (e) => {
    e.stopPropagation()
    this.setState(state => ({
      navbarOpen: !state.navbarOpen
    }));
  };
  setSnackbarText:setSnackbarTextType = (text) => {
    this.setState(state => ({
      snackBarText: text
    }))
  }
  componentWillMount(){

    let vm = this.windowHeight >= this.windowWidth ? this.windowHeight : this.windowWidth
    if (this.html !== null) {
      const style = getComputedStyle(this.html)
      const fontSize = style.fontSize
      if (fontSize !== null) {
        this.rem = parseFloat(fontSize);
      }
    }
    
    this.setState({
      dynamicTheme: {
        cube: {
          width: `${this.windowWidth}px`,
          height: `${this.windowHeight}px`,
          translateZ: `${-(this.vmin / 2)}px`
        },
        face: {
          width: `${this.windowWidth}px`,
          height: `${this.windowHeight}px`,
          translateZ: `${this.vmin / 2}px`
        }
      }
    })
  }

  state = {
    snackBarText: '',
    navbarOpen: false,
    toggleNavbar: this.toggleNavbar,
    setSnackbarText: this.setSnackbarText,
    dynamicTheme: {
      cube: {
        width: `${this.windowWidth - (4 * this.rem)}px`,
        height: `${this.windowHeight - (4 * this.rem)}px`,
        translateZ: `${-(this.vmin + (2 * this.rem))}px`
      },
      face: {
        width: `${this.windowWidth - (4 * this.rem)}px`,
        height: `${this.windowHeight - (4 * this.rem)}px`,
        translateZ: `${(this.vmin / 2) - (2 * this.rem)}px`
      }
    }
  };

  render() {
    const theme = {
      ...staticTheme,
      ...this.state.dynamicTheme
    }
    return (
      <ApolloProvider client={apolloClient}>
        <Context.Provider value={this.state}>
          <ThemeProvider theme={theme}>
            <>
              <Auth />
              <GlobalStyle />
            </>
          </ThemeProvider>
        </Context.Provider>
      </ApolloProvider>
    );
  }
}

export {
  Context
};
export default App;
