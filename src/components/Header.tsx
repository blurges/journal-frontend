import React, { Component } from 'react';
import { Query } from "react-apollo";
import {CURRENT_USER_QUERY} from '../apollo/mutations'
import Link from './Link'
import styled from "../theme";
import {Context} from '../App';

class Header extends Component {
  render() {
    return (
      <Context.Consumer>
        {({navbarOpen, toggleNavbar}) =>
          <header>
            <Link href="http://aleks.tech">
              A
            </Link>
            <Query
              query={CURRENT_USER_QUERY}
            >
              {({data, error, loading}) => (
                <button
                  onClick={toggleNavbar}
                >Log {navbarOpen ? 'out' : 'in'}</button>
              )}
            </Query>
          </header>
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