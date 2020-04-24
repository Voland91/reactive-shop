import React from "react";
import "../styles/Filter.scss";
import "../styles/Radio.scss";
import ProductService from "../services/ItemsService";

const manufacturers = ["All", ...ProductService.getManufactures()].sort();

const Filter = (props) => {
  return (
    <div className="Filter">
      <h3>Filter</h3>
      <div className="search-bar">
        <h4>Search:</h4>
        <button className="clear" onClick={props.click}>
          Clear
        </button>
        <input
          className="search-input"
          type="text"
          placeholder="search..."
          value={props.value}
          onChange={props.change}
        />
        <h4>Manufacturer:</h4>
        <div className="Radio">
          {manufacturers.map((item) => (
            <div key={item}>
              <label htmlFor={item} className="container">
                <input
                  type="radio"
                  name="manufacturere"
                  id={item}
                  value={item}
                  onChange={props.radio}
                  checked={item === props.radioVal}
                />
                {item}
                <span className="checkmark"></span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
