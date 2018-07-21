// @flow

import React from 'react';
import ReactDOM from 'react-dom';
// redux
import { Provider } from 'react-redux';
import configureStore from './store';

import App from './App';
import 'normalize.css';
import 'flexboxgrid2/flexboxgrid2.css';

const root = document.getElementById('root');
if (!root) throw new Error('missing root');

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root,
);
