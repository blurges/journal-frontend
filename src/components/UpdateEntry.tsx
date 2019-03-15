import React, { Component } from 'react';
import Button from './Button';
import { UpdateEntryProps } from '../types'

class EditEntry extends Component<UpdateEntryProps> {
  handleClick = () => {
    if (this.props.confirmEdit) {
      this.props.updateEntry()
    } else {
      this.props.beginUpdate()
    }
  }

  render() {
    const { cancelUpdate, confirmDelete, confirmEdit, updating, deleting } = this.props

    return (
      <>
        <Button
          disabled={updating || deleting ? true : false}
          ariaBusy={updating || deleting ? true : false}
          onClick={this.handleClick}
          shrink={confirmDelete}
        >
          {confirmDelete && 'E'}
          {confirmEdit && 'Confirm'}
          {!confirmEdit && !confirmDelete && 'Edit'}
        </Button>
        {confirmEdit &&
          <Button
            disabled={updating}
            ariaBusy={updating}
            onClick={cancelUpdate}
          >
            Cancel
          </Button>
        }
      </>
    );
  }
}

export default EditEntry;
