import React from "react";
import { DetailsWidget, Header, ProductImg } from "../styles/ProductDetails";
import { Link } from "react-router-dom";
import { CatalogBtn } from "../styles/CatalogBtn";

const ProductDetails = ({ name, amount, category, image, manufacture }) => {
  return (
    <DetailsWidget>
      <Header>{name}</Header>
      <ProductImg src={image} />

      <CatalogBtn>
        <Link
          to="/catalog"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          Catalog
        </Link>
      </CatalogBtn>
    </DetailsWidget>
  );
};

export default ProductDetails;
