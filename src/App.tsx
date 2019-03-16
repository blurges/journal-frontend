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

  constructor(props: any) {
    super(props);
    this.rem = 16;
    this.html = document.documentElement;
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
    this.vmin = window.innerHeight < window.innerWidth ? window.innerHeight : window.innerWidth;
    this.state = {
      context: {
        snackBarText: '',
        navbarOpen: false,
        setSnackbarText: () => undefined,
        toggleNavbar: () => undefined
      },
      dynamicTheme: {
        cube: {
          width: `${this.windowWidth}px`,
          height: `${this.windowHeight - (4 * this.rem)}px`,
          translateZ: `${-(this.vmin)}px`
        },
        face: {
          width: `${this.windowWidth}px`,
          height: `${this.windowHeight - (4 * this.rem)}px`,
          translateZ: `${(this.windowWidth)}px`
        }
      }
    };
  }
  zoomOut = () => {
    console.log('zoom out')
    // dynamicTheme: {
    //   cube: {
    //     translateZ: `${(-(this.vmin) * 2)}px`,
    //     ...state.dynamicTheme.cube
    //     ...state.dynamicTheme.cube
    //   },
    //   face: {
    //     width: `${this.windowWidth}px`,
    //     height: `${this.windowHeight - (4 * this.rem)}px`,
    //     translateZ: `${this.windowHeight}px`
    //   }
    // },
    // this.setState(state => ({
      
    // }));
  };
  toggleNavbar:toggleNavbar = (e) => {
    e.stopPropagation()
    this.setState(state => ({
      context: {
        navbarOpen: !state.context.navbarOpen,
        ...state.context
      },
      ...state
    }));
  };
  setSnackbarText:setSnackbarTextType = (text) => {
    this.setState(state => ({
      context: {
        snackBarText: text,
        ...state.context
      },
      ...state
    }))
  }
  // componentWillMount(){
  //   if (this.windowHeight < this.windowWidth) {
  //     this.setState(state => ({
  //       context: {
  //         toggleNavbar: this.toggleNavbar,
  //         ...state.context
  //       },
  //       dynamicTheme: {
  //         cube: {
  //           width: `${this.windowWidth}px`,
  //           height: `${this.windowHeight - (4 * this.rem)}px`,
  //           translateZ: `${-(this.windowHeight)}px`
  //         },
  //         face: {
  //           width: `${this.windowWidth}px`,
  //           height: `${this.windowHeight - (4 * this.rem)}px`,
  //           translateZ: `${this.windowHeight}px`
  //         }
  //       }
  //     }))
  //     console.log('ran')
  //   } else {
  //     this.setState(state => ({
  //       context: {
  //         toggleNavbar: this.toggleNavbar,
  //         ...state.context
  //       },
  //       ...state
  //     }))
  //   }
  // }



  render() {
    const theme = {
      ...staticTheme,
      ...this.state.dynamicTheme
    }
    return (
      <ApolloProvider client={apolloClient}>
        <Context.Provider value={this.state.context}>
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
