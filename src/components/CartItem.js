import React from "react";
import { ItemWrapper, Product, Numbers, Button } from "../styles/CartItem.js";
import { connect } from "react-redux";
import { productQuantity } from "../actions/productQuantity";

const CartItem = ({ image, name, amount, numbers, productQuantity }) => {
  let cost = (numbers * amount).toFixed(2);
  return (
    <ItemWrapper>
      <Product>
        <div className="item_img">
          <img src={image} alt={name} />
        </div>
        <h3>{name}</h3>
      </Product>
      <Numbers>
        <span className="amount">{amount}$</span>
        <Button
          className="btn_decrease"
          onClick={() => productQuantity("decrease", name)}
        >
          -
        </Button>
        <span className="quantity">{numbers}</span>
        <Button
          className="btn_increase"
          onClick={() => productQuantity("increase", name)}
        >
          +
        </Button>
        <span className="total">{cost}$</span>
      </Numbers>
    </ItemWrapper>
  );
};
const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

export default connect(mapStateToProps, { productQuantity })(CartItem);
