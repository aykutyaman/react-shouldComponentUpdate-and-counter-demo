import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Perf from 'react-addons-perf';

window.Perf = Perf;

class App extends Component {
  /**
   * - Invoked before rendering when new props or state are being received
   * - Not called for the initial render or when forceUpdate is used
   * - Use this as an opportunity to return false when you're certain that
   *   the transition to the new props and state will not require a component update.
   * - If shouldComponentUpdate returns false, then render() will be completely skipped
   *   until the next state change.
   * - If performance is a bottleneck, especially with dozens or hundreds of components,
   *   use shouldComponentUpdate to speed up your app.
   */
  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.counter % 2 === 0);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.props.counter}</h2>
        </div>
      </div>
    );
  }
}

export default App;
