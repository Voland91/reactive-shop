import React from "react";
import ProductDetails from "../components/ProductDetails";
import { Container } from "../styles/OrderPage";

import ItemsService from "../services/ItemsService";

const ProductPage = ({ match }) => {
  const product = ItemsService.getProductById(match.params.id);
  const { name, amount, category, image, manufacture } = product[0];

  return (
    <Container>
      <ProductDetails
        name={name}
        amount={amount}
        category={category}
        image={image}
        manufacture={manufacture}
      />
    </Container>
  );
};

export default ProductPage;
