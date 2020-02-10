/* eslint-disable react/prop-types */
/* eslint-disable prefer-object-spread */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/extensions */
/* eslint-disable react/no-children-prop */
import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import App from './App.jsx';

import counterApp from './reducer/index.js';

const store = createStore(counterApp);

const render = () => {
  ReactDOM.render(<App store={store} />, document.getElementById('root'));
};
store.subscribe(render);
render();
