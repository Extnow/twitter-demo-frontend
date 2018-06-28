import React from 'react';
import { IntlProvider } from 'react-intl';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// components
import Header from './Header';
import OtherPage from './OtherPage';
import Profile from './ProfilePage';

export default () => (
  <IntlProvider locale="en">
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/moments" component={OtherPage} />
          <Route path="/notifications" component={OtherPage} />
          <Route path="/messages" component={OtherPage} />
          <Route path="/about" component={OtherPage} />
          <Route path="/help" component={OtherPage} />
          <Route path="/terms" component={OtherPage} />
          <Route path="/privacy" component={OtherPage} />
          <Route path="/cookies" component={OtherPage} />
          <Route path="/advertising" component={OtherPage} />
          <Route path="/info" component={OtherPage} />
          <Route path="/" component={Profile} />
        </Switch>
      </div>
    </BrowserRouter>
  </IntlProvider>
);
