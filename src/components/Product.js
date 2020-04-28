import React from "react";
import "../styles/Product.scss";
import AddButton from "./AddButton";
import { Link } from "react-router-dom";

const Product = ({ image, name, amount, id }) => {
  return (
    <div className="product">
      <Link
        to={`/product/${id}`}
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <img src={image} alt={name} />
        <p className="price">${amount}</p>
        <h3>{name}</h3>
      </Link>
      <AddButton product={{ image, name, amount }} />
    </div>
  );
};

export default Product;
