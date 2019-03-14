import { persistCache } from 'apollo-cache-persist';
import { RetryLink } from 'apollo-link-retry';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import {setContext} from 'apollo-link-context';
import config from "../config"
import {PersistentStorage, PersistedData, NormalizedCacheObject} from '../types/index'

let uri
if (process.env.NODE_ENV === "development") {
  uri = config.apolloServer.development
} else if (process.env.NODE_ENV === "production") {
  uri = config.apolloServer.production
}

const token = window.localStorage.getItem('token') || '';

const retry = new RetryLink({ attempts : { max : Infinity } })

const http = new HttpLink({
  uri,
  headers: {
    token
  }
})

const authMiddleware:any = (operation: any, forward: any) => {
  return forward(operation).map((response: any) => {
    const context = operation.getContext();
    const { response: { headers } } = context;

    if (headers) {
      const token = headers.get("token");
      if (token) {
        if (typeof window !== 'undefined') {
          window.localStorage.setItem("token", token);
        }
      }
    }
    return response;
  })
}

const setRequestTokenMiddleware = setContext((operation, previousContext) => {
  let token 
  if (typeof window !== 'undefined') {
    token = window.localStorage.getItem("token")
  }
  if (!token) { 
    return previousContext
  }

  const { headers } = previousContext

  return {
    ...previousContext,
    headers: {
      ...headers,
      "token": token
    }
  }
})

const link = ApolloLink.from([authMiddleware, setRequestTokenMiddleware, retry, http]);

const cache = new InMemoryCache();

persistCache({ 
  cache,
  storage: window.localStorage as PersistentStorage<PersistedData<NormalizedCacheObject>>
})

export default new ApolloClient({
  link,
  cache
});
