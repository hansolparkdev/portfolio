/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { Component } from 'react';
import { increment, decrement } from '../actions/index.jsx';

class Button extends Component {
  constructor(props) {
    super(props);
    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
  }

  onIncrement() {
    this.props.store.dispatch(increment());
  }

  onDecrement() {
    this.props.store.dispatch(decrement());
  }

  render() {
    return (
      <div>
        <button onClick={this.onIncrement}>+</button>
        <button onClick={this.onDecrement}>-</button>
      </div>
    );
  }
}

export default Button;
