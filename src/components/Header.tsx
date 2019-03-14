import React, { Component } from 'react';
import { Query } from "react-apollo";
import {CURRENT_USER_QUERY} from '../apollo/mutations'
import Link from './Link'
import styled from "../theme";

class Header extends Component {
  render() {
    return (
      <header>
        <Link href="http://aleks.tech">
          A
        </Link>
        <Query
          query={CURRENT_USER_QUERY}
        >
          {({data, error, loading}) => (
            <button>Log out</button>
          )}
        </Query>
      </header>
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