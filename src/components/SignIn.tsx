import React, { Component } from 'react';
import { Mutation } from "react-apollo";
import {SIGN_IN_MUTATION} from '../apollo/mutations';
import { RouteComponentProps, SignInProps } from '../types';
import {navigate} from "@reach/router";
import styled from "styled-components";
import Button from "./Button";
import Input from "./Input";

class SignIn extends Component<SignInProps & RouteComponentProps> {
  state = {
    password: '',
    email: '',
    error: ''
  }

  saveToState = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, type, value} = event.target
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

  routeAfterSignIn = () => {
    navigate(`/entries`)
  }

  render() {
    if (this.props.location) {
      const {key} = this.props.location
      console.log({key})
    }
    return (
      <Mutation
        mutation={SIGN_IN_MUTATION}
        variables={{
          email: this.state.email,
          password: this.state.password
        }}
        update={this.routeAfterSignIn}
      >
        {(signin, {error, loading}) => (
          <form
            className={this.props.className}
            onSubmit={(event) => this.validate(event, signin)}
          >
            <p>{}</p>
            <Input
              disabled={loading}
              ariaBusy={loading}
              ariaLabel="email"
              type="email"
              name="email"
              placeholder="email"
              autoComplete="email"
              value={this.state.email}
              onChange={this.saveToState}
              required={true}
            />
            <Input
              disabled={loading}
              ariaBusy={loading}
              ariaLabel="password"
              type="password"
              name="password"
              placeholder="password"
              autoComplete="password"
              value={this.state.password}
              onChange={this.saveToState}
              required={true}
            />
            <Button
              disabled={loading}
              ariaBusy={loading}
              type="submit"
            >
              Sign In
            </Button>
          </form>
        )}
      </Mutation>
    );
  }
}

const StyledSignIn = styled(SignIn)`
  width: 100%;
  max-width: ${props => props.theme.breakpoints.sm};
  display: grid;
  row-gap: 2rem;
`

export default StyledSignIn;
