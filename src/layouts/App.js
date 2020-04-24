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
        <Router>
          <div className="App">
            <nav>{<Navigation {...this.props} />}</nav>
            <main>{<Page {...this.props} />}</main>
            <footer>{<Footer />}</footer>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
