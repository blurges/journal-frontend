import React, { Component } from 'react';
import { ApolloProvider } from "react-apollo";
import apolloClient from './apollo/client';
import Auth from './components/Auth';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { AppState, ContextProps, setSnackbarTextType, toggleNavbar } from './types'

const Context = React.createContext<ContextProps>({
  snackBarText: '',
  navbarOpen: false,
  toggleNavbar: () => undefined,
  setSnackbarText: () => undefined
});

class App extends Component<{}, AppState> {
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

  state = {
    snackBarText: '',
    navbarOpen: false,
    toggleNavbar: this.toggleNavbar,
    setSnackbarText: this.setSnackbarText,
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        <ThemeProvider theme={theme}>
          <ApolloProvider client={apolloClient}>
            <Auth />
          </ApolloProvider>
        </ThemeProvider>
      </Context.Provider>
    );
  }
}

export {
  Context
};
export default App;
