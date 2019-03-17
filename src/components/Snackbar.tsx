import React, { Component } from 'react';
import styled from "../theme";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import store from '../redux';
import {SnackbarProps, ReduxState} from '../types'
import { setSnackbarText } from '../redux/actions';

class Snackbar extends Component<SnackbarProps> {
  render() {
    const {snackbarText} = this.props;

    if (snackbarText) {
      return (
        <section className={this.props.className}>
          <p>
            {snackbarText}
          </p>
          <button
            onClick={() => this.props.setSnackbarText('')}
          >
            Dismiss
          </button>
        </section>
      )
    } else return null
  }
}

const mapStateToProps = (state:ReduxState) => {
  return {
    snackbarText: state.snackbarText
  }
}

const mapDispatchToProps = { setSnackbarText }

const SnackbarWithRedux = connect(mapStateToProps, mapDispatchToProps)(Snackbar);

const StyledSnackbar = styled(SnackbarWithRedux)`
  position: fixed;
  bottom: 0;
  display: flex;
  padding: 1rem;
  background: ${props => props.theme.colors.tealLightest};
  p {
    margin: 0;
  }
  button {
    border: none;
    background: none;
  }
`;


export default StyledSnackbar;