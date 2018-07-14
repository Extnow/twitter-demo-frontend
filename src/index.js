// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'normalize.css';
import 'flexboxgrid2/flexboxgrid2.css';

const root = document.getElementById('root');

if (root !== null) {
  ReactDOM.render(<App />, root);
}
