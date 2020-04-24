import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CatalogPage from "../pages/CatalogPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import CartPage from "../pages/CartPage";

const Page = (props) => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/catalog" component={CatalogPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/cart" component={CartPage} />
        {/* <Route path="/product/:id" component={ProductPage} /> */}
        {/* <Route path="/admin" component={AdminPage} /> */}
        {/* <Route path="/login" component={LoginPage} /> */}
        {/* <Route component={ErrorPage} /> */}
      </Switch>
    </>
  );
};

export default Page;
