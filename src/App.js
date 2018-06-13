import React, { Component } from "react";

import "normalize.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
// // import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// // import { render } from "react-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
          <Navigation />
        </Header>
      </div>
    );
  }
}

export default App;
