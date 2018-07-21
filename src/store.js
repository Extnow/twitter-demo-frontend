import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './complexes/reducers';

export default function store(initialState) {
  return createStore(reducer, initialState, applyMiddleware(thunk));
}
