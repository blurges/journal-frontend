import React, { Component } from 'react';
import { ApolloProvider } from "react-apollo";
import apolloClient from './apollo/client'
import HomePage from './pages/home';
import EntriesPage from './pages/entries'
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <ApolloProvider client={apolloClient}>
          <HomePage />
          <EntriesPage />
        </ApolloProvider>
      </ThemeProvider>
    );
  }
}

export default App;
