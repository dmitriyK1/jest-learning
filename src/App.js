import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Message from './Message';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  static propTypes = {
    value: PropTypes.number,
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <input type="text" value={this.props.value} />
          <Message />
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
