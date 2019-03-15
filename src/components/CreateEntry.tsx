import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import {ALL_ENTRIES_QUERY} from '../apollo/queries';
import Button from './Button';
import DynamicTextarea from './DynamicTextarea';
import { ApolloConsumer } from 'react-apollo';
import { handleChangeType } from '../types'

const CREATE_ENTRY_MUTATION = gql`
  mutation CREATE_ENTRY_MUTATION(
    $title: String!
    $body: String!
  ) {
    createEntry(
      title: $title
      body: $body
    ) {
      id
    }
  }
`;

class CreateEntry extends Component {
  state = {
    title: '',
    body: ''
  };

  handleChange:handleChangeType = e => {
    if (e.target) {
      this.setState({
        body: e.currentTarget.value
      })
    }
  };

  update = (cache:any, payload:any) => {
    // manually update the cache on the client, so it matches the server
    // 1. Read the cache for the entries we want
    const {id, __typename} = payload.data.createEntry
    const data = cache.readQuery({ query: ALL_ENTRIES_QUERY });
    // 2. Filter the deleted entry out of the page
    data.entries = [{
      id,
      __typename,
      body: this.state.body,
      title: this.state.title
    } , ...data.entries]
    data.entriesConnection.aggregate.count++
    // 3. Put the entries back!
    cache.writeQuery({ query: ALL_ENTRIES_QUERY, data });
    this.setState({
      title: '',
      body: ''
    })
  };

  render() {
    return (
      <ApolloConsumer>
        {client => (
          <Mutation
            mutation={CREATE_ENTRY_MUTATION}
            variables={this.state}
            update={this.update}
          >
            {(createEntry, { loading, error }) => (
              // debounce, throttle
              // create or update
              <form
                data-test="form"
                onSubmit={async e => {
                  e.preventDefault();
                  const res = await createEntry();
                }}
                aria-busy={loading}
              >
                <label htmlFor="body" aria-label="body">
                  <DynamicTextarea
                    id="body"
                    name="body"
                    spellCheck={false}
                    placeholder="How's things?"
                    cols={80}
                    rows={2}
                    maxRows={20}
                    required={true}
                    value={this.state.body}
                    onChange={this.handleChange}
                    readOnly={loading ? true : false}
                  />
                </label>
                <Button
                  disabled={loading}
                  ariaBusy={loading}
                  type="submit"
                >
                  Save
                </Button>
              </form>
            )}
          </Mutation>
        )}
      </ApolloConsumer>
    );
  }
}

export default CreateEntry;
export { CREATE_ENTRY_MUTATION };
