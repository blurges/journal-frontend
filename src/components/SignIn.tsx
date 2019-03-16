import React, { Component } from 'react';
import { Mutation } from "react-apollo";
import {SIGN_IN_MUTATION} from '../apollo/mutations'
import { saveToState } from '../types'

class SignIn extends Component {
  private passwordRef: React.RefObject<HTMLInputElement>;
  private emailRef: React.RefObject<HTMLInputElement>;
  constructor(props: any) {
    super(props);
    this.passwordRef = React.createRef();
    this.emailRef = React.createRef();
  }
  state = {
    password: '',
    email: '',
  }

  saveToState:saveToState = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };
  validate = (action:any) => {
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
          <form onSubmit={() => this.validate(signin)}>
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
              ref={this.emailRef}
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
              ref={this.passwordRef}
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
