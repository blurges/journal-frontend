import React, { Component } from 'react';
import styled from "../theme";
import {Context} from '../App';

class SnackBar extends Component {
  render() {
    return (
      <Context.Consumer>
        {({snackBarText, setSnackbarText}) => {
          if (snackBarText) {
            return <section>
              <p>
                {snackBarText}
              </p>
              <button
                onClick={() => setSnackbarText('')}
              >
                Dismiss
              </button>
            </section>
          }
          return null
        }
        }
      </Context.Consumer>

    );
  }
}

const StyledSnackbar = styled(SnackBar)``;

export default StyledSnackbar;