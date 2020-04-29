import React, { Component } from "react";
import { HashRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "../store";

import Navigation from "./Navigation";
import Page from "./Page";
// import Footer from "./Footer";

import "../styles/App.scss";

class App extends Component {
  render() {
    return (
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
          <div className="App">
            <nav>{<Navigation />}</nav>
            <main>{<Page />}</main>
            {/* <footer>{<Footer />}</footer> */}
          </div>
        </Provider>
      </HashRouter>
    );
  }
}

export default App;
