import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import store from "../store";

import Navigation from "./Navigation";
import Page from "./Page";
import Footer from "./Footer";

import "../styles/App.scss";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router basename={process.env.PUBLIC_URL}>
          <div className="App">
            <nav>{<Navigation />}</nav>
            <main>{<Page />}</main>
            <footer>{<Footer />}</footer>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
