import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import "../styles/CartEmpty.scss";

const CartEmpty = () => {
  return (
    <div className="empty_cart_container container">
      <h3>{"Your cart is empty :("}</h3>
      <div className="cart_icon">
        <FontAwesomeIcon icon={faShoppingCart} />
      </div>
    </div>
  );
};

export default CartEmpty;
