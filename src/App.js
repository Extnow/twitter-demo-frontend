// @flow

import React from 'react';
import { IntlProvider } from 'react-intl';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
// redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './ProfilePage/reducer';
// components
import Header from './Header';
import TemplatePage from './TemplatePage';
import Profile from './ProfilePage';

const store = createStore(reducer, applyMiddleware(thunk));

export default () => (
  <Provider store={store}>
    <IntlProvider locale="en">
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/moments" component={TemplatePage} />
            <Route path="/notifications" component={TemplatePage} />
            <Route path="/messages" component={TemplatePage} />
            <Route path="/about" component={TemplatePage} />
            <Route path="/help" component={TemplatePage} />
            <Route path="/terms" component={TemplatePage} />
            <Route path="/privacy" component={TemplatePage} />
            <Route path="/cookies" component={TemplatePage} />
            <Route path="/advertising" component={TemplatePage} />
            <Route path="/info" component={TemplatePage} />
            <Route path="/search" component={TemplatePage} />
            <Route path="/:id" component={Profile} />
            <Redirect exact from="/" to="/1" />
          </Switch>
        </div>
      </BrowserRouter>
    </IntlProvider>
  </Provider>
);
