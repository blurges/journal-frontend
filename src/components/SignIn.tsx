import React, { Component } from 'react';
import { Mutation } from "react-apollo";
import {SIGN_IN_MUTATION} from '../apollo/mutations'
import { saveToStateType } from '../types'

class SignIn extends Component {
  state = {
    password: 'wesweswes',
    email: 'z.sobieraj@gmail.com',
    error: ''
  }

  saveToState = (e:any) => {
    const {name, type, value} = e.target
    const val = type === 'number' ? parseFloat(value) : value;
    if (!this.state.email || !this.state.password) {
      this.setState({
        error: 'Missing'
      })
    }
    this.setState({ [name]: value });
  };
  validate = (event:any, action:any) => {
    event.preventDefault()
    if (!this.state.email || !this.state.password) {
      this.setState({
        error: 'Missing'
      })
    }
    action()
  }

  render() {
    return (
      <Mutation
        mutation={SIGN_IN_MUTATION}
        variables={{
          email: this.state.email,
          password: this.state.password
        }}
      >
        {(signin, {error, loading}) => (
          <form onSubmit={(event) => this.validate(event, signin)}>
            <p>{this.state.error}</p>
            <input
              disabled={loading}
              aria-busy={loading}
              aria-label="email"
              type="email"
              name="email"
              placeholder="email"
              autoComplete="email"
              value={this.state.email}
              onChange={this.saveToState}
              required
            />
            <input
              disabled={loading}
              aria-busy={loading}
              aria-label="password"
              type="password"
              name="password"
              placeholder="password"
              autoComplete="password"
              value={this.state.password}
              onChange={this.saveToState}
              required
            />
            <button>
              Sign In
            </button>
          </form>
        )}
      </Mutation>
    );
  }
}

export default SignIn;
