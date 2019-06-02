import React, { Component } from 'react';
import Button from './Button';
import CancelIcon from './CancelIcon'
import DeleteIcon from './DeleteIcon'
import { DeleteEntryProps } from '../types'

class DeleteEntry extends Component<DeleteEntryProps> {
  handleClick = () => {
    if (this.props.confirmDelete) {
      this.props.deleteEntry()
    } else {
      this.props.beginDelete()
    }
  }

  render() {
    const { cancelDelete, confirmEdit, confirmDelete, updating, deleting} = this.props

    return (
      <>
        {confirmDelete &&
          <Button
            disabled={deleting}
            ariaBusy={deleting}
            shrink={confirmEdit}
            onClick={cancelDelete}
          >
            <CancelIcon />
          </Button>
        }
        {!confirmEdit &&
          <Button
            disabled={updating || deleting ? true : false}
            ariaBusy={updating || deleting ? true : false}
            shrink={confirmEdit}
            onClick={this.handleClick}
          >
            {confirmDelete && <DeleteIcon />}
            {!confirmDelete && <DeleteIcon />}
          </Button>
        }
      </>
    );
  }
}

export default DeleteEntry;
