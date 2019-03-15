import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { InfiniteScrollProps } from '../types'

const StyledList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 1rem;
  .x-centered {
    display: flex;
    justify-content: center;
    p {
      font-size: 1.5em;
      text-align: center;
    }
  }
`;

class InfiniteScroll extends Component<InfiniteScrollProps> {
  static propTypes = {
    onFetchMore: PropTypes.func.isRequired
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleOnScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleOnScroll);
  }


  handleOnScroll = () => {
    // http://stackoverflow.com/questions/9439725/javascript-how-to-detect-if-browser-window-is-scrolled-to-bottom
    var scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    var scrollHeight =
      (document.documentElement && document.documentElement.scrollHeight) ||
      document.body.scrollHeight;
    var clientHeight =
      document.documentElement.clientHeight || window.innerHeight;
    var scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
    if (scrolledToBottom) {
      this.props.onFetchMore();
    }
  };

  render () {
    return (
      <StyledList>
        {this.props.children}
      </StyledList>
    )
  }
}

export default InfiniteScroll