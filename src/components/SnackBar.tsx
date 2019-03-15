import React, { Component } from 'react';
import styled from "../theme";
import {Context} from '../App';

class SnackBar extends Component {
  render() {
    return (
      <Context.Consumer>
        {({snackBarText, setSnackbarText}) =>
          <section>
            <p>
              {snackBarText}
            </p>
            <button
              onClick={() => setSnackbarText('text')}
            >
              Dismiss
            </button>
          </section>
        }
      </Context.Consumer>

    );
  }
}

const StyledSnackbar = styled(SnackBar)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-items: stretch;
  padding-top: 2px;
  background: ${props => props.theme.colors.tealLighter};
`;

export default SnackBar;