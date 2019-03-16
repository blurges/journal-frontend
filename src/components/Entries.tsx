import React, { Component } from 'react';
import { Query } from 'react-apollo';
import Entry from './Entry';
import InfiniteScroll from './List';
import Spinner from './Spinner';
import { ALL_ENTRIES_QUERY } from '../apollo/queries';
import { EntryInterface, RouteComponentProps } from '../types'
import CreateEntry from './CreateEntry';

const perPage:number = 10;

class Entries extends Component<RouteComponentProps> {
  
  render() {
    return (
      <Query
        query={ALL_ENTRIES_QUERY}
        variables={{
          type: "TOP",
          skip: 1 * perPage - perPage,
        }}
        notifyOnNetworkStatusChange
        fetchPolicy="cache-and-network"
      >
        {({ data, error, loading, fetchMore }) => {
          let entries:EntryInterface[] = []
          let entriesConnection:any = {aggregate: {count: 0}}
          let last = false
          let empty = false
          if (data !== undefined) {
            if (data.entries && data.entriesConnection) {
              entries = data.entries
              entriesConnection = data.entriesConnection
              last = entries.length > 0 && entries.length === entriesConnection.aggregate.count 
              empty = entries.length === 0 && entriesConnection.aggregate.count === 0
            }
          }

          if (error) return <p>Error: {error.message}</p>;

          return (
            <InfiniteScroll
              onFetchMore={() => {
                if (data.entriesConnection.aggregate.count > data.entries.length && !loading) {
                  fetchMore({
                    variables: {
                      skip: data.entries.length
                    },
                    updateQuery: (prev, { fetchMoreResult }) => {
                      if (!fetchMoreResult) return prev;
                      return Object.assign({}, prev, {
                        entries: [...prev.entries, ...fetchMoreResult.entries]
                      });
                    }
                  })
                }
              }}
            >
              <CreateEntry />

              {entries.map((entry:EntryInterface) =>
                <Entry entry={entry} key={entry.id} />
              )}

              <div className="x-centered">
                {loading && <Spinner/>}

                {last &&
                  <p>The end.</p>
                }

                {empty &&
                  <p>Your entries will appear here.</p>
                }
              </div>

            </InfiniteScroll>
          );
        }}
      </Query>
    );
  }
}

export default Entries;
export { ALL_ENTRIES_QUERY };