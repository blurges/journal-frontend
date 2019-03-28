import React, {Component} from 'react'
import { RouteComponentProps, ForgotPasswordProps } from '../types';
import Link from './Link';
import { Mutation } from 'react-apollo';
import { REQUEST_RESET_MUTATION } from '../apollo/mutations';
import LinksContainer from "./LinksContainer";
import Button from "./Button";
import Input from "./Input";
import AuthFormStyles from './AuthFormStyles';

export class ForgotPassword extends Component<RouteComponentProps & ForgotPasswordProps> {
  state = {
    email: '',
  };
  saveToState = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, type, value} = event.target
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  validate = (event:any, action:any) => {
    event.preventDefault()
    if (!this.state.email) {
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
    return (
      <Mutation
      mutation={REQUEST_RESET_MUTATION}
      variables={this.state}
      >
        {(reset, { error, loading, called }) => (
          <main
          className={this.props.className}
          >
            <form
              onSubmit={(event) => this.validate(event, reset)}
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
              <Button
                disabled={loading}
                ariaBusy={loading}
                type="submit"
              >
                Reset Password
              </Button>
            </form>
            <LinksContainer>
              <Link to="/">
                Sign In
              </Link>
              <Link to="/sign-up">
                Sign Up
              </Link>
            </LinksContainer>
          </main>
        )}
      </Mutation>
    );
  }
}

const StyledForgotPassword = AuthFormStyles(ForgotPassword)

export default StyledForgotPassword