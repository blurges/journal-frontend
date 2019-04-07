import React, { Component } from 'react';
import styled from "../theme";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import store from '../redux';
import {AlertProps, ReduxState} from '../types'
import { setAlertOptions } from '../redux/actions';

class Alert extends Component<AlertProps> {
  render() {
    const {alertText} = this.props;

    if (alertText) {
      return (
        <section className={this.props.className}>
          <p>
            {alertText}
          </p>
          <button
            onClick={() => this.props.setAlertOptions({
              text: '',
              type: 'info'
            })}
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
    alertText: state.alertText,
    alertType: state.alertType,
    alertTimeout: state.alertTimeout
  }
}

const mapDispatchToProps = { setAlertOptions }

const AlertWithRedux = connect(mapStateToProps, mapDispatchToProps)(Alert);

const StyledAlert = styled(AlertWithRedux)`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0%);
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


export default StyledAlert;