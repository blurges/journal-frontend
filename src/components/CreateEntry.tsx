import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';
import {ALL_ENTRIES_QUERY} from '../apollo/queries';
import Button from './Button';
import DynamicTextarea from './DynamicTextarea';
import { ApolloConsumer } from 'react-apollo';
import { CREATE_ENTRY_MUTATION } from '../apollo/mutations';
import { handleChangeType, CreateEntryProps, NormalizedCacheObject } from '../types'

const uuidv1 = require('uuid/v1')

class CreateEntry extends Component<CreateEntryProps> {
  state = {
    __typename: 'Entry',
    id: '',
    tempId: uuidv1(),
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
  
  create = (cache:any, payload:any) => {
    // manually update the cache on the client, so it matches the server
    // 1. Read the cache for the entries we want
    const {__typename, id, tempId, title, body} = payload.data.createEntry
    const data = cache.readQuery({ query: ALL_ENTRIES_QUERY });
    // 2. Filter the deleted entry out of the page
    data.entries = [{
      __typename,
      id,
      tempId,
      body,
      title
    } , ...data.entries]
    data.entriesConnection.aggregate.count++
    // 3. Put the entries back!
    cache.writeQuery({ query: ALL_ENTRIES_QUERY, data });
    this.setState({
      title: '',
      body: ''
    })
  };

  update = (cache:any, payload:any) => {
    // manually update the cache on the client, so it matches the server
    // 1. Read the cache for the entries we want
    const {__typename, id, tempId, title, body} = payload.data.createEntry
    const data = cache.readQuery({ query: ALL_ENTRIES_QUERY });
    // 2. Filter the deleted entry out of the page
    data.entries = [{
      __typename,
      id,
      tempId,
      body,
      title
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
            optimisticResponse={{
              __typename: "Mutation",
              createEntry: this.state
            }}
          >
            {(createEntry, { loading, error }) => (
              // debounce, throttle
              // create or update
              <li className={this.props.className}>
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
                      cols={40}
                      rows={2}
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
              </li>
            )}
          </Mutation>
        )}
      </ApolloConsumer>
    );
  }
}

const StyledCreateEntry = styled(CreateEntry)`
  list-style-type: none;
  form {
    display: grid;
    row-gap: 1rem;
  }
  .actions {
    display: flex;
  }
`;

export default StyledCreateEntry;
export { CREATE_ENTRY_MUTATION };
