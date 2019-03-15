import React, { Component } from 'react';
import { ApolloProvider } from "react-apollo";
import apolloClient from './apollo/client';
import Auth from './components/Auth';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { AppState, toggleNavbar, ContextProps } from './types'

const Context = React.createContext<ContextProps>({
  navbarOpen: false,
  toggleNavbar: () => undefined
});

class App extends Component<{}, AppState> {
  toggleNavbar:toggleNavbar = (e) => {
    e.stopPropagation()
    this.setState(state => ({
      navbarOpen: !state.navbarOpen
    }));
  };

  state = {
    navbarOpen: false,
    toggleNavbar: this.toggleNavbar,
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
