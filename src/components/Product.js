import React from "react";
import "../styles/Product.scss";
import AddButton from "./AddButton";

const Product = ({ image, name, amount }) => {
  return (
    <div className="product">
      <img src={image} alt={name} />
      <p className="price">${amount}</p>
      <h3>{name}</h3>
      <AddButton product={{ image, name, amount }} />
    </div>
  );
};

export default Product;
