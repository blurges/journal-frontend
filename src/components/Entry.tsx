import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import {ALL_ENTRIES_QUERY} from '../apollo/queries';
import {
  DELETE_ENTRY_MUTATION, 
  UPDATE_ENTRY_MUTATION
} from '../apollo/mutations';
import UpdateEntry from './UpdateEntry';
import DeleteEntry from './DeleteEntry';
import DynamicTextarea from './DynamicTextarea';
import { EntryInterface, EntryProps, handleChangeType } from '../types'

export default class Entry extends Component<EntryProps> {
  static propTypes = {
    entry: PropTypes.object.isRequired,
  };

  state = {
    title: this.props.entry.title,
    body: this.props.entry.body,
    confirmEdit: false,
    confirmDelete: false
  };

  handleChange:handleChangeType = e => {
    console.log('Entry.tsx 30', {e})
  };

  beginUpdate = () => {
    this.setState({
      confirmEdit: true,
      confirmDelete: false
    })
  }

  cancelUpdate = () => {
    this.setState({
      confirmEdit: false
      // replace with original content
    })
  }

  beginDelete = () => {
    this.setState({
      confirmEdit: false,
      confirmDelete: true
    })
  }

  cancelDelete = () => {
    this.setState({
      confirmDelete: false
    })
  }

  updateInCache = (cache:any, payload:any) => {
    const {id, __typename, body, title} = payload.data.updateEntry
    const data = cache.readQuery({ query: ALL_ENTRIES_QUERY });
    const stale = data.entries.find((entry:EntryInterface) => entry.id === id && entry.__typename == __typename)
    stale.body = body
    stale.title = title
    cache.writeQuery({ query: ALL_ENTRIES_QUERY, data });
  };

  removeFromCache = (cache:any, payload:any) => {
    const data = cache.readQuery({ query: ALL_ENTRIES_QUERY });
    data.entries = data.entries.filter((entry:EntryInterface) => entry.id !== payload.data.deleteEntry.id);
    data.entriesConnection.aggregate.count--
    cache.writeQuery({ query: ALL_ENTRIES_QUERY, data });
  };

  render() {
    const { entry } = this.props;
    const { confirmEdit, confirmDelete, title, body } = this.state;

    return (
      <Mutation
        mutation={UPDATE_ENTRY_MUTATION}
        variables={{ id: entry.id, title, body }}
        update={this.updateInCache}
      >
        {(updateEntry, { loading: updating }) => (
          <Mutation
            mutation={DELETE_ENTRY_MUTATION}
            variables={{ id: entry.id }}
            update={this.removeFromCache}
            refetchQueries={[{query: ALL_ENTRIES_QUERY}]}
          >
          {(deleteEntry, { loading: deleting }) => (
            <form
              data-test="form"
              aria-busy={updating || deleting ? true : false}
            >
              <p>{updating}</p>
                <label htmlFor="body" aria-label="body">
                  <DynamicTextarea
                    id="body"
                    name="body"
                    spellCheck={false}
                    placeholder="How's things?"
                    cols={80}
                    rows={2}
                    maxRows={21}
                    required={true}
                    readOnly={!confirmEdit}
                    value={body}
                    onChange={this.handleChange}
                  />
                </label>
                <div className="actions">
                  <UpdateEntry
                    confirmEdit={confirmEdit}
                    confirmDelete={confirmDelete}
                    updating={updating}
                    deleting={deleting}
                    beginUpdate={this.beginUpdate}
                    cancelUpdate={this.cancelUpdate}
                    updateEntry={updateEntry}
                  />
                  <DeleteEntry
                    id={entry.id}
                    confirmEdit={confirmEdit}
                    confirmDelete={confirmDelete}
                    updating={updating}
                    deleting={deleting}
                    beginDelete={this.beginDelete}
                    cancelDelete={this.cancelDelete}
                    deleteEntry={deleteEntry}
                  />
                </div>
            </form>

          )}
          </Mutation>

        )}
      </Mutation>
    );
  }
}

export { UPDATE_ENTRY_MUTATION, DELETE_ENTRY_MUTATION };
