import React, { Component } from 'react';
import { Query } from "react-apollo";
import {CURRENT_USER_QUERY} from '../apollo/queries'
import Link from './Link'
import Button from './Button'
import SignOut from './SignOut'
import styled from "../theme";
import {Context} from '../App';

class Header extends Component {
  render() {
    return (
      <Context.Consumer>
        {({navbarOpen, toggleNavbar}) =>
          <Query
            query={CURRENT_USER_QUERY}
          >
            {({data, error, loading}) => 
              <header>
                <Link href="http://aleks.tech">
                  A
                </Link>

                {data.me &&
                  <SignOut />
                }
              </header>
            }
          </Query>
        }
      </Context.Consumer>

    );
  }
}

const StyledHeader = styled(Header)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-items: stretch;
  padding-top: 2px;
  background: ${props => props.theme.colors.tealLighter};
`;

export default StyledHeader;