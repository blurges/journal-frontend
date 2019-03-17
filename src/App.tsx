import React, { Component } from 'react';
import { ApolloProvider } from "react-apollo";
import apolloClient from './apollo/client';
import Auth from './components/Auth';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, staticTheme } from './theme';
import { AppState } from './types'
import store from './redux'
import { Provider } from 'react-redux'

class App extends Component<{}, AppState> {
  render() {
    return (
      <Provider store={store}>
        <ApolloProvider client={apolloClient}>
          <ThemeProvider theme={staticTheme}>
            <>
              <Auth />
              <GlobalStyle />
            </>
          </ThemeProvider>
        </ApolloProvider>
      </Provider>
    );
  }
}

export default App;
