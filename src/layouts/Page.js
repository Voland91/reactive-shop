import React, { useContext } from "react";
import { Route, Switch, __RouterContext } from "react-router-dom";
import { useTransition, animated } from "react-spring";

import HomePage from "../pages/HomePage";
import CatalogPage from "../pages/CatalogPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import CartPage from "../pages/CartPage";
import OrderPage from "../pages/OrderPage";
import ProductPage from "../pages/ProductPage";

const Page = () => {
  const { location } = useContext(__RouterContext);
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0, transform: "translate(100%, 0)" },
    enter: { opacity: 1, transform: "translate(0%, 0)" },
    leave: { opacity: 0, transform: "translate(-50%, 0)" },
  });

  return (
    <>
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={item}>
            <Route exact path="/" component={HomePage} />
            <Route path="/catalog" component={CatalogPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/cart" component={CartPage} />
            <Route path="/product/:id" component={ProductPage} />
            <Route path="/order" component={OrderPage} />
            {/* <Route path="/admin" component={AdminPage} /> */}
            {/* <Route path="/login" component={LoginPage} /> */}
            {/* <Route component={ErrorPage} /> */}
          </Switch>
        </animated.div>
      ))}
    </>
  );
};

export default Page;
