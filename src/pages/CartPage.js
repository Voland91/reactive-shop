import React from "react";
import CartItem from "../components/CartItem";
import { connect } from "react-redux";
import { Cart, CartHeader, CartFooter } from "../styles/CartPage";
import CartEmpty from "../components/CartEmpty";

const CartPage = ({ basketProps }) => {
  let productsInCart = [];
  const total = basketProps.cartCost.toFixed(2);

  Object.keys(basketProps.products).forEach(function (item) {
    if (basketProps.products[item].inCart) {
      productsInCart.push(basketProps.products[item]);
    }
  });

  productsInCart = productsInCart.map((product, index) => {
    return (
      <CartItem
        key={index}
        image={product.image}
        name={product.name}
        amount={product.amount}
        numbers={product.numbers}
      />
    );
  });

  const CartFilled = () => {
    return (
      <Cart>
        <CartHeader>
          <h4 className="cart_header_product">Product</h4>
          <h4 className="cart_header_price">Price</h4>
          <h4 className="cart_header_quantity">Quantity</h4>
          <h4 className="cart_header_total">Total</h4>
        </CartHeader>
        <div>{productsInCart}</div>
        <CartFooter>
          <p>
            Total cost: <span>{total}$</span>
          </p>
        </CartFooter>
      </Cart>
    );
  };

  return <>{total > 0 ? <CartFilled /> : <CartEmpty />}</>;
};

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

export default connect(mapStateToProps)(CartPage);
