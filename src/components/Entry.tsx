import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';
import {ALL_ENTRIES_QUERY} from '../apollo/queries';
import {
  DELETE_ENTRY_MUTATION, 
  UPDATE_ENTRY_MUTATION
} from '../apollo/mutations';
import UpdateEntry from './UpdateEntry';
import DeleteEntry from './DeleteEntry';
import DynamicTextarea from './DynamicTextarea';
import { EntryInterface, EntryProps, handleChangeType } from '../types'

class Entry extends Component<EntryProps> {
  private textareaRef: React.RefObject<HTMLTextAreaElement>;

  constructor(props: EntryProps) {
    super(props);
    this.textareaRef = React.createRef();
  }
  state = {
    title: this.props.entry.title,
    body: this.props.entry.body,
    confirmEdit: false,
    confirmDelete: false
  };

  handleChange:handleChangeType = e => {
    if (e.target) {
      this.setState({
        body: e.currentTarget.value
      })
    }
  };

  beginUpdate = () => {
    this.setState({
      confirmEdit: true,
      confirmDelete: false
    })
    const textareaRef = document.getElementById(this.props.entry.id) 
    if (textareaRef) {
      textareaRef.focus()
    }
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
            <li className={this.props.className}>
              <form
                data-test="form"
                aria-busy={updating || deleting ? true : false}
              >
                <label htmlFor="body" aria-label="body">
                  <DynamicTextarea
                    id={entry.id}
                    name="entry"
                    spellCheck={false}
                    placeholder="How's things?"
                    cols={40}
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
            </li>  
          )}
          </Mutation>

        )}
      </Mutation>
    );
  }
}

const StyledEntry = styled(Entry)`
  list-style-type: none;
  form {
    display: grid;
    row-gap: 1rem;
  }
  .actions {
    display: flex;
  }
`;

export { UPDATE_ENTRY_MUTATION, DELETE_ENTRY_MUTATION };
export default StyledEntry