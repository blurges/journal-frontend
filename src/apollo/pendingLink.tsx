import { ApolloLink, Operation, NextLink, Observable, FetchResult } from 'apollo-link';
import store from '../redux'
import {setRequestCount} from '../redux/actions'

// export const consoleLink = new ApolloLink((operation, forward) => {
//   console.log(`starting request for ${operation.operationName}`);
//   if (forward) {
//     return forward(operation).map((data) => {
//       console.log(`ending request for ${operation.operationName}`);
//       return data;
//     })
//   }
// })


export default class PendingLink extends ApolloLink {
  private inFlightRequestObservables: {
    [key: string]: Observable<FetchResult>;
  };

  constructor() {
    super();
    this.inFlightRequestObservables = {};
  }

  public getCount = () => {
    return Object.keys(this.inFlightRequestObservables).length
  }

  public request(
    operation: Operation,
    forward: NextLink,
  ): Observable<FetchResult> {
    const getCount = this.getCount
    const key = operation.toKey();
    if (!this.inFlightRequestObservables[key]) {
      store.dispatch(setRequestCount(getCount()))
      this.inFlightRequestObservables[key] = forward(operation);
    }


    return new Observable<FetchResult>(observer => {
      const subscription = this.inFlightRequestObservables[key].subscribe({
        next: (result) => {
          delete this.inFlightRequestObservables[key];
          observer.next(result);
        },
        error: error => {
          delete this.inFlightRequestObservables[key];
          observer.error(error);
        },
        complete: () => {
          store.dispatch(setRequestCount(getCount()))
          observer.complete.bind(observer)
        }
      });

      return () => {
        if (subscription) subscription.unsubscribe();
        delete this.inFlightRequestObservables[key];
      };
    });
  }
}