import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, Redirect } from 'react-router-dom';
// components
import Profile from './Profile';
import OtherPage from '../OtherPage';

export default () => (
  <React.Fragment>
    <Helmet>
      <title>
Every Interaction (@EveryInteract) | Twitter
      </title>
    </Helmet>
    <Switch>
      <Redirect from="/" to="/EveryInteraction" exact />
      <Route path="/moments" component={OtherPage} />
      <Route path="/notifications" component={OtherPage} />
      <Route path="/messages" component={OtherPage} />
      <Route path="/:username" component={Profile} />
    </Switch>
  </React.Fragment>
);
