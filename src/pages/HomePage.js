import React from "react";
import ItemsService from "../services/ItemsService";
import Product from "../components/Product";
import styled from "styled-components";
// import AbsoluteWrapper from "../components/AbsoluteWrapper";

const desktops = ItemsService.getFeatured("desktop");
const tablets = ItemsService.getFeatured("tablet");

const Products = styled.div`
  display: flex;
  justify-content: center;
`;
const Featured = styled.h2`
  text-align: center;
  font-size: 2rem;
`;

const TextInt = styled.span`
  font-size: 2rem;
  color: gray;
  font-style: italic;
`;

const featuredDesktops = desktops.map((product) => (
  <Product
    key={product.id}
    image={product.image}
    name={product.name}
    amount={product.amount}
    id={product.id}
  />
));
const featuredTablets = tablets.map((product) => (
  <Product
    key={product.id}
    image={product.image}
    name={product.name}
    amount={product.amount}
    id={product.id}
  />
));

const HomePage = () => {
  return (
    <>
      <div className="container">
        <h1 className="header-big">
          Welcome to our <TextInt>(reactive)</TextInt> store
          <TextInt> ...with redux state management</TextInt>
        </h1>
        <Featured>Desktops</Featured>
        <Products>{featuredDesktops}</Products>
        <Featured>Tablets</Featured>
        <Products>{featuredTablets}</Products>
      </div>
    </>
  );
};

export default HomePage;
