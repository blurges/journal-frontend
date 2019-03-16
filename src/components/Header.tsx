import React, { Component } from 'react';
import { Query } from "react-apollo";
import {CURRENT_USER_QUERY} from '../apollo/queries'
import Link from './Link'
import SignOut from './SignOut'
import styled from "../theme";
import {HeaderProps} from "../types";
import {Context} from '../App';

class Header extends Component<HeaderProps> {
  render() {
    return (
      <Context.Consumer>
        {({navbarOpen, toggleNavbar}) =>
          <Query
            query={CURRENT_USER_QUERY}
          >
            {({data, error, loading}) => 
              <header className={this.props.className}>
                <Link href="http://aleks.tech">
                  A
                </Link>

                {data.me &&
                  <SignOut />
                }

                <button>
                  Menu
                </button>
              </header>
            }
          </Query>
        }
      </Context.Consumer>
    );
  }
}

const StyledHeader = styled(Header)`
  height: 4rem;
`;

export default StyledHeader;