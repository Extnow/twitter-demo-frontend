import React, { Component } from "react";
// css
import "normalize.css";
import "flexboxgrid2/flexboxgrid2.css";
// components
import Header from "./Header";
import Profile from "./Profile";
// router
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Redirect exact from="/" to="/EveryInteract" />
            <Route exact path="/EveryInteract" component={Profile} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
