import React, { Component } from 'react';
import './App.css';
import { ApolloProvider } from "react-apollo";
import apolloClient from './Apollo'
import HomePage from './pages/home';
import EntriesPage from './pages/entries'

class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <>
          <HomePage />
          <EntriesPage />
        </>
      </ApolloProvider>
    );
  }
}

export default App;
