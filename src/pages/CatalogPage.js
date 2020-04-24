import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "../styles/CatalogPage.scss";
import ItemsServie from "../services/ItemsService";
import Product from "../components/Product";
import Filter from "../components/Filter";

const products = ItemsServie.getProducts();

let list = products.map((product) => (
  <Product
    key={product.id}
    image={product.image}
    name={product.name}
    amount={product.amount}
    manufacture={product.manufacture}
    id={product.id}
    numbers={product.numbers}
  />
));

// const list = products.map((product) => (
//   <li key={product}>
//     <Link to={`/catalog/${product}`}>{product}</Link>
//   </li>
// ));

class CatalogPage extends Component {
  state = {
    search: "",
    manufacture: "All",
  };

  handleChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  handleClear = () => {
    this.setState({
      search: "",
      manufacture: "All",
    });
  };

  filteredList = () => {
    const { search, manufacture } = this.state;
    let results = list;
    if (manufacture === "All") {
      results = list.filter((item) =>
        item.props.name.toLowerCase().includes(search.toLowerCase())
      );
    } else {
      let radioResults = results.filter(
        (item) => item.props.manufacture === manufacture
      );
      results = radioResults.filter((item) =>
        item.props.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    return results;
  };

  handleRadioChange = (e) => {
    this.setState({
      manufacture: e.target.value,
    });
  };

  render() {
    return (
      <div className="container">
        <h2 className="header-big">Catalog</h2>

        <div className="Catalog">
          <div className="column-left">
            <Filter
              change={this.handleChange}
              click={this.handleClear}
              value={this.state.search}
              radio={this.handleRadioChange}
              radioVal={this.state.manufacture}
            />
          </div>
          <div className="column-right">
            <div className="products">{this.filteredList()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CatalogPage;
