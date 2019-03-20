import React, {Component} from 'react'
import { RouteComponentProps, SignUpProps } from '../types';
import {SIGN_UP_MUTATION} from '../apollo/mutations'
import {CURRENT_USER_QUERY} from '../apollo/queries'
import Input from './Input'
import Button from './Button'
import { Mutation } from "react-apollo";
import Link from './Link'
import LinksContainer from "./LinksContainer";
import haveIBeenPwnd from '../utils/haveIBeenPwnd'
import styled from "styled-components";

class SignUp extends Component<SignUpProps & RouteComponentProps> {
  state = {
    name: '',
    email: '',
    password: '',
    passwordHint: 'Pick a nice, strong password'
  };

  saveToState = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, type, value} = event.target
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  checkPassword = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value

    if (password.length < 8) {
      this.setState({
        passwordHint: 'At least 8 characters, please'
      })
    } else {
      const result = await haveIBeenPwnd(password)
      if (result.count > 0) {
        this.setState({
          passwordHint: `This password has been leaked ${result.count} times`
        })
      }
    }
  }

  validate = (event:any, action:any) => {
    event.preventDefault()
    if (!this.state.email || !this.state.password) {
      this.setState({
        error: 'Missing'
      })
    }
    action()
    this.setState({
      name: '',
      email: '',
      password: '',
      passwordHint: 'Pick a nice, strong password'
    });
  }

  render() {
    return (
      <Mutation
        mutation={SIGN_UP_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(signup, { loading }) => (
          <main className={this.props.className}>
            <form
              onSubmit={(event) => this.validate(event, signup)}
            >
              <Input
                disabled={loading}
                ariaBusy={loading}
                ariaLabel="email"
                type="email"
                name="email"
                placeholder="email"
                value={this.state.email}
                onChange={this.saveToState}
                autoComplete="email"
                required={true}
                autoFocus
              />
              <Input
                disabled={loading}
                ariaBusy={loading}
                ariaLabel="name"
                type="text"
                name="name"
                placeholder="name"
                value={this.state.name}
                onChange={this.saveToState}
                autoComplete="name"
                required={true}
                />
              <Input
                disabled={loading}
                ariaBusy={loading}
                ariaLabel="password"
                type="text"
                name="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.saveToState}
                autoComplete="new-password"
                required={true}
              />
              <Button
                disabled={loading}
                ariaBusy={loading}
                type="submit"
              >
                Sign Up
              </Button>
            </form>
            <LinksContainer>
              <Link to="/sign-in">
                Sign In
              </Link>
              <Link to="/forgot-password">
                Forgot Password
              </Link>            
            </LinksContainer>
          </main>
        )}
      </Mutation>
    );
  }
}

const StyledSignUp = styled(SignUp)`
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

export default StyledSignUp;