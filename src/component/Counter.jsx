/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

const Counter = (props) => (
  <div>
    <h1>Value: {props.store.getState().counter.value}</h1>
  </div>
);

export default Counter;
