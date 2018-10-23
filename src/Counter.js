import React, { Component } from 'react';
import logo from './logo.svg';
import './Counter.css';

class Counter extends Component {

  increment = () => {
    // fill in later
  }

  decrement = () => {
    // fill in later
  }

  render() {
    return (
      <div className="Counter">
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>&ndash;</button>
          <span className="count">{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

export default Counter;
