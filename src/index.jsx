/* eslint-disable react/prop-types */
/* eslint-disable prefer-object-spread */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/extensions */
/* eslint-disable react/no-children-prop */
import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore } from 'redux';
import App from './App.jsx';

// // Reducer
// const initialState = {
//   value: 0,
// };
// const INCREMENT = 'INCREMENT';

// const counterReducer = (state = initialState, action) => {
//   console.log(action.type);
//   switch (action.type) {
//     case INCREMENT:
//       // eslint-disable-next-line prefer-object-spread
//       return Object.assign({}, state, {
//         value: state.value + action.addBy,
//       });
//     default:
//       return state;
//   }
// };
// /*
// * Store
// */
// const store = createStore(counterReducer);

const render = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};

// store.subscribe(render);
render();
