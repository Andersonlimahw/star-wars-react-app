import React, { Component } from 'react';
import './App.scss';
import Page from './containers/page';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Page />
        </header>
      </div>
    );
  }
}

export default App;
