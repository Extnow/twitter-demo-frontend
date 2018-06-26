import React from 'react';
import { IntlProvider } from 'react-intl';
import {
  BrowserRouter, Switch, Redirect, Route,
} from 'react-router-dom';
// css
import 'normalize.css';
import 'flexboxgrid2/flexboxgrid2.css';
// components
import Header from './Header';
import Profile from './Profile';

export default () => (
  <IntlProvider locale="en">
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Redirect exact from="/" to="/EveryInteract" />
          <Route exact path="/EveryInteract" component={Profile} />
        </Switch>
      </div>
    </BrowserRouter>
  </IntlProvider>
);
