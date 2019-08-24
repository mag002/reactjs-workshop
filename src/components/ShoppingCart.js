import React, { Component } from "react";
import Filter from "./Filter";
import AllProduct from "./AllProduct";
import Cart from "./Cart";

export default class ShoppingCart extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Filter />
            </div>
            <div className="col-md-9">
              <AllProduct />
            </div>
          </div>
        </div>
        <Cart newProps="a" />
      </div>
    );
  }
}
