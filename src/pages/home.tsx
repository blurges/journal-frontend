import React, { Component } from 'react';
import Header from '../components/Header';

class HomePage extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <form action="">
            <input type="textarea"/>
            <button>Save</button>
          </form>
          <form action="">
            <input type="textarea"/>
            <button>Edit</button>
            <button>Delete</button>
          </form>
        </main>
      </>
    );
  }
}

export default HomePage;