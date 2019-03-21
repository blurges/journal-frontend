import React, { Component } from 'react';
import { ApolloProvider } from "react-apollo";
import Auth from './components/Auth';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, staticTheme } from './theme';
import { AppState } from './types'
import store from './redux'
import { Provider } from 'react-redux'
import apolloClient, {persistor} from './apollo/client';

class App extends Component<{}, AppState> {
  constructor(props:any) {
    super(props)
    this.state = {
      cacheRestored: false,
    }
  }
  componentDidMount() {
    persistor.restore()
      .then(() => this.setState({ cacheRestored: true }))
  }

  render() {
    return (
      <>
        {!this.state.cacheRestored && <p>loading</p>}
        {this.state.cacheRestored && 
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
        }
      </>
    )
  }
}

export default App;
