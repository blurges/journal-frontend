import React, { Component } from 'react';
import styled from "../theme";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import store from '../redux';
import {SnackbarProps, ReduxState} from '../types'
import { setSnackbarText } from '../redux/actions';

class Snackbar extends Component<SnackbarProps> {
  // constructor(props) {
  //   super(props);
  //   const { dispatch } = props
  //   this.setSnackbarText = bindActionCreators(setSnackbarText, dispatch)

  //   this.state = {
  //     snackbarText: ''
  //   };

  //   store.subscribe(() => {
  //     this.setState({
  //       snackbarText: store.getState().snackbarText
  //     });
  //   });
  // }

  render() {
    const {snackbarText} = this.props;

    if (snackbarText) {
      return (
        <section>
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

const StyledSnackbar = styled(SnackbarWithRedux)``;


export default StyledSnackbar;