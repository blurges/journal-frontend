import React, { Component } from 'react';
import Button from './Button';
import EditIcon from './EditIcon'
import ConfirmIcon from './ConfirmIcon'
import CancelIcon from './CancelIcon'
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
        {!confirmDelete && 
          <Button
            disabled={updating || deleting ? true : false}
            ariaBusy={updating || deleting ? true : false}
            onClick={this.handleClick}
            shrink={confirmDelete}
          >
            {confirmEdit && <ConfirmIcon />}
            {!confirmEdit && <EditIcon />}
          </Button>
        }
        {confirmEdit &&
          <Button
            disabled={updating}
            ariaBusy={updating}
            onClick={cancelUpdate}
          >
            <CancelIcon />
          </Button>
        }
      </>
    );
  }
}

export default EditEntry;
