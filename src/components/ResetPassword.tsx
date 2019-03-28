import React, {Component} from 'react'
import { RouteComponentProps, ResetPasswordProps } from '../types';
import Link from './Link';
import { Mutation } from 'react-apollo';
import { RESET_MUTATION } from '../apollo/mutations';
import { CURRENT_USER_QUERY } from '../apollo/queries';
import LinksContainer from "./LinksContainer";
import Button from "./Button";
import Input from "./Input";
import { Redirect } from '@reach/router';
import AuthFormStyles from './AuthFormStyles';

export  class ResetPassword extends Component<RouteComponentProps & ResetPasswordProps> {
  state = {
    password: '',
    confirmPassword: '',
  };

  saveToState = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, type, value} = event.target
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  validate = (event:any, action:any) => {
    event.preventDefault()
    if (!this.state.password || !this.state.confirmPassword) {
      this.setState({
        error: 'Missing'
      })
    }
    action()
    this.setState({
      email: ''
    });
  }

  render() {
    if (!this.props.user) {
      return (
        <Mutation
          mutation={RESET_MUTATION}
          variables={{
            resetToken: this.props.resetToken,
            password: this.state.password,
            confirmPassword: this.state.password,
          }}
          refetchQueries={[{ query: CURRENT_USER_QUERY }]}
        >
          {(reset, { error, loading, called }) => (
            <main className={this.props.className}>
              <form
                onSubmit={(event) => this.validate(event, reset)}
              >
                <Input
                  disabled={loading}
                  ariaBusy={loading}
                  ariaLabel="password"
                  type="password"
                  name="password"
                  placeholder="password"
                  value={this.state.password}
                  onChange={this.saveToState}
                  autoComplete="new-password"
                  required={true}
                  autoFocus
                />
                <Button
                  disabled={loading}
                  ariaBusy={loading}
                  type="submit"
                >
                  Reset Password
                </Button>
              </form>
              <LinksContainer>
                <Link to="/sign-in">
                  Sign In
                </Link>
                <Link to="/sign-up">
                  Sign Up
                </Link>
              </LinksContainer>
            </main>
          )}
        </Mutation>
      )
    } else {
      return (
        <Redirect noThrow to="/entries" />
      )
    }
  }
}

const StyledResetPassword = AuthFormStyles(ResetPassword)

export default StyledResetPassword;
