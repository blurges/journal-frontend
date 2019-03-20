import React, { Component } from 'react';
import styled from "../theme";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import store from '../redux';
import {SnackBarProps, ReduxState} from '../types'
import { setSnackBarText } from '../redux/actions';

class SnackBar extends Component<SnackBarProps> {
  render() {
    const {snackbarText} = this.props;

    if (snackbarText) {
      return (
        <section className={this.props.className}>
          <p>
            {snackbarText}
          </p>
          <button
            onClick={() => this.props.setSnackBarText('')}
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

const mapDispatchToProps = { setSnackBarText }

const SnackBarWithRedux = connect(mapStateToProps, mapDispatchToProps)(SnackBar);

const StyledSnackBar = styled(SnackBarWithRedux)`
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


export default StyledSnackBar;