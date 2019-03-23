import React, { Component } from 'react';
import { Mutation } from "react-apollo";
import {SIGN_IN_MUTATION} from '../apollo/mutations';
import { RouteComponentProps, SignInProps } from '../types';
import { Redirect } from "@reach/router";
import Link from './Link'
import styled from "styled-components";
import Button from "./Button";
import LinksContainer from "./LinksContainer";
import Input from "./Input";
import { CURRENT_USER_QUERY } from '../apollo/queries';
import {handleGraphqlErrors} from '../redux/actions'
import { connect } from 'react-redux'

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
    event.stopPropagation()
    if (!this.state.email || !this.state.password) {
      console.log('Form contents are not valid, SignIn.tsx:35')
    }
    action()
  }

  render() {
    if (!this.props.user) {return (
      <Mutation
        mutation={SIGN_IN_MUTATION}
        variables={{
          email: this.state.email,
          password: this.state.password
        }}
        refetchQueries={[{query: CURRENT_USER_QUERY}]}
        onError={this.props.handleGraphqlErrors}
      >
        {(signin, {loading}) => (
          <main className={this.props.className}>
            <form
              onSubmit={(event) => this.validate(event, signin)}
            >
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
            <LinksContainer>
              <Link to="/sign-up">
                Sign Up
              </Link>
              <Link to="/forgot-password">
                Forgot Password
              </Link>
            </LinksContainer>
          </main>
        )}
      </Mutation>
    )} else return (
      <Redirect noThrow to="/entries" />
    );
  }
}

const mapDispatchToProps = { handleGraphqlErrors }

const SignInWithRedux = connect(null, mapDispatchToProps)(SignIn);

const StyledSignIn = styled(SignInWithRedux)`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  form {
    width: 100%;
    max-width: ${props => props.theme.breakpoints.sm};
    display: grid;
    row-gap: 2rem;
  }
`

export default StyledSignIn;
