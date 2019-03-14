import React, { Component } from 'react';

class EntriesPage extends Component {
  render() {
    return (
      <>
        <header>
          <a href="http://aleks.tech">A</a>
          <button>Sign out</button>
          <button>Open menu</button>
        </header>
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

export default EntriesPage;