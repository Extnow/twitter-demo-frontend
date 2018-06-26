import React, { Component } from "react";
// css
import "normalize.css";
import "flexboxgrid2/flexboxgrid2.css";
// components
import Header from "./Header";
import Profile from "./Profile";
// router
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
// libraries
import { IntlProvider } from "react-intl";

class App extends Component {
  render() {
    return (
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
  }
}

export default App;
